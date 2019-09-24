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
                                        id: 'btnResultados',
                                        margin: '5 -100 0 0',
                                        handler: function () {
                                            var store = Ext.StoreManager.lookup('Store');
                                            store.getProxy().extraParams.Periodo = '01/01/2019';
                                            store.load();
                                        },
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

})


