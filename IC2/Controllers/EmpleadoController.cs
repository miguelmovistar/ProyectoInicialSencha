using IC2.Images;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace IC2.Controllers
{
    public class EmpleadoController : Controller
    {
        EmpleadosEntities db = new EmpleadosEntities();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult LlenaGrid(int? Id)
        {
            object respuesta = null;
            List<object> lista = new List<object>();
            int total = 0;
            DateTime periodo = DateTime.Now;

            try
            {
                var JoinQuery = from C in db.Empleados
                    select new
                    {
                        C.IdEmpleado,
                        C.Nombre,
                        C.Puesto
                    };

                foreach (var elemento in JoinQuery)
                {
                    lista.Add(new
                    {
                        elemento.IdEmpleado,
                        elemento.Nombre,
                        elemento.Puesto
                    });
                }

                total = lista.Count();
                respuesta = new { results = lista, succes = true };

            }
            catch (Exception e)
            {
                respuesta = new { success = false, results = e.Message };
            }

            return Json(respuesta, JsonRequestBehavior.AllowGet);
        }

    }
}

