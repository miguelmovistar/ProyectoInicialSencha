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
    
    public partial class ResumenDevengoROM
    {
        public int Id { get; set; }
        public string Periodo { get; set; }
        public string Sentido { get; set; }
        public string Moneda { get; set; }
        public Nullable<decimal> Devengo_Trafico { get; set; }
        public Nullable<decimal> Costos_Recurrentes { get; set; }
        public Nullable<decimal> Devengo_Total { get; set; }
        public Nullable<decimal> Provision_Tarifa { get; set; }
        public Nullable<decimal> Ajuste_Real_Devengo_Fac { get; set; }
        public Nullable<decimal> Ajuste_Real_Devengo_Tarifa { get; set; }
        public Nullable<decimal> Ajustes_Extraordinarios { get; set; }
        public Nullable<decimal> Importe_Neto { get; set; }
    }
}
