//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IC2.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class DatosTraficoMVNO
    {
        public int Id { get; set; }
        public Nullable<int> Id_Carga { get; set; }
        public string Collection { get; set; }
        public string HOperator { get; set; }
        public string Operator { get; set; }
        public string ReferenceCode { get; set; }
        public Nullable<System.DateTime> TransDate { get; set; }
        public Nullable<decimal> Eventos { get; set; }
        public string IdColleccionServicioRegion { get; set; }
        public string Service { get; set; }
        public Nullable<decimal> Real { get; set; }
        public Nullable<decimal> Duration { get; set; }
        public Nullable<decimal> Monto { get; set; }
        public Nullable<decimal> PrecioUnitario { get; set; }
        public string Moneda { get; set; }
        public string Module { get; set; }
        public Nullable<int> NumeroCarga { get; set; }
    }
}
