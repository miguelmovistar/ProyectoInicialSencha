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
    
    public partial class CosRomCieFacturacionTrafico
    {
        public int CosRomCieFacturacionTraficoId { get; set; }
        public Nullable<System.DateTime> FechaFactura { get; set; }
        public Nullable<System.DateTime> FechaTrafico { get; set; }
        public Nullable<int> OperadorId { get; set; }
        public string NoConfirmacionSap { get; set; }
        public Nullable<decimal> FacturadoUsd { get; set; }
        public string Grupo { get; set; }
        public Nullable<decimal> Tc { get; set; }
        public Nullable<decimal> Mxn { get; set; }
    }
}
