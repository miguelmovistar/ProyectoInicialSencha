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
    
    public partial class CosRomCieTraficoPorMes
    {
        public int CosRomCieTraficoPorMesId { get; set; }
        public Nullable<int> OperadorId { get; set; }
        public Nullable<System.DateTime> Periodo { get; set; }
        public Nullable<decimal> RemantentProvTrafico { get; set; }
        public Nullable<decimal> RemantentProvTotal { get; set; }
        public Nullable<decimal> RealConfirmadoProvTrafico { get; set; }
        public Nullable<decimal> TotalConfirmado { get; set; }
        public Nullable<decimal> CancelacionProvTrafico { get; set; }
        public Nullable<decimal> TotalProvCancelada { get; set; }
        public Nullable<decimal> RemantentActualProvTrafico { get; set; }
    }
}
