using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Immanuel.WhatsUp.Web.Models
{
    public class WPage
    {
        public int UserPageId { get; set; }
        public int UserId { get; set; }
        public string Mobile { get; set; }
        public string PageUrl { get; set; }
        public string PageName { get; set; }
        public string Ip { get; set; }
        public string Nick { get; set; }
        public string AllowedMobiles { get; set; }
        public bool Secured { get; set; }
        public bool IsOwner { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}