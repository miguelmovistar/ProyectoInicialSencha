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
    
    public partial class DataIngresosROM
    {
        public long Id { get; set; }
        public Nullable<int> No_Provision { get; set; }
        public string PLMN { get; set; }
        public string Razon_Social { get; set; }
        public Nullable<int> No_Deudor_SAP { get; set; }
        public Nullable<System.DateTime> Periodo { get; set; }
        public string Tipo_de_Registro { get; set; }
        public string Operacion { get; set; }
        public string Moneda { get; set; }
        public Nullable<decimal> TC { get; set; }
        public Nullable<decimal> Importe_MD { get; set; }
        public Nullable<decimal> Importe_MXN { get; set; }
        public Nullable<int> Sociedad_GL { get; set; }
        public Nullable<decimal> real_confirmado { get; set; }
        public Nullable<decimal> cancelacion { get; set; }
        public Nullable<decimal> Remanente_MD { get; set; }
        public Nullable<decimal> Remanente_MXN { get; set; }
        public Nullable<decimal> Remanente_USD_revaluadotccierre { get; set; }
        public Nullable<int> Dias { get; set; }
        public string Cajon { get; set; }
        public string Plazo { get; set; }
        public Nullable<System.DateTime> FECHA_DE_CIERRE { get; set; }
        public Nullable<int> TC_CIERRE { get; set; }
    }
}