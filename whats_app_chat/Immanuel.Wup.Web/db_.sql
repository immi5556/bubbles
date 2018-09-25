USE [immanuel_data]
GO

drop table Users
go

create table Users
(
	UserId Int Identity not null,
	Mobile varchar(15),
	Email varchar(60),
	[IP] varchar(60),
	Code varchar(6),
	CountryCode varchar(5),
	Country varchar(15),
	CreatedAt datetime not null default getdate()
)
go
alter table Users add Nick varchar(25)
GO

drop table UsersLog
go

create table UsersLog
(
	UserId Int not null,
	[Action] varchar(30),
	Mobile varchar(15),
	Email varchar(60),
	[IP] varchar(60),
	Code varchar(6),
	CountryCode varchar(5),
	Country varchar(15),
	CreatedAt datetime not null default getdate()
)

GO

alter table UsersLog add Nick varchar(25)
GO

drop table UserPage
go

create table UserPage
(
	UserPageId Int Identity not null,
	UserId int not null,
	PageUrl varchar(350) unique,
	PageName varchar(100),
	[Ip] varchar(60),
	[Secured] bit default 0,
	[AllowedMobiles] varchar(2000),
	CreatedAt datetime not null default getdate()
)

GO

drop table UserPageMap
go

create table UserPageMap
(
	UserPageMapId Int Identity not null,
	UserPageId Int,
	UserId int not null,
	IsOwner bit,
	PageUrl varchar(350),
	[Ip] varchar(60),
	CreatedAt datetime not null default getdate()
)

GO

alter table UserPage add Nick varchar(25)
GO

drop table UserPageLog
go

create table UserPageLog
(
	UserPageId Int Identity not null,
	[Action] varchar(30),
	UserId int not null,
	PageUrl varchar(350),
	PageName varchar(100),
	[Ip] varchar(60),
	[Secured] bit,
	[AllowedMobiles] varchar(2000),
	Mobile varchar(15),
	Email varchar(60),
	CountryCode varchar(5),
	Country varchar(15),
	CreatedAt datetime not null default getdate()
)

GO

alter table UserPageLog add Nick varchar(25)
GO

drop table PageFile
go

create table PageFile
(
	PageFileId Int Identity not null,
	UserPageId int not null,
	[MsgType] varchar(30),
	[Message] varchar(1350),
	[FileUrl] varchar(1350),
	[IP]  varchar(60),
	[Nick] varchar(25),
	[CreatedBy] int,
	CreatedAt datetime not null default getdate()
)

GO

drop table PageFileLog
go

create table PageFileLog
(
	PageFileLogId Int Identity not null,
	[Action] varchar(30),
	PageFileId Int,
	PageUrl varchar(1350),
	UserPageId int,
	[MsgType] varchar(30),
	[Message] varchar(1350),
	[FileUrl] varchar(1350),
	[IP]  varchar(60),
	[Nick] varchar(25),
	[CreatedBy] int,
	CreatedAt datetime not null default getdate()
)

GO


-----SP

drop PROCEDURE CheckUser
go

CREATE PROCEDURE CheckUser
	@mob varchar(15),
	@ip varchar(60),
	@Code varchar(6),
	@CountryCode varchar(5),
	@Country varchar(15),
	@nick varchar(25)
AS
BEGIN
	merge Users as tgt
	using (select @mob Mobile,
				  @CountryCode CountryCode) as src
	on (tgt.Mobile like '%' + src.Mobile + '%'
		and tgt.CountryCode like '%' + src.CountryCode + '%')
	when matched then
		update set 
			Code = @Code,
			CountryCode = @CountryCode, 
			Country = @Country,
			Mobile = @mob,
			[IP] = @ip,
			Nick = @nick
			--,CreatedAt = getdate()
	WHEN NOT MATCHED BY TARGET THEN
		INSERT (Mobile, Email, [IP], Code, CountryCode, Country, Nick)
			values (@mob, '', @ip, @Code, @CountryCode, @Country, @nick)
	output isnull(deleted.UserId, inserted.UserId), $ACTION, isnull(deleted.Mobile, inserted.Mobile),
		   isnull(deleted.Email, inserted.Email), isnull(deleted.[IP], inserted.[IP]), 
			isnull(deleted.Code, inserted.Code), isnull(deleted.CountryCode, inserted.CountryCode), 
			isnull(deleted.Country, inserted.Country), getdate(), isnull(deleted.Nick, inserted.Nick)
		into UsersLog
	;
END

GO

--CheckUser '1212', '12121', '123456', '91', 'IN'
--declare @mob varchar(15) = '12121'
--declare @CountryCode varchar(5) = '91'
--select * from Users where 
--					mobile like '%' + @mob + '%'
--				and CountryCode like '%' + @CountryCode + '%'

drop PROCEDURE CheckCode
go

CREATE PROCEDURE CheckCode
	@mob varchar(15),
	@ip varchar(60),
	@Code varchar(6),
	@CountryCode varchar(5),
	@Country varchar(15) 
AS
BEGIN
	declare @uid int = 0
	select @uid = UserId from users where 
			mobile = @mob
		and CountryCode = @CountryCode
		and Country = @Country
		and Code = @Code
	INSERT INTO [UsersLog]
           ([UserId],[Action],[Mobile],[Email],[IP],[Code],[CountryCode],[Country],[CreatedAt])
     VALUES
           (@uid, case when isnull(@uid, 0) > 0 then 'VerifiedSuccess' else 'VerifiedError' end
           ,@mob,'',@ip,@Code,@CountryCode,@Country,getdate())
	select isnull(@uid, 0)
END

GO

drop PROCEDURE GetPage
go

CREATE PROCEDURE GetPage
	@mob varchar(15)
AS
BEGIN
	select up.CreatedAt, up.PageUrl, up.PageName, up.Ip, up.UserId, 
		  up.UserPageId, u.Mobile, up.AllowedMobiles, up.Nick, up.Secured, upm.IsOwner
		from Users u inner join  UserPageMap upm
			on upm.UserId = u.UserId
			left join UserPage up on upm.UserPageId = up.UserPageId
		where (@mob is null or @mob = u.mobile)
END

GO

--GetPage '123'
--GetPage '321'

drop PROCEDURE GetPageById
go

CREATE PROCEDURE GetPageById
	@PageUrl varchar(350),
	@mob varchar(15),
	@Ip varchar(60)
AS
BEGIN
	declare @uid int = 0;
	declare @upid int = 0;
	declare @ownid int = 0 ;
	select @uid = UserId from Users where Mobile = @mob
	select  @upid = UserPageId from UserPage where PageUrl = @PageUrl
	select @ownid = UserId from UserPageMap where PageUrl = @PageUrl and IsOwner = 1
	select up.CreatedAt, up.PageUrl, up.PageName, up.Ip, up.UserId,  
		  up.UserPageId, u.Mobile, up.AllowedMobiles, up.Nick, up.Secured, iif(@ownid = @uid, 1, 0 ) IsOwner
		from UserPage up, Users u
		where up.PageUrl = @PageUrl
		and up.UserId = u.UserId
	if (not exists (select * from UserPageMap where PageUrl = @PageUrl and UserId = @uid)
		and @uid != 0 and @upid != 0)
	begin
		INSERT INTO [UserPageMap]
           ([UserPageId], [UserId], [IsOwner], [PageUrl], [Ip], [CreatedAt])
		VALUES (@upid, @uid, 0, @PageUrl, @Ip,getdate())
		--VALUES (@upid, @uid,iif(@uid = @ownid, 1, 0) ,@PageUrl, @Ip,getdate())
	end

	--select * from PageFile where Pa
END

GO

--GetPageById 'be26de62-307e-4799-99fd-75128c9fb3ed', '123', ''

drop PROCEDURE CreatePage
go

CREATE PROCEDURE CreatePage
	@mob varchar(15),
	@PageUrl varchar(350),
	@PageName varchar(100),
	@Nick varchar(25),
	@Ip varchar(60)
AS
BEGIN
	declare @uid int = 0;
	declare @upid int = 0;
	select @uid = UserId from Users where Mobile = @mob
	set @PageName = iif(isnull(@PageName, '') = '', 'Title', @PageName)
	INSERT INTO [immanuel_sa].[UserPage]
           ([UserId], [PageUrl], PageName ,[Ip], Nick)
     VALUES
           (@uid, @PageUrl, @PageName, @Ip, @Nick)
	select @upid = scope_identity()
	INSERT INTO [UserPageLog]
           ([Action], [UserId], [PageUrl], [PageName], [Ip], [Secured], [AllowedMobiles], [Mobile], [Email], [CountryCode], [Country], [CreatedAt], [Nick])
     (select 'CreatePage', UserId, @PageUrl, @PageName, @Ip, 0, '', Mobile, Email, [CountryCode], [Country], getdate(), @Nick
		from Users u where u.UserId = @uid)

	INSERT INTO [UserPageMap]
           ([UserPageId], [UserId], [IsOwner], [PageUrl], [Ip], [CreatedAt])
     VALUES (@upid,@uid,1,@PageUrl,@Ip,getdate())

	select * from UserPage up where up.UserPageId = @upid
END

GO

drop PROCEDURE UpdatePage
go

CREATE PROCEDURE UpdatePage
	@mob varchar(15),
	@PageName varchar(100),
	@PageUrl varchar(350),
	@Ip varchar(60),
	@Nick varchar(25),
	@Secured bit,
	@AllowedMobiles varchar(2000)
AS
BEGIN
	declare @uid int = 0;
	select @uid = UserId from Users where Mobile = @mob
	if (isnull(@uid, 0) = 0)
	begin
		select @uid = UserId from UserPage  where PageUrl = @PageUrl
		update [UserPage]
			set PageName = iif(isnull(@PageName, '') = '', 'Title-U', @PageName)
			   ,[Ip] = @Ip
			   ,[Secured] = @Secured
			   ,[AllowedMobiles] = @AllowedMobiles
			   ,[Nick] = @Nick
		where UserId = @uid and PageUrl = @PageUrl
	end
	else
	begin
		update [UserPage]
			set PageName = iif(isnull(@PageName, '') = '', 'Title', @PageName)
			   ,[Ip] = @Ip
			   ,[Secured] = @Secured
			   ,[AllowedMobiles] = @AllowedMobiles
			   ,[Nick] = @Nick
		where UserId = @uid and PageUrl = @PageUrl
	end

	INSERT INTO [UserPageLog]
           ([Action], [UserId], [PageUrl], [PageName], [Ip], [Mobile], [Email], [Secured], [AllowedMobiles], [CountryCode], [Country], [CreatedAt], [Nick])
     (select 'UpdatePage', UserId, @PageUrl, @PageName, @Ip, Mobile, Email, @Secured, @AllowedMobiles, [CountryCode], [Country], getdate(), Nick from Users where UserId = @uid)
END

GO

drop PROCEDURE CreatePageFile
go

DROP TYPE PageFileList
GO

CREATE TYPE PageFileList 
AS TABLE
(
	[MsgType] varchar(30),
	[Message] varchar(1350),
	[FileUrl] varchar(1350),
	[PageUrl] varchar(1350),
	[Nick] varchar(25),
	[Ip] varchar(60)
);
GO

CREATE PROCEDURE CreatePageFile
	 @dt AS PageFileList READONLY
AS
BEGIN
	--declare @upid int = 0;
	--declare @uid int = 0;
	--select @upid = UserPageId, @uid = UserId from UserPage where PageUrl = @PageUrl
	INSERT INTO [PageFile]
           ([UserPageId]
           ,[MsgType]
           ,[Message]
           ,[FileUrl]
           ,[IP]
		   ,[CreatedBy]
		   ,[Nick] 
           ,[CreatedAt])
	SELECT up.UserPageId, d.MsgType, d.[Message], d.FileUrl, d.[Ip], up.UserId, d.Nick, getdate() FROM @dt d, UserPage up where up.PageUrl = d.PageUrl

	INSERT INTO [PageFileLog]
           ([Action], PageUrl, [PageFileId],[UserPageId],[MsgType],[Message],[FileUrl],[IP], [Nick], [CreatedAt])
	 (SELECT 'PageFile', d.PageUrl, 0, up.UserPageId, d.MsgType, d.[Message], d.FileUrl, d.[Ip],  d.Nick, getdate() FROM @dt d, UserPage up where up.PageUrl = d.PageUrl)
	 --(SELECT 'PageFile', d.PageUrl, 0, 0, d.MsgType, d.[Message], d.FileUrl, d.[Ip], getdate() FROM @dt d)

END

GO

DROP PROCEDURE GetFilesForPage
GO

CREATE PROCEDURE GetFilesForPage
	@PageUrl varchar(350),
	@max int
AS
BEGIN
	declare @upid int = 0
	select @upid = UserPageId from UserPage where PageUrl = @PageUrl
	if (@max = -1)
	begin
		select top 10 * from PageFile where userpageid = @upid order by 1 desc
	end
	else
	begin
		select top 10 * from PageFile where userpageid = @upid and userpageid < @max order by 1 desc
	end
END

GO

--GetFilesForPage '4d5096b3-ce68-4219-bc32-6cef750d78e1', -1