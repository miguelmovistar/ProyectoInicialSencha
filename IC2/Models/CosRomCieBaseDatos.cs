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
    
    public partial class CosRomCieBaseDatos
    {
        public int CosRomCieBaseDatosId { get; set; }
        public Nullable<int> OperadorId { get; set; }
        public Nullable<int> CancelacionCostoRomId { get; set; }
        public Nullable<int> ProvTarId { get; set; }
        public Nullable<int> MonedaId { get; set; }
        public Nullable<System.DateTime> Periodo { get; set; }
        public string TipoRegistro { get; set; }
        public Nullable<decimal> ImporteMd { get; set; }
        public Nullable<decimal> ImporteMxn { get; set; }
        public Nullable<decimal> RealConfirmado { get; set; }
        public Nullable<decimal> Cancelacion { get; set; }
        public Nullable<decimal> RemanenteMd { get; set; }
        public Nullable<decimal> RemanenteMxn { get; set; }
        public Nullable<decimal> RemanenteUsd { get; set; }
    }
}
