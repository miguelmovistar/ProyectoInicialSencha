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
    
    public partial class CosRomCieDevengoAcumulado
    {
        public int CosRomCieDevengoAcumuladoId5 { get; set; }
        public string OperadorId { get; set; }
        public Nullable<System.DateTime> Periodo { get; set; }
        public Nullable<decimal> RemanenteProvCostoTraficoMesAnterior { get; set; }
        public Nullable<decimal> TotalAceptaciones { get; set; }
        public Nullable<decimal> CancelacionProv { get; set; }
        public Nullable<decimal> RemanenteProvCostoTraficoMesProv { get; set; }
        public Nullable<decimal> DevengoDeTrafico { get; set; }
        public Nullable<decimal> CostosRecurrentes { get; set; }
        public Nullable<decimal> AjusteProv { get; set; }
        public Nullable<decimal> AjustesTraficoDevengadoVsReal { get; set; }
        public Nullable<decimal> DevengoMesProv { get; set; }
        public Nullable<decimal> ProvTotalMesProv { get; set; }
        public Nullable<bool> EsCostoRecurrente { get; set; }
        public Nullable<short> MonedaId { get; set; }
    }
}
