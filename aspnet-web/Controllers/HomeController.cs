using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Thursday.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            string ua = Request.Headers["User-Agent"];
            ViewData["ua"] = ua;
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";
            string ua = Request.Headers["User-Agent"];
            ViewData["ua"] = ua;

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";
            string ua = Request.Headers["User-Agent"];
            ViewData["ua"] = ua;

            return View();
        }

        public IActionResult MyApp()
        {
            ViewData["Message"] = "Your Cordova app page.";

            string ua = Request.Headers["User-Agent"];
            ViewData["ua"] = ua;

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
