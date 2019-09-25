Ext.onReady(function () {
    Ext.QuickTips.init();
    

    var IdEmpleado, Nombre, Puesto;

    // Modelo de la Tabla Empleados
    Ext.define('Modelo',
        {
            extend: 'Ext.data.Model',
            fields: [
                { name: 'IdEmpleado', mapping: 'IdEmpleado' },
                { name: 'Nombre', mapping: 'Nombre' },
                { name: 'Puesto', mapping: 'Puesto' }
            ]
        });

    var _storebuscar = Ext.create('Ext.data.Store', {
        model: 'Modelo',
        storeId: 'Store',
        pageSize: 20,
        proxy: {
            type: 'ajax',
            url: '../' + VIRTUAL_DIRECTORY + 'Empleado/LlenaGrid?Id=1',
            reader: {
                type: 'json',
                root: 'results',
                successProperty: 'success',
                totalProperty: 'total'
            },
            actionMethods: {
                create: 'POST', read: 'GET', update: 'POST', destroy: 'POST'
            }
        }
    });

    // Panel.Botones
    var panel = Ext.create('Ext.form.Panel', {
        items: [
            { // Panel de Busqueda
                xtype: 'tabpanel',
                border: false,
                items: [
                    {   // Nombre Pestaña
                        title: 'Lista de Empleados',
                        border: false,
                        items: [
                            
                            {   // Filas del Grid
                                xtype: 'gridpanel',
                                id: '_grid',
                                store: _storebuscar,
                                height: 200,
                                columnLines: true,
                                scrollable: true,
                                border: false,
                                selModel:
                                {
                                    selType: "checkboxmodel",
                                    listeners: {
                                        selectionchange: function (selected, eOpts) {
                                            if (eOpts.length == 1) {
                                                Ext.getCmp('btnEditar').setDisabled(false);
                                                acreedor1 = eOpts[0].data.Acreedor;
                                                nombre = eOpts[0].data.Nombre;
                                                id = eOpts[0].data.IdEmpleado;

                                                //Ext.Msg.alert('head', id);

                                                var storeSAcreedor = Ext.StoreManager.lookup('Store');
                                                storeSAcreedor.getProxy().extraParams.Id = id;
                                            }
                                            
                                            habilitarDeshabilitar();
                                        }
                                    }
                                },
                                columns: [
                                    { // IdEmpleado
                                        xtype: "gridcolumn",
                                        id: "IdEmpleado",
                                        dataIndex: 'IdEmpleado',
                                        text: "IdEmpleado",
                                        width: 120,
                                    },
                                    { // Nombre
                                        xtype: "gridcolumn",
                                        id: "Nombre",
                                        dataIndex: 'Nombre',
                                        text: "Nombre",
                                        width: 120,
                                    },
                                    { // Puesto
                                        xtype: "gridcolumn",
                                        id: "Puesto",
                                        dataIndex: 'Puesto',
                                        text: "Puesto",
                                        width: 120,
                                    }
                                ]
                            },
                            {   // Panel de Criterios
                                xtype: 'panel',
                                border: false,
                                layout: 'column',
                                items: [

                                    {   // Columna Boton Buscar
                                        xtype: 'button',
                                        html: "<button class='btn btn-primary' style='font-size:13px;'>Buscar</button>",
                                        id: 'btnBuscar',
                                        border: false,
                                        handler: function () {
                                            var store = Ext.StoreManager.lookup('Store');
                                            store.getProxy().extraParams.Periodo = '01/01/2019';
                                            store.load();
                                        }
                                    },
                                    {   // Columna Boton Agregar
                                        xtype: 'button',
                                        id: 'btnGuardar',
                                        border: false,
                                        html: "<button class='btn btn-primary' style='width:100%; font-size:13px;'>Nuevo</button>",
                                        handler: function () {
                                            Agregar();
                                        }
                                    },
                                    {   // Columna Boton Editar
                                        xtype: 'button',
                                        id: 'btnEditar',
                                        disabled: true,
                                        html: "<button class='btn btn-primary' style='outline:none'>Editar</button>",
                                        border: false,
                                        margin: '0 0 0 -5',
                                        handler: function () {
                                            ValidaModificar();
                                        }
                                    },
                                    {   // Columna Boton Borrar
                                        xtype: 'button',
                                        id: 'btnEliminar',
                                        margin: '0 0 0 -5',
                                        html: "<button class='btn btn-primary' style='outline:none'>Eliminar</button>",
                                        border: false,
                                        disabled: true,
                                        handler: function () {
                                            var strID = "";
                                            var grp = Ext.getCmp('_grid');
                                            var rec = grp.getSelectionModel().getSelection();
                                            for (var i = 0; i < rec.length; i++) {
                                                strID = strID + rec[i].data.IdEmpleado + ",";
                                            }
                                            Ext.MessageBox.confirm('Confirmación', "¿Desea eliminar " + rec.length + " registro(s)? ", function (btn, text) {
                                                if (btn == 'yes') {
                                                    var store = Ext.StoreManager.lookup('StoreBorrar');
                                                    store.getProxy().extraParams.strID = strID;
                                                    store.load();

                                                }
                                            });
                                            //store_BuscarAcreedor.load();
                                        }
                                    },
                                    {   // Columna Boton Exportar
                                        xtype: 'button',
                                        html: "<button class='btn btn-primary' style='width:100%; font-size:13px;'>Exportar</button>",
                                        id: 'btnExportar',
                                        border: false,
                                        handler: function () {
                                            var store = Ext.StoreManager.lookup('Store');
                                            store.getProxy().extraParams.Periodo = '01/01/2019';
                                            store.load();
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        renderTo: Ext.getBody()
    });

    function Agregar() {
        var frm_agregar = Ext.create('Ext.form.Panel', {
            dockedItems: [
                {
                    xtype: 'panel',
                    border: false,
                    items: [
                        {
                            xtype: 'button',
                            id: 'btn_Guardar',
                            html: "<button class='btn btn-primary' style='outline:none; font-size: 11px' accesskey='g'>Guardar</button>",
                            border: false,
                            handler: function () {
                                var form = this.up('form').getForm();
                                if (form.wasValid) {
                                    form.submit({
                                        url: '../' + VIRTUAL_DIRECTORY + 'Empleado/AgregarAjustesObjecion',
                                        waitMsg: "Nuevo",
                                        params:
                                        {
                                            nombre: Ext.getCmp('txtNombre').value,
                                            puesto: Ext.getCmp('txtPuesto').value,
                                        },
                                        success: function (form, action) {
                                            Ext.Msg.show({
                                                title: "Confirmación",
                                                msg: "El registro se agregó exitosamente.",
                                                buttons: Ext.Msg.OK,
                                                icon: Ext.MessageBox.INFO
                                            });
                                            _storebuscar.load(); // Activa el boton de buscar
                                            win.destroy();
                                            store = Ext.StoreManager.lookup('Store');
                                        },
                                        failure: function (forms, action) {
                                            Ext.Msg.show({
                                                title: "Aviso",
                                                msg: action.result.results,
                                                buttons: Ext.Msg.OK,
                                                icon: Ext.MessageBox.INFO
                                            });
                                        }
                                    });
                                }
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'fieldset',
                    margin: '5 5 5 5',
                    id: 'fls_movimiento',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'txtNombre',
                            id: 'txtNombre',
                            fieldLabel: "Nombre",
                            anchor: '100%',
                            margin: '5 5 5 5',
                            allowBlank: false,
                            blankText: "El campo Importe es requerido",
                            msgTarget: 'under',
                            allowDecimals: true,
                            decimalPrecision: 6,
                            maxLength: 100,
                            enforceMaxLength: true
                        },
                        {
                            id: 'txtPuesto',
                            name: 'txtPuesto',
                            xtype: 'textfield',
                            margin: '5 5 5 5',
                            fieldLabel: "Puesto",
                            anchor: '100%',
                            editable: false,
                            allowBlank: false,
                            blankText: "El campo Periodo es requerido",
                            msgTarget: 'under',
                            format: 'm-Y'
                        }
                    ]
                }
            ]
        });
        win = Ext.widget('window', {
            id: 'idWin',
            title: "Nuevo",
            closeAction: 'destroy',
            layout: 'fit',
            width: '30%',
            resizable: false,
            modal: true,
            items: frm_agregar
        });
        
        win.show();
    }

    function ValidaModificar() {
        var store = Ext.StoreManager.lookup('StoreValida');
        store.getProxy().extraParams.Id = id;
        store.load();

    }

    var store_BorrarAcreedor = Ext.create('Ext.data.Store', {
        model: 'Model',
        storeId: 'StoreBorrar',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: '../' + VIRTUAL_DIRECTORY + 'Empleado/borrarAcreedor',
            reader: {
                type: 'json',
                root: 'results'
            },
            actionMethods: {
                create: 'POST', read: 'GET', update: 'POST', destroy: 'POST'
            },
            afterRequest: function (request, success) {
                var grp = Ext.getCmp('_grid');
                var elements = grp.getSelectionModel().getSelection();

                if (request.proxy.reader.jsonData.success == true) {
                    Ext.MessageBox.show({
                        title: "Confirmación",
                        msg: "Se eliminaron " + elements.length + " registro(s) exitosamente",
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                    _storebuscar.load();
                }
                else {
                    this.readCallback(request);
                }
            },
            readCallback: function (request) {
                if (!request.proxy.reader.jsonData.result.length != 4) {
                    Ext.MessageBox.show({
                        title: "Notificación",
                        msg: request.proxy.reader.jsonData.result,
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO8
                    });
                    // store_BuscarEmpresa.load();
                    //var grid = Ext.getCmp('grp_Empresa');
                }
                else if (request.proxy.reader.jsonData.results == "ok") {

                    Ext.MessageBox.show({
                        title: "tInformacionSistema",
                        msg: "Se eliminó correctamente",
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });

                }
                else if (request.proxy.reader.jsonData.results == "not") {
                    Ext.MessageBox.show({
                        title: "tInformacionSistema",
                        msg: "Ocurrió un error",
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                }
            }
        }
    });

    var store_ValidaModifica = Ext.create('Ext.data.Store', {
        model: 'Modelo',
        storeId: 'StoreValida',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: '../' + VIRTUAL_DIRECTORY + 'Empleado/validaModif',
            reader: {
                type: 'json',
                root: 'results'
            },
            actionMethods: {
                create: 'POST', read: 'GET', update: 'POST', destroy: 'POST'
            },
            afterRequest: function (request, success) {
                var grp = Ext.getCmp('_grid');
                var elements = grp.getSelectionModel().getSelection();

                if (request.proxy.reader.jsonData.success == false) {
                    var strMensaje = request.proxy.reader.jsonData.results;
                    if (strMensaje != "") {
                        Ext.Msg.confirm("Confirmación", strMensaje, function (btnVal) {
                            if (btnVal === "yes") {
                                ModificarAcreedor();
                            }
                        }, this);
                    }
                    else {
                        ModificarAcreedor();
                    }
                }
                else {
                    ModificarAcreedor();
                    //this.readCallback(request);
                }
            },
            readCallback: function (request) {
                if (request.proxy.reader.jsonData.results == "ok") {

                    Ext.MessageBox.show({
                        title: "tInformacionSistema",
                        msg: "Se eliminó correctamente",
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });

                }
                else if (request.proxy.reader.jsonData.results == "not") {
                    Ext.MessageBox.show({
                        title: "tInformacionSistema",
                        msg: "Ocurrió un error",
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                }

            }
        }
    });

    var store_ModificarAcreedor = Ext.create('Ext.data.Store', {
        model: 'Modelo',
        storeId: 'StoreModifica',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: '../' + VIRTUAL_DIRECTORY + 'Empleado/modificarAcreedor',
            reader: {
                type: 'json',
                root: 'results'
            },
            actionMethods: {
                create: 'POST', read: 'GET', update: 'POST', destroy: 'POST'
            },
            afterRequest: function (request, success) {
                if (request.proxy.reader.jsonData.success) {
                    Ext.MessageBox.show({
                        title: "Confirmación",
                        msg: "Se modificó exitosamente",
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                    _storebuscar.load(); // Activa el boton de buscar
                    Ext.getCmp('idWin').destroy();
                    store_BuscarAcreedor.load();
                } else {
                    this.readCallback(request);
                }
            },
            readCallback: function (request) {
                Ext.MessageBox.show({
                    title: "Aviso",
                    msg: "Hubo un error",
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.INFO
                });
            }
        }
    });

    function ModificarAcreedor() {
        var frm_agregar = Ext.widget('form', {
            dockedItems: [
                {
                    xtype: 'panel',
                    id: 'tbBarra',
                    border: false,
                    items: [
                        {
                            xtype: 'button',
                            id: 'btn_Guardar',
                            border: false,
                            html: "<button class='btn btn-primary' style='outline:none; font-size: 11px' accesskey='g'>Guardar</button>",
                            handler: function () {
                                var store = Ext.StoreManager.lookup('StoreModifica');
                                store.getProxy().extraParams.Nombre = Ext.getCmp('txtNombre').value;
                                store.getProxy().extraParams.Id = id;
                                store.load();
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'fieldset',
                    margin: '0 0 0 0',
                    id: 'fls_Acreedor',
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Acreedor',
                            anchor: '100%',
                            margin: '5 5 5 5',
                            value: id
                        },
                        {
                            xtype: 'textfield',
                            name: 'txtNombre',
                            id: 'txtNombre',
                            fieldLabel: "Nombre",
                            anchor: '100%',
                            margin: '5 5 5 5',
                            value: nombre,
                            maxLength: 50,
                            enforceMaxLength: true,
                            msgTarget: 'under',
                            allowBlank: false,
                            blankText: "El campo Nombre es requerido"
                        }
                    ]
                }
            ]
        });

        win = Ext.widget('window', {
            id: 'idWin',
            title: "Editar",
            closeAction: 'destroy',
            layout: 'fit',
            width: '30%',
            resizable: false,
            modal: true,
            items: frm_agregar
        });

        win.show();
    }

    function habilitarDeshabilitar() {
        var grp = Ext.getCmp('_grid');
        var rec = grp.getSelectionModel().getSelection();

        if (rec.length == 0) {
            Ext.getCmp('btnEditar').setDisabled(true);
            Ext.getCmp('btnEliminar').setDisabled(true);
            Ext.getCmp('btnGuardar').setDisabled(false);
        } else if (rec.length == 1) {
            Ext.getCmp('btnEditar').setDisabled(false);
            Ext.getCmp('btnEliminar').setDisabled(false);
            Ext.getCmp('btnGuardar').setDisabled(true);
        } else {
            Ext.getCmp('btnEditar').setDisabled(true);
            Ext.getCmp('btnEliminar').setDisabled(false);
            Ext.getCmp('btnGuardar').setDisabled(true);
        }
    }

    Ext.EventManager.onDocumentReady(function (w, h) {
        _storebuscar.load(); // Activa el boton de buscar
        panel.doComponentLayout();
    });

})


