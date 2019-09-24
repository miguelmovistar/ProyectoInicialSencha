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
    
    public partial class PXQCostosROM_B
    {
        public int Id { get; set; }
        public System.DateTime fecha { get; set; }
        public string PLMNPROVTAR { get; set; }
        public string PLMN_V { get; set; }
        public string PLMN_GPO { get; set; }
        public string pais { get; set; }
        public string acreedor { get; set; }
        public Nullable<decimal> MIN_MOC_REDONDEADO { get; set; }
        public Nullable<decimal> MIN_MOC_REAL { get; set; }
        public Nullable<decimal> SDR_MOC { get; set; }
        public Nullable<decimal> MIN_MTC_REDONDEADO { get; set; }
        public Nullable<decimal> MIN_MTC_REAL { get; set; }
        public Nullable<decimal> SDR_MTC { get; set; }
        public Nullable<decimal> SMS_MO { get; set; }
        public Nullable<decimal> SDR_SMS { get; set; }
        public Nullable<decimal> GPRS { get; set; }
        public Nullable<decimal> SDR_GPRS { get; set; }
        public Nullable<decimal> USD_MOC { get; set; }
        public Nullable<decimal> USD_MTC { get; set; }
        public Nullable<decimal> USD_SMS_MO { get; set; }
        public Nullable<decimal> USD_GPRS { get; set; }
        public Nullable<decimal> COSTO_TRAFICO_USD { get; set; }
        public Nullable<decimal> tarifa_MOC { get; set; }
        public Nullable<decimal> tarifa_MTC { get; set; }
        public Nullable<decimal> tarifa_SMS_MO { get; set; }
        public Nullable<decimal> tarifa_GPRS { get; set; }
        public Nullable<decimal> IOT_TAR_MOC { get; set; }
        public Nullable<decimal> IOT_TAR_MTC { get; set; }
        public Nullable<decimal> IOT_TAR_SMS_MO { get; set; }
        public Nullable<decimal> IOT_TAR_GPRS { get; set; }
        public Nullable<decimal> USD_MOC_IOTFacturado { get; set; }
        public Nullable<decimal> USD_MTC_IOTFacturado { get; set; }
        public Nullable<decimal> USD_SMS_MO_IOTFacturado { get; set; }
        public Nullable<decimal> USD_GPRS_IOTFacturado { get; set; }
        public Nullable<decimal> USD_MOC_IOT_REAL { get; set; }
        public Nullable<decimal> USD_MTC_IOT_REAL { get; set; }
        public Nullable<decimal> USD_MOC_IOT_DESC { get; set; }
        public Nullable<decimal> USD_MTC_IOT_DESC { get; set; }
        public Nullable<decimal> USD_SMS_MO_IOT_DESC { get; set; }
        public Nullable<decimal> USD_GPRS_IOT_DESC { get; set; }
        public Nullable<decimal> USD_SUMA_PROV_TARIFA { get; set; }
        public Nullable<decimal> costosFijosRecurrentes { get; set; }
        public Nullable<decimal> PROVRealTarifaMesAnteriorUSD { get; set; }
        public Nullable<decimal> PROVTarMesAnteriorUSD { get; set; }
        public Nullable<decimal> ajuste_Real_VS_DevengoTarifaMesAnteriroUSD { get; set; }
        public Nullable<decimal> total_USD_PROV_Tarifa { get; set; }
        public Nullable<decimal> facturacionRealMesAnteriorUSD { get; set; }
        public Nullable<decimal> PROVTraficoMesAnteriorUSD { get; set; }
        public Nullable<decimal> ajusteReal_VS_DevengoTraficoMesAnteriorUSD { get; set; }
        public Nullable<decimal> ajusteSaldoMesAnterior { get; set; }
        public Nullable<decimal> totalUSDTrafico { get; set; }
        public Nullable<decimal> ajusteTraficoMesAnterior { get; set; }
        public Nullable<decimal> ajusteTarifaMesAnterior { get; set; }
        public Nullable<decimal> ajusteCostosRecurresntesMesesAnteriores { get; set; }
        public Nullable<decimal> complementoTarifaMesAnterior { get; set; }
        public Nullable<decimal> ajusteMesesAnterioresUSD { get; set; }
        public Nullable<decimal> totalNeto { get; set; }
        public Nullable<decimal> sumasTotales { get; set; }
        public Nullable<decimal> totalContable { get; set; }
        public int lineaNegocio { get; set; }
    }
}