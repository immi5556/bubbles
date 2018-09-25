use immanuel_kv
go

select top 10 * from KeyVal

select IpAddr, count(*) [Count], max(createdat) LastRecievedAt from KeyVal group by IpAddr

select CLientKey, count(*) [Count], max(createdat) LastRecievedAt from KeyVal group by CLientKey

select top 1000 * from KeyVal where clientkey = '45fdtkob'

select count(*) from KeyVal

use immanuel_data
go

select * from Users

select * from UsersLog order by createdat desc

select * from UserPage  order by  1 desc
select * from UserPage where PageUrl = '4d5096b3-ce68-4219-bc32-6cef750d78e1'
select top 10 * from UserPageLog order by 1 desc

select * from Users
select * from UserPage  order by  1 desc
select * from UserPageMap order by  1 desc

--delete from UserPageMap 

select * from PageFile pf, UserPage up
	where pf.PageUrl = up.PageUrl and up.PageUrl = '4d5096b3-ce68-4219-bc32-6cef750d78e1'

--delete from PageFile
select * from PageFile order by 1 desc

--delete from PageFileLog
select * from PageFileLog order by 1 desc
4d5096b3-ce68-4219-bc32-6cef750d78e1
4d5096b3-ce68-4219-bc32-6cef750d78e1

GetPage '1234556'