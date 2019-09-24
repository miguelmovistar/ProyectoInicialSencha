Ext.onReady(function () {
    Ext.QuickTips.init();
    var Body = Ext.getBody();

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
            url: '../' + VIRTUAL_DIRECTORY + 'Empleado/LlenaGrid?lineaNegocio=1',
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

    var _pagingtoolbar = new Ext.PagingToolbar({
        id: '_pagingtoolbar',
        store: _storebuscar,
        displayInfo: true,
        displayMsg: 'Facturas {0} - {1} of {2}',
        afterPageText: "Siguiente",
        beforePageText: "Anterior",
        emptyMsg: "Vacío",
        enabled: true,
        displayInfo: true,
        items: [
            {
                xtype: 'combobox',
                fieldLabel: "Size",
                width: 80,
                editable: false,
                margin: '25 5 5 5',
                labelWidth: 30,
                store: _pagesize,
                displayField: 'size',
                valueField: 'id',
                listeners:
                {
                    change: function (field, newValue, oldValue, eOpts) {
                        var cuenta = field.rawValue;
                        _storebuscar.pageSize = cuenta;
                        _storebuscar.load();
                    }
                }
            }
        ]
    });

    var _pagesize = Ext.create('Ext.data.Store', {
        fields: ['id', 'size'],
        data: [
            { "id": "1", "size": "5" },
            { "id": "2", "size": "10" },
            { "id": "3", "size": "20" },
            { "id": "4", "size": "30" },
            { "id": "5", "size": "40" }
        ]
    });


    // Panel.Botones
    var panel = Ext.create('Ext.form.Panel', {
        frame: false,
        border: false,
        margin: '0 0 0 6',
        width: "100%",
        height: '100%',
        layout: { type: 'vbox' },
        flex: 1,
        items: [
            {   // Encabezado
                html: "<div style='font-size:25px';>Cancelación Costos</div><br/>",
                border: false,
                bodyStyle: { "background-color": "#E6E6E6" },
                width: '50%',
            },

            { // Panel de Busqueda
                xtype: 'tabpanel',
                width: '100%',
                margin: '3 0 0 0',
                height: 500,
                renderTo: document.body,
                frame: false,
                items: [
                    {   // Nombre Pestaña
                        title: 'Criterios de búsqueda',
                        border: false,
                        items: [
                            {   // Panel de Criterios
                                xtype: 'panel',
                                bodyStyle: { "background-color": "#E6E6E6" },
                                border: false,
                                width: '100%',
                                layout: 'column',
                                items: [
                                    
                                    {   // Columna Boton Buscar
                                        xtype: 'button',
                                        html: "<button class='btn btn-primary' style='font-size:13px;'>Buscar</button>",
                                        id: 'btnResultados',
                                        margin: '5 -100 0 0',
                                        handler: function () {
                                            var periodo = '01/01/2019';
                                            var store = Ext.StoreManager.lookup('Store');
                                            store.getProxy().extraParams.Periodo = periodo;
                                            store.load();
                                        },
                                    }
                                ]
                            },
                            {   // Filas del Grid
                                xtype: 'gridpanel',
                                id: '_grid',
                                flex: 1,
                                store: _storebuscar,
                                width: '100%',
                                height: 275,
                                columnLines: true,
                                scrollable: true,
                                bbar: _pagingtoolbar,
                                selModel:
                                {
                                    selType: 'checkboxmodel',
                                    listeners:
                                    {

                                    }
                                },
                                columns: [
                                    // IdEmpleado
                                    {
                                        xtype: "gridcolumn", sortable: true, id: "IdEmpleado", dataIndex: 'IdEmpleado', text: "IdEmpleado", width: 120,
                                        renderer: function (v, cellValues, rec) {
                                            return rec.get('IdEmpleado');
                                        },
                                        editor: {
                                            xtype: 'textfield'
                                        },
                                        items:
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: 2,
                                            enableKeyEvents: true,
                                            listeners:
                                            {
                                                keyup: function () {
                                                    _storebuscar.clearFilter();
                                                    var cadena = this.value;
                                                    if (this.value && cadena.length > 3) {
                                                        _storebuscar.load({ params: { start: 0, limit: 100000 } });
                                                        _storebuscar.filter({
                                                            property: 'IdEmpleado',
                                                            value: this.value,
                                                            anyMatch: true,
                                                            caseSensitive: false
                                                        });
                                                    } else {
                                                        _storebuscar.clearFilter();
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    { // Nombre
                                        xtype: "gridcolumn", sortable: true, id: "Nombre", dataIndex: 'Nombre', text: "Nombre", width: 120,
                                        renderer: function (v, cellValues, rec) {
                                            return rec.get('Nombre');
                                        },
                                        editor: {
                                            xtype: 'textfield'
                                        },
                                        items:
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: 2,
                                            enableKeyEvents: true,
                                            listeners:
                                            {
                                                keyup: function () {
                                                    _storebuscar.clearFilter();
                                                    var cadena = this.value;
                                                    if (this.value && cadena.length > 3) {
                                                        _storebuscar.load({ params: { start: 0, limit: 100000 } });
                                                        _storebuscar.filter({
                                                            property: 'Nombre',
                                                            value: this.value,
                                                            anyMatch: true,
                                                            caseSensitive: false
                                                        });
                                                    } else {
                                                        _storebuscar.clearFilter();
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    { // Puesto
                                        xtype: "gridcolumn", sortable: true, id: "Puesto", dataIndex: 'Puesto', text: "Puesto", width: 120,
                                        renderer: function (v, cellValues, rec) {
                                            return rec.get('Puesto');
                                        },
                                        editor: {
                                            xtype: 'textfield'
                                        },
                                        items:
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: 2,
                                            enableKeyEvents: true,
                                            listeners:
                                            {
                                                keyup: function () {
                                                    _storebuscar.clearFilter();
                                                    var cadena = this.value;
                                                    if (this.value && cadena.length > 1) {
                                                        _storebuscar.load({ params: { start: 0, limit: 100000 } });
                                                        _storebuscar.filter({
                                                            property: 'Puesto',
                                                            value: this.value,
                                                            anyMatch: true,
                                                            caseSensitive: false
                                                        });
                                                    } else {
                                                        _storebuscar.clearFilter();
                                                    }
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        bodyStyle: { "background-color": "#E6E6E6" },
        renderTo: Body
    });

    Ext.EventManager.onWindowResize(function (w, h) {
        panel.setSize(w - 15, h - 230);
        panel.doComponentLayout();
    });

    Ext.EventManager.onDocumentReady(function (w, h) {
        panel.setSize(Ext.getBody().getViewSize().width - 15, Ext.getBody().getViewSize().height - 230);
        panel.doComponentLayout();
    });

})


