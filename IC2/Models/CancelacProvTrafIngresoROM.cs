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
    
    public partial class CancelacProvTrafIngresoROM
    {
        public long Id { get; set; }
        public string PLMN { get; set; }
        public string OPERADOR { get; set; }
        public Nullable<int> DEUDOR { get; set; }
        public Nullable<decimal> DevengoTrafico_MesCierre { get; set; }
        public Nullable<decimal> DevengoPendEmitir_FechaProvisionIngresoPendienteEmitir { get; set; }
        public Nullable<decimal> DevengoAcumulado_AFechaCierre { get; set; }
    }
}
