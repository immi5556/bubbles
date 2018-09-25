using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.ServiceModel.Channels;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace Immanuel.WhatsUp.Web.Controllers
{
    public class WupController : ApiController
    {
        [HttpGet]
        [Route("api/file/src")]
        public HttpResponseMessage GetFile(string fullname)
        {
            //var path = Environment.CurrentDirectory;
            string path = Path.Combine(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Temp"), fullname);
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(path, FileMode.Open, FileAccess.Read);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentType =
                new MediaTypeHeaderValue("application/octet-stream");
            return result;
        }

        [HttpPost]
        [Route("api/file/message/{pageid}")]
        public HttpResponseMessage SendMessage(string pageid)
        {
            var ip = getIPAddress(Request);
            List<Models.WFile> _fls = new List<Models.WFile>();
            _fls.Add(new Models.WFile()
            {
                MsgType = System.Web.HttpContext.Current.Request.Form["_msgtype"],
                Message = System.Web.HttpContext.Current.Request.Form["_capt"],
                FileUrl = "",
                PageUrl = System.Web.HttpContext.Current.Request.Form["_purl"],
                Ip = ip,
                Nick = System.Web.HttpContext.Current.Request.Form["_nick"]
            });
            List<dynamic> ff = new List<dynamic>();
            _fls.ForEach(t =>
            {
                //Column Sequence should be similar to database collection table 
                ff.Add(new
                {
                    MsgType = t.MsgType,
                    Message = t.Message,
                    FileUrl = t.FileUrl,
                    PageUrl = t.PageUrl,
                    Nick = t.Nick,
                    Ip = ip
                });
            });
            Code.WupDataAccess.CreatePageFile(ff);
            return new HttpResponseMessage()
            {
                Content = new JsonContent(new
                {
                    MsgResp = "Success",
                    Error = false,
                    Upl = _fls
                })
            };
        }

        [HttpPost]
        [Route("api/file/{pageid}")]
        public HttpResponseMessage UploadFile(string pageid)
        {
            System.Web.HttpFileCollection hfc = System.Web.HttpContext.Current.Request.Files;
            if (hfc.Count < 1)
            {
                throw new ApplicationException("Empty File Bad Request");
            }
            var ip = getIPAddress(Request);
            List<Models.WFile> _fls = new List<Models.WFile>();
            foreach(string t in hfc)
            {
                HttpPostedFile tt = System.Web.HttpContext.Current.Request.Files[t];
                string pPath = GetFile(Path.Combine(GetDirectory(pageid), tt.FileName), 0);
                tt.SaveAs(pPath);
                _fls.Add(new Models.WFile()
                {
                    MsgType = System.Web.HttpContext.Current.Request.Form[tt.FileName + "_msgtype"],
                    Message = System.Web.HttpContext.Current.Request.Form[tt.FileName + "_capt"],
                    FileUrl = String.Join("/", pPath.Split('\\').Reverse().Take(3).Reverse()),
                    PageUrl = System.Web.HttpContext.Current.Request.Form[tt.FileName + "_purl"],
                    Nick = System.Web.HttpContext.Current.Request.Form[tt.FileName + "_nick"],
                    Ip = ip
                });
            }
            List<dynamic> ff = new List<dynamic>();
            _fls.ForEach(t =>
            {
                //Column Sequence should be similar to database collection table 
                ff.Add(new
                {
                    MsgType = t.MsgType,
                    Message = t.Message,
                    FileUrl = t.FileUrl,
                    PageUrl = t.PageUrl,
                    Nick = t.Nick,
                    Ip = ip
                });
            });
            Code.WupDataAccess.CreatePageFile(ff);
            return new HttpResponseMessage()
            {
                Content = new JsonContent(new
                {
                    MsgResp = "Success",
                    Error = false,
                    Upl = _fls
                })
            };
        }

        string GetDirectory(string pageid)
        {
            string path = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Temp");
            string tdir = (DateTime.Now.Year.ToString() + "_" + DateTime.Now.Month.ToString() + "_" + DateTime.Now.Day.ToString());
            string fPath = Path.Combine(path, pageid, tdir);
            if (!Directory.Exists(fPath))
            {
                Directory.CreateDirectory(fPath);
            }
            return fPath;
        }

        string GetFile(string fpath, int seq)
        {
            string i = "_" + seq.ToString();
            string fpath1 = Path.Combine(Path.GetDirectoryName(fpath), Path.GetFileNameWithoutExtension(fpath) + i.ToString() + Path.GetExtension(fpath));
            if (!File.Exists(fpath1))
            {
                return fpath1;
            }
            else
            {
                return GetFile(fpath, ++seq);
            }
        }

        [HttpPost]
        [Route("api/page/update")]
        public HttpResponseMessage UpdatePage(Models.WPage page)
        {
            page.Ip = getIPAddress(Request);
            Code.WupDataAccess.UpdatePage(page);
            return new HttpResponseMessage()
            {
                Content = new JsonContent(new
                {
                    MsgResp = "Success",
                    Error = false
                })
            };
        }

        [HttpPost]
        [Route("api/page/create")]
        public HttpResponseMessage CreatePage(Models.WPage page)
        {
            page.Ip = getIPAddress(Request);
            var pg = Code.WupDataAccess.CreatePage(page);
            return new HttpResponseMessage()
            {
                Content = new JsonContent(new
                {
                    MsgResp = "Success",
                    Error = false,
                    NewPage = pg
                })
            };
        }

        [HttpGet]
        [Route("api/file/get/{pageid}/{max}")]
        public List<Models.WFile> GetFilesForPage(string pageid, int max)
        {
            if (max == -2)
                return new List<Models.WFile>();
            return Code.WupDataAccess.GetFilesForPage(pageid, max);
        }

        [HttpGet]
        [Route("api/page/get/{phn}")]
        public List<Models.WPage> GetPages(string phn)
        {
            return Code.WupDataAccess.GetPages(phn);
        }

        [HttpGet]
        [Route("api/verify/{cc}/{cry}/{phn}/{code}")]
        public HttpResponseMessage SmsCodeVerify(string cc, string cry, string phn, string code)
        {
            var ret = Code.WupDataAccess.CheckCode(new
            {
                Code = code,
                CountryCode = cc,
                Country = cry,
                Mob = phn,
                Ip = getIPAddress(Request)
            });
            try
            {
                
                var sesfil = HttpContext.Current.Server.MapPath("~/App_Data/" + phn + ".access");
                System.IO.File.Delete(sesfil);
                System.IO.File.WriteAllText(sesfil, "");
            }
            catch { }

            return new HttpResponseMessage()
            {
                Content = new JsonContent(new
                {
                    MsgResp = ret ? "Success" : "Verifcation Failed",
                    Error = !ret
                })
            };
        }

        static Random generator = new Random();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="cc">Calling Code (91, 1, 971 etc)</param>
        /// <param name="cry">Country (US, IN etc)</param>
        /// <param name="phn">10 Digit Mobile No</param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/sms/{cc}/{cry}/{phn}/{nn}")]
        public HttpResponseMessage SmsCode(string cc, string cry, string phn, string nn)
        {
            //!%20This%20is%20a%20test%20message
            //Welcome to Immanuel Whatup - Code : 
            int r = generator.Next(100000, 1000000);
            var msg = "Welcome to Immanuel Whatup - Code : " + r.ToString();
            msg = WebUtility.HtmlEncode(msg);
            //string url = "https://api.msg91.com/api/sendhttp.php?country=" + cc.ToString() + "&sender=WHATUP&route=4&mobiles=" + phn + "&authkey=209195A8GvDZdX5acc4488&encrypt=&message=" + msg + "";
            //var client = new RestClient(url);
            //var request = new RestRequest(Method.GET);
            //IRestResponse response = client.Execute(request);
            IRestResponse response = new RestResponse();
            response.StatusCode = HttpStatusCode.OK;
            HttpResponseMessage resp = null;
            if ( response.StatusCode == HttpStatusCode.OK)
            {
                Code.WupDataAccess.CheckUser(new
                {
                    Code = r.ToString(),
                    CountryCode = cc,
                    Country = cry,
                    Mob = phn,
                    NickName = nn,
                    Ip = getIPAddress(Request)
                });
                resp = new HttpResponseMessage()
                {
                    Content = new JsonContent(new
                    {
                        MsgResp = "Success",
                        Error = false
                    })
                };
            } else
            {
                resp = new HttpResponseMessage()
                {
                    Content = new JsonContent(new
                    {
                        MsgResp = "Error Details",
                        Error = true
                    })
                };
            }
            return resp;
        }

        private string getIPAddress(HttpRequestMessage request)
        {
            request = request ?? Request;

            if (request.Properties.ContainsKey("MS_HttpContext"))
            {
                return ((HttpContextWrapper)request.Properties["MS_HttpContext"]).Request.UserHostAddress;
            }
            else if (request.Properties.ContainsKey(RemoteEndpointMessageProperty.Name))
            {
                RemoteEndpointMessageProperty prop = (RemoteEndpointMessageProperty)request.Properties[RemoteEndpointMessageProperty.Name];
                return prop.Address;
            }
            else if (HttpContext.Current != null)
            {
                return HttpContext.Current.Request.UserHostAddress;
            }
            else
            {
                //Request.GetOwinContext().Request.RemoteIpAddress
                return null;
            }
        }

        private static bool _IsPrivate(string ipAddress)
        {
            int[] ipParts = ipAddress.Split(new String[] { "." }, StringSplitOptions.RemoveEmptyEntries)
                                     .Select(s => int.Parse(s)).ToArray();
            // in private ip range
            if (ipParts[0] == 10 ||
                (ipParts[0] == 192 && ipParts[1] == 168) ||
                (ipParts[0] == 172 && (ipParts[1] >= 16 && ipParts[1] <= 31)))
            {
                return true;
            }

            // IP Address is probably public.
            // This doesn't catch some VPN ranges like OpenVPN and Hamachi.
            return false;
        }
    }

    public class JsonContent : HttpContent
    {

        private readonly MemoryStream _Stream = new MemoryStream();
        public JsonContent(object value)
        {

            Headers.ContentType = new MediaTypeHeaderValue("application/json");
            var jw = new JsonTextWriter(new StreamWriter(_Stream));
            jw.Formatting = Formatting.Indented;
            var serializer = new JsonSerializer();
            serializer.Serialize(jw, value);
            jw.Flush();
            _Stream.Position = 0;

        }
        protected override Task SerializeToStreamAsync(Stream stream, TransportContext context)
        {
            return _Stream.CopyToAsync(stream);
        }

        protected override bool TryComputeLength(out long length)
        {
            length = _Stream.Length;
            return true;
        }
    }
}