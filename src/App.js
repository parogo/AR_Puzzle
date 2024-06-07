import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";

import Error404 from "./containers/errors/Error404";
import ArPuzzleHome from "./containers/pages/ArPuzzleHome";
import Comunidad from "./containers/pages/Comunidad";
import Creador from "./containers/pages/Comunidad_Creador";
import NivelDetallado from "./containers/pages/Comunidad_NivelDetallado";
import NivelesFiltrados from "./containers/pages/Comunidad_Search";
/* import RoadMap from "./containers/pages/RoadMap"; */
import Foro from "./containers/pages/Foro";
import Contacto from "./containers/pages/Contacto";
import Descarga from "./containers/pages/Descarga";

import Navbar from "./MyComponents/navigation/Navbar";
import Footer from "./MyComponents/navigation/Footer";


function App() {
  return (

    <Provider store={store}>
      <Router>
        <div className="bg-black-bg app-container -z-100"> {/* Agrega esta clase para controlar el layout principal */}
          <Navbar />
          <Routes>
            {/* Error display, si no existe*/}
            <Route path="*" element={<Error404 />} />

            {/* Ruta Home */}
            <Route path="/" element={<ArPuzzleHome />} />

            <Route path="/Creador/:slug" element={<Creador />} />
            <Route path="/Nivel/:slug" element={<NivelDetallado />} />
            <Route path="/Comunidad" element={<Comunidad />} />
            <Route path="/Comunidad/:term" element={<NivelesFiltrados />} />
            {/* <Route path="/Desarrollo_Futuro" element={<RoadMap/>}/> */}
            <Route path="/Foro" element={<Foro />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Descarga" element={<Descarga />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
