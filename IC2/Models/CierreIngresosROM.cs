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
    
    public partial class CierreIngresosROM
    {
        public long Id { get; set; }
        public Nullable<System.DateTime> FechaPeriodoCierre { get; set; }
        public Nullable<int> CuentaResultados { get; set; }
        public string PLMN { get; set; }
        public string OPERADOR { get; set; }
        public Nullable<int> DEUDOR { get; set; }
        public Nullable<int> Sociedad_GL { get; set; }
        public string Moneda { get; set; }
        public Nullable<decimal> CancelacionDevengoTrafico { get; set; }
        public Nullable<decimal> CancelacionProvNcTarifaMesAnterior { get; set; }
        public Nullable<decimal> CancelacionProvIngreso_TarifaMesAnterior { get; set; }
        public Nullable<decimal> CancelacionTProvNcObjecion { get; set; }
        public Nullable<decimal> CancelacionDevengoTotalMesAnterior_ProvisionMesAnterior { get; set; }
        public Nullable<decimal> FacturacionTrafico { get; set; }
        public Nullable<decimal> FacturacionTarifa { get; set; }
        public Nullable<decimal> NCRTrafico { get; set; }
        public Nullable<decimal> NCRTarifa { get; set; }
        public Nullable<decimal> DevengoIngresoTrafico { get; set; }
        public Nullable<decimal> ProvIngresoDifTarifa { get; set; }
        public Nullable<decimal> ProvNcrDifTarifa { get; set; }
        public Nullable<decimal> ProvNcrObjeciones { get; set; }
        public Nullable<decimal> ExcesoInsufDevMesAnt { get; set; }
        public Nullable<decimal> FluctuacionReclasificar { get; set; }
        public Nullable<decimal> TotalDevengo { get; set; }
        public string Grupo { get; set; }
    }
}