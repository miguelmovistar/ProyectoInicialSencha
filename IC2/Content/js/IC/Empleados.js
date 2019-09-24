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

})


