using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using IC2.Images;

namespace IC2.Controllers
{
    public class EmpleadoController : Controller
    {
        EmpleadosEntities db = new EmpleadosEntities();

        // GET: Empleado
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult LlenaGrid(int? lineaNegocio, DateTime Periodo, int start, int limit)
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
                lista = lista.Skip(start).Take(limit).ToList();
                respuesta = new { results = lista, start = start, limit = limit, total = total, succes = true };

            }
            catch (Exception e)
            {
                respuesta = new { success = false, results = e.Message };
            }

            return Json(respuesta, JsonRequestBehavior.AllowGet);
        }

    }
}