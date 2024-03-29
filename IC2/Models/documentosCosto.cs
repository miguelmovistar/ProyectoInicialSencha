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
    
    public partial class documentosCosto
    {
        public int Id { get; set; }
        public System.DateTime ano { get; set; }
        public System.DateTime fechaContable { get; set; }
        public System.DateTime fechaConsumo { get; set; }
        public Nullable<int> idSociedad { get; set; }
        public string compania { get; set; }
        public Nullable<int> idServicio { get; set; }
        public string servicio { get; set; }
        public Nullable<int> idGrupo { get; set; }
        public string grupo { get; set; }
        public Nullable<int> idOperador { get; set; }
        public string operador { get; set; }
        public string nombreOperador { get; set; }
        public Nullable<int> idAcreedor { get; set; }
        public string acreedor { get; set; }
        public string codigoMaterial { get; set; }
        public Nullable<int> idTrafico { get; set; }
        public string trafico { get; set; }
        public decimal montoIva { get; set; }
        public decimal iva { get; set; }
        public Nullable<int> idMoneda { get; set; }
        public string moneda { get; set; }
        public Nullable<decimal> minutos { get; set; }
        public Nullable<decimal> tarifa { get; set; }
        public decimal monto { get; set; }
        public decimal montoFacturado { get; set; }
        public System.DateTime fechaFactura { get; set; }
        public string factura { get; set; }
        public decimal tipoCambio { get; set; }
        public decimal montoMXP { get; set; }
        public Nullable<int> idCuentaResultado { get; set; }
        public string cuentaContable { get; set; }
        public string claseDocumento { get; set; }
        public string claseDocumentoSAP { get; set; }
        public string numDocumentoPF { get; set; }
        public string estatus { get; set; }
        public int activo { get; set; }
        public int lineaNegocio { get; set; }
    }
}
