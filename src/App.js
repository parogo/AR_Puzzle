import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";

import Error404 from "./containers/errors/Error404";
import ArPuzzleHome from "./containers/pages/ArPuzzleHome";
import Comunidad from "./containers/pages/Comunidad";
import Component from "./containers/pages/ComponentV0";
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
            {/* Error displayk, si no existe*/}
            <Route path="*" element={<Error404/>}/>

            {/* Ruta Home */}
            <Route path="/" element={<ArPuzzleHome/>}/>
            <Route path="/Comunidad" element={<Comunidad/>}/>
            {/* <Route path="/Desarrollo_Futuro" element={<RoadMap/>}/> */}
            <Route path="/Foro" element={<Foro/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
            <Route path="/Component" element={<Component/>}/>
            <Route path="/Descarga" element={<Descarga/>}/>

          </Routes> 
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
