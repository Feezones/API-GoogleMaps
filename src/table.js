import React, { useState } from 'react';
import ClienteForm from './form';
import jsonData from './data.json';
import './index.css'
import {Link} from 'react-router-dom'
  
function TableData() {
  const [tabela, settabela] = useState(jsonData);
  
  const tableRows = tabela.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.data}</td>
        <td>{info.address1}</td>
        <td>{info.address2}</td>
        <td><Link target="blank" class="btn btn-light" to={`/Mapa/${info.id}`}>Verificar</Link></td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalEntregas = tabela.length;
    data.id = totalEntregas + 1;
    const updatedtabela = [...tabela];
    updatedtabela.push(data);
    settabela(updatedtabela);
  };
  
  return (
    <div class="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Data de entrega</th>
            <th>Ponto de partida</th>
            <th>Ponto de destino</th>
            <th>Verificar local</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <ClienteForm func={addRows} />
    </div>
  );
}
  
export default TableData;