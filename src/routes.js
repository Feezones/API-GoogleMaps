import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import MapaRota from './Mapa/mapa'

import TableData from './table';
  
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
      <TableData />
     
    </div> 
    </BrowserRouter>
  );
}
  
export default App;