using cctvguard.ai.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace cctvguard.ai.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult AboutUs() 
        {
            return View();
        }
        public IActionResult FaceOverview()
        {
            return View();
        }
        public IActionResult ObjectOverview()
        {
            return View();
        }
        public IActionResult AnomlyOverView(string item = null)
        {
            ViewBag.Item = item;
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
