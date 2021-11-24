import React, { useState, useEffect } from 'react';
import DetallesCompra from "./detallesCompra/DetallesCompra";
import { Asesores, Detalle_Compra } from '../services/Api';

const App = () => {
    const [dataList, setDataList] = useState([]);
    const [data, setData] = useState([]);
    const [select, setSelect] = useState(1);

    useEffect(() => {
        localStorage.setItem('idAsesor', 1);
        Asesores().then(response => {
            setDataList(response.data);
        })
        detalleCompra(select);
    }, []);

    const detalleCompra = (id) => {
        Detalle_Compra(id).then(response => {
            setData(response.data);
        })
    }

    const handleSelect = (id) => {
        detalleCompra(id);
        setSelect(id);
    }

    return (
        <>
            <div className="container py-5">
                <h4>Prueba CHOHO</h4>
                <i>Desarrollado por: <b>YEISON ANDRES SUAREZ DIAZ</b></i>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="bg-white asesores px-4 py-3">
                            <p>Lista de Asesores</p>
                            <hr />
                            <i>Codigo - Nombre</i>
                            <ul>
                                {dataList.map((e, i) => <li style={select === e.id ? { color: 'red', fontWeight: 'bold' } : {}} key={i} onClick={() => { handleSelect(e.id) }}>{e.codigo_asesor} - {e.name}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <DetallesCompra data={data} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default App;