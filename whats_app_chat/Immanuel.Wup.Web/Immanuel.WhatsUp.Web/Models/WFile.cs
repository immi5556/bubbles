using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Immanuel.WhatsUp.Web.Models
{
    public class WFile
    {
        public int PageFileId { get; set; }
        public int UserPageId { get; set; }
        public int UserId { get; set; } 
        public int CreatedBy { get; set; } 
        public string MsgType { get; set; }
        public string Message { get; set; }
        public string FileUrl { get; set; }
        public string PageUrl { get; set; }
        public string Ip { get; set; }
        public string Nick { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}