import React, { useState } from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
  
function ClienteForm(props) {
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeData = (event) => {
    setData(event.target.value);
  };

  const changeAddress1 = (event) => {
    setAddress1(event.target.value);
  };

  const changeAddress2 = (event) => {
    setAddress2(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      data,
      address1,
      address2,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setData('');
    setAddress1('');
    setAddress2('');
  };
  
  return (
    <div class="container">
      <label>Name</label>
      <input type="text" class="form-control" value={name} onChange={changeName} placeholder="Maria Clara"/>
      <label>Data de entrega</label>
      <input type="date"  class="form-control" value={data} onChange={changeData} />
      <label>Ponto de partida</label>
      <input type="text" class="form-control" value={address1} onChange={changeAddress1}placeholder="Rua das Flores, 25" />
      <label>Ponto de destino</label>
      <input type="text" class="form-control" value={address2} onChange={changeAddress2} placeholder="Avenida Paulista, 566"/>
      <button class="btn btn-dark" onClick={transferValue}>Adicionar a lista</button>
    </div>
  );
}
  
export default ClienteForm;