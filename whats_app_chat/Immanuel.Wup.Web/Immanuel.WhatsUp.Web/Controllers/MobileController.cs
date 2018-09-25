using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Immanuel.WhatsUp.Web.Controllers
{
    public class MobileController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Page(string id)
        {
            return View();
        }
    }
}