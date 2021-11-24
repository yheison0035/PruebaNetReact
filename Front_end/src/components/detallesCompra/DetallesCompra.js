import React, { useState, useEffect } from 'react';
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

export default function DetallesCompra({ data }) {

    const dataToTable = data.map((row, key) => {
        return {
            idCliente: row.idCliente,
            nombreCliente: row.nombreCliente,
            nombreProducto: row.nombreProducto,
            valor_unitario: row.valor_unitario,
            valor_total: parseInt(row.valor_unitario) * parseInt(row.cantidad),
            cantidad: row.cantidad,
            estado: row.estado === 1 ? 'Pagado' : 'Sin Pagar',
            fecha_pago: row.fecha_pago
        }
    });

    return (
        <div className="bg-white">
            <div className="card">
                <div className="card-title mb-0 p-3 border-bottom bg-light">
                    <i className="i-user mr-2"></i> Clientes Asignados/pedidos
                </div>
                <div className="card-body">
                    <ReactTable
                        columns={[
                            {
                                Header: "ID Cliente",
                                accessor: "idCliente",
                            },
                            {
                                Header: "Cliente",
                                accessor: "nombreCliente",
                            },
                            {
                                Header: "Producto",
                                accessor: "nombreProducto",
                            },
                            {
                                Header: "Valor Unitario",
                                accessor: "valor_unitario",
                            },
                            {
                                Header: "Cantidad",
                                accessor: "cantidad",
                            },
                            {
                                Header: "Valor Total",
                                accessor: "valor_total",
                            },
                            {
                                Header: "Estado",
                                accessor: "estado",
                            },
                            {
                                Header: "Fecha de Pago",
                                accessor: "fecha_pago",
                            }
                        ]}
                        defaultFilterMethod={
                            (filter, row, column) => {
                                const id = filter.pivotId || filter.id
                                return row[id] !== undefined ? String(row[id]).toUpperCase().includes(filter.value.toUpperCase()) : true
                            }
                        }
                        defaultPageSize={10}
                        showPaginationBottom={true}
                        className="-striped -highlight"
                        data={dataToTable}
                        filterable
                        previousText='Anterior'
                        nextText="Siguiente"
                        loadingText="Cargando"
                        noDataText="Sin resultados"
                        pageText="Pagina"
                        rowsText='Filas'
                    />
                </div>
            </div>
        </div>
    )
}
