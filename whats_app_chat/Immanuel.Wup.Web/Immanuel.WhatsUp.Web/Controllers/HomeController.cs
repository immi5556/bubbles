using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace Immanuel.WhatsUp.Web.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Sched()
        {
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        //[HttpPost]
        //[Route("Home/Page")]
        //public ActionResult Page(string id, string mob)
        //{
        //    var ty = Code.WupDataAccess.GetPageById(id, mob ?? "", GetIPAddress(Request));
        //    if (ty == null && !string.IsNullOrEmpty(id))
        //        return RedirectToAction("Error");
        //    ViewBag.PageTitle = ty == null ? "Title - S" : ty.PageName;
        //    ViewBag.PageData = Newtonsoft.Json.JsonConvert.SerializeObject(new
        //    {
        //        HomePage = ty == null ? true : false,
        //        Header = ty,
        //        File = new System.Collections.ArrayList()
        //    });
        //    return View();
        //}

        //[Route("Home/PageOnly/{pageid}")]
        //[HttpGet]
        //public ActionResult PageOnly(string pageid)
        //{
        //    ViewBag.PageTitle = "Title - S";
        //    ViewBag.PageData = Newtonsoft.Json.JsonConvert.SerializeObject(new
        //    {
        //        HomePage = true,
        //        Header = "",
        //        File = new System.Collections.ArrayList(),
        //        Status = "Reload"
        //    });
        //    return View();
        //}

        [Route("Home/SetSession/{id}")]
        [HttpGet]
        public JsonResult SetSession(string id)
        {

            Session["mob"] = id;
            return Json(Session, JsonRequestBehavior.AllowGet);
        }

        [Route("Home/Landing/{id}")]
        [HttpGet]
        public ActionResult Landing(string id)
        {
            return View();
        }

        [Route("Home/Page/{id}/{mob}")]
        [HttpGet]
        public ActionResult Page(string id, string mob)
        {
            if (string.IsNullOrEmpty(id) || string.IsNullOrEmpty(mob))
            {
                ViewBag.PageTitle = "Not Registered";
                ViewBag.PageData = Newtonsoft.Json.JsonConvert.SerializeObject(new
                {
                    HomePage = true,
                    Header = String.Empty,
                    File = new System.Collections.ArrayList()
                });
                return View();
            }
            //string mob = Session["mob"] == null ? "" : Session["mob"].ToString();
            var ty = Code.WupDataAccess.GetPageById(id, mob, GetIPAddress(Request));
            if (ty == null && !string.IsNullOrEmpty(id))
                return RedirectToAction("Error");
            ViewBag.PageTitle = ty.PageName ?? "Title";
            ViewBag.PageData = Newtonsoft.Json.JsonConvert.SerializeObject(new
            {
                HomePage = ty == null ? true : false,
                Header = ty,
                File = new System.Collections.ArrayList()
            });
            return View();
        }

        public ActionResult StatWup()
        {
            return View();
        }

        public ActionResult Error()
        {
            return View();
        }

        string GetIPAddress(HttpRequestBase request)
        {
            string ip;
            try
            {
                ip = request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (!string.IsNullOrEmpty(ip))
                {
                    if (ip.IndexOf(",") > 0)
                    {
                        string[] ipRange = ip.Split(',');
                        int le = ipRange.Length - 1;
                        ip = ipRange[le];
                    }
                }
                else
                {
                    ip = request.UserHostAddress;
                }
            }
            catch { ip = null; }

            return ip;
        }
    }
}