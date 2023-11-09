import { Routes, Route  } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Inicio from './components/inicio/Inicio';
import Productos from './components/productos/Productos';
import AcercaDeNosotros from './components/acercade/AcercaDeNosotros';
import Contacto from './Contacto';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="productos" element={<Productos />} />
          <Route path="acercadenosotros" element={<AcercaDeNosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
