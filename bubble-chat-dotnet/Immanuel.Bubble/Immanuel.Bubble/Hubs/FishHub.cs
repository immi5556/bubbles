using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace Immanuel.Bubble.Hubs
{
    public class FishHub : Hub
    {
        static List<Models.Fish> lst = new List<Models.Fish>();

        public void posted(string msg)
        {
            Newtonsoft.Json.Linq.JObject jo = Newtonsoft.Json.Linq.JObject.Parse(msg);
            Clients.Client(jo["touser"]["socketid"].ToString()).received(msg); 
        }

        public void displaychange(Models.Fish msg)
        {
            var ty = lst.Find(t => t.socketid == Context.ConnectionId);
            if (ty != null)
            {
                ty.displayname = msg.displayname;
                Clients.All.changedisplay(ty);
            }
        }

        public override Task OnConnected()
        {
            if (lst.Find(t => t.socketid == Context.ConnectionId) == null)
            {
                string vv = "aa-" + RandomString(5);
                var f = new Models.Fish()
                {
                    displayname = vv,
                    nickname = vv,
                    socketid = Context.ConnectionId,
                    fishidx = random.Next(1, 16)
                };
                lst.Add(f);
                Clients.Client(f.socketid).allfishes(lst);
                Clients.Client(f.socketid).itsu(f);
                Clients.AllExcept(new string[] { f.socketid }).newfish(f);
            }
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            var ty = lst.Find(t => t.socketid == Context.ConnectionId);
            if (ty != null)
            {
                lst.Remove(ty);
                Clients.All.fishdrop(ty);
            }
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            if (lst.Find(t => t.socketid == Context.ConnectionId) == null)
            {
                string vv = "aa-" + RandomString(5);
                lst.Add(new Models.Fish()
                {
                    displayname = vv,
                    nickname = vv,
                    socketid = Context.ConnectionId,
                    fishidx = random.Next(1, 16)
                });
                //Clients.All.fishdrop(f);
            }
            return base.OnReconnected();
        }

        protected virtual string RandomString(int Size)
        {
            string input = "abcdefghijklmnopqrstuvwxyz0123456789";
            var chars = Enumerable.Range(0, Size)
                                   .Select(x => input[random.Next(0, input.Length)]);
            return new string(chars.ToArray());
        }

        static Random random = new Random();
    }
}