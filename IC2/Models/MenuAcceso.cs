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
    
    public partial class MenuAcceso
    {
        public int Id_MenuAcceso { get; set; }
        public Nullable<int> Id_Menu { get; set; }
        public Nullable<int> Id_LineaNegocio { get; set; }
    
        public virtual LineaNegocio LineaNegocio { get; set; }
        public virtual Menu Menu { get; set; }
    }
}
