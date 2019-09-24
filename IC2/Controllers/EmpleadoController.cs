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

        public JsonResult AgregarAjustesObjecion(string nombre, string puesto)
        {
            object respuesta = null;
            DateTime fecha_contable = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);

            try
            {
                Empleados entidad = new Empleados();

                entidad.IdEmpleado = 6;
                entidad.Nombre = nombre;
                entidad.Puesto = puesto;

                db.Empleados.Add(entidad);
                db.SaveChanges();
                respuesta = new { success = true, results = "ok" };
            }
            catch (Exception ex)
            {
                respuesta = new { success = false, results = "Hubo un error al momento de realizar la petición." };
            }

            return Json(respuesta, JsonRequestBehavior.AllowGet);
        }

        public JsonResult validaModif(int Id)
        {
            string strmsg = "";
            bool blsccs = true;

            object respuesta = null;

            respuesta = new { success = blsccs, results = strmsg };

            return Json(respuesta, JsonRequestBehavior.AllowGet);
        }

        public JsonResult modificarAcreedor(string Nombre, int Id)
        {
            object respuesta = null;

            try
            {
                Empleados oAcreedor = db.Empleados.Where(a => a.IdEmpleado == Id).SingleOrDefault();
                oAcreedor.Nombre = Nombre;
                db.SaveChanges();

                respuesta = new { success = true, results = oAcreedor };
            }
            catch (Exception ex)
            {
                respuesta = new { success = false, results = ex.Message };
            }
            return Json(respuesta, JsonRequestBehavior.AllowGet);
        }

    }
}

