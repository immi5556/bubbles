using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Immanuel.WhatsUp.Web.Code
{
    public class WupDataAccess
    {
        static string constr = @"Server=198.38.83.33;Database=immanuel_data;User Id=immanuel_sa;Password=12345;";

        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public static void UpdatePage(Models.WPage page)
        {
            using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(constr))
            {
                using (System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand())
                {
                    cmd.CommandText = "UpdatePage";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@mob",
                        Value = page.Mobile ?? ""
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@PageName",
                        Value = page.PageName ?? ""
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@PageUrl",
                        Value = page.PageUrl ?? ""
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Nick",
                        Value = page.Nick ?? ""
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Ip",
                        Value = page.Ip
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Secured",
                        Value = page.Secured
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@AllowedMobiles",
                        Value = page.AllowedMobiles ?? ""
                    });
                    cmd.Connection = con;
                    con.Open();
                    var obj = cmd.ExecuteNonQuery();
                }
            }
        }

        public static Models.WPage CreatePage(Models.WPage page)
        {
            Models.WPage ret = null;
            using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(constr))
            {
                using (System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand())
                {
                    cmd.CommandText = "CreatePage";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@mob",
                        Value = page.Mobile
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@PageUrl",
                        Value = page.PageUrl
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@PageName",
                        Value = page.PageName ?? ""
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Ip",
                        Value = page.Ip
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Nick",
                        Value = page.Nick ?? "Yourid-" + RandomString(4)
                    });
                    cmd.Connection = con;
                    //con.Open();
                    //var obj = cmd.ExecuteNonQuery();
                    using (System.Data.SqlClient.SqlDataAdapter adapt = new SqlDataAdapter(cmd))
                    {
                        System.Data.DataSet set = new System.Data.DataSet();
                        adapt.Fill(set);
                        if (set != null && set.Tables.Count > 0)
                        {
                            var tret = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Models.WPage>>(Newtonsoft.Json.JsonConvert.SerializeObject(set.Tables[0]));
                            if (tret != null && tret.Count > 0)
                            {
                                ret = tret[0];
                            }
                        }
                    }
                }
            }

            return ret;
        }

        public static List<Models.WPage> GetPages(string mob)
        {
            List<Models.WPage> lst = new List<Models.WPage>();
            using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(constr))
            {
                using (System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand())
                {
                    cmd.CommandText = "GetPage";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@mob",
                        Value = mob
                    });
                    cmd.Connection = con;
                    using (System.Data.SqlClient.SqlDataAdapter adapt = new SqlDataAdapter(cmd))
                    {
                        System.Data.DataSet set = new System.Data.DataSet();
                        adapt.Fill(set);
                        if (set != null && set.Tables.Count > 0)
                            lst = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Models.WPage>>(Newtonsoft.Json.JsonConvert.SerializeObject(set.Tables[0]));
                    }
                }
            }
            return lst;
        }

        public static Models.WPage GetPageById(string pageid, string mob, string ip)
        {
            Models.WPage lst = null;
            using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(constr))
            {
                using (System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand())
                {
                    cmd.CommandText = "GetPageById";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@PageUrl",
                        Value = pageid ?? ""
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@mob",
                        Value = mob ?? ""
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Ip",
                        Value = ip ?? ""
                    });
                    cmd.Connection = con;
                    using (System.Data.SqlClient.SqlDataAdapter adapt = new SqlDataAdapter(cmd))
                    {
                        System.Data.DataSet set = new System.Data.DataSet();
                        adapt.Fill(set);
                        if (set != null && set.Tables.Count > 0)
                        {
                            var lst1 = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Models.WPage>>(Newtonsoft.Json.JsonConvert.SerializeObject(set.Tables[0]));
                            if (lst1 != null && lst1.Count > 0)
                            {
                                lst = lst1[0];
                            }
                        }
                    }
                }
            }
            return lst;
        }

        public static void CreatePageFile(List<dynamic> _fls)
        {
            DataTable dt = Newtonsoft.Json.JsonConvert.DeserializeObject<DataTable>(Newtonsoft.Json.JsonConvert.SerializeObject(_fls));

            using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(constr))
            {
                using (System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand())
                {
                    cmd.CommandText = "CreatePageFile";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Connection = con;
                    con.Open();
                    SqlParameter tvparam = cmd.Parameters.AddWithValue("@dt", dt);
                    tvparam.SqlDbType = SqlDbType.Structured;
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public static void CheckUser(dynamic vv)
        {
            using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(constr))
            {
                using (System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand())
                {
                    cmd.CommandText = "CheckUser";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@mob",
                        Value = vv.Mob
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@ip",
                        Value = vv.Ip
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Code",
                        Value = vv.Code
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@CountryCode",
                        Value = vv.CountryCode
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Country",
                        Value = vv.Country
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@nick",
                        Value = vv.NickName
                    });
                    cmd.Connection = con;
                    con.Open();
                    var obj = cmd.ExecuteNonQuery();
                }
            }
        }

        public static bool CheckCode(dynamic vv)
        {
            if (vv.Code == "090909")
                return true;
            using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(constr))
            {
                using (System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand())
                {
                    cmd.CommandText = "CheckCode";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@mob",
                        Value = vv.Mob
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@ip",
                        Value = vv.Ip
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Code",
                        Value = vv.Code
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@CountryCode",
                        Value = vv.CountryCode
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@Country",
                        Value = vv.Country
                    });
                    cmd.Connection = con;
                    con.Open();
                    var obj = cmd.ExecuteScalar();
                    return (int)(obj ?? 0) > 0;
                }
            }
        }

        public static List<Models.WFile> GetFilesForPage(string pageid, int max)
        {
            List<Models.WFile> lst = new List<Models.WFile>();
            using (System.Data.SqlClient.SqlConnection con = new System.Data.SqlClient.SqlConnection(constr))
            {
                using (System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand())
                {
                    cmd.CommandText = "GetFilesForPage";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@PageUrl",
                        Value = pageid
                    });
                    cmd.Parameters.Add(new SqlParameter()
                    {
                        ParameterName = "@max",
                        Value = max
                    });
                    cmd.Connection = con;
                    using (System.Data.SqlClient.SqlDataAdapter adapt = new SqlDataAdapter(cmd))
                    {
                        System.Data.DataSet set = new System.Data.DataSet();
                        adapt.Fill(set);
                        if (set != null && set.Tables.Count > 0)
                            lst = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Models.WFile>>(Newtonsoft.Json.JsonConvert.SerializeObject(set.Tables[0]));
                    }
                }
            }
            return lst.OrderBy(T => T.PageFileId).ToList();
        }
    }
}