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
    
    public partial class SABANA_PROV_TAR_ROM
    {
        public long Id { get; set; }
        public string PLMN { get; set; }
        public string PLMN_GPO { get; set; }
        public string NOMBRE { get; set; }
        public Nullable<int> Acreedor { get; set; }
        public Nullable<int> Sociedad_GL { get; set; }
        public Nullable<decimal> PROV_TARIFA { get; set; }
        public Nullable<decimal> PROV_REAL_REG { get; set; }
        public Nullable<decimal> NUEVA_PROV_ACUM { get; set; }
        public Nullable<decimal> SUMA_TOTAL { get; set; }
    }
}
