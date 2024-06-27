import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";

import Error404 from "./containers/errors/Error404";
import Login from "./containers/pages/Login";
import ResetPassword from "./containers/pages/ResetPassword";
import ResetPasswordConfirm from "./components/Comunidad/ResetPasswordConfirm";
import ResetPasswordFinished from "./components/Comunidad/ResetPasswordFinished";
import SingIn from "./containers/pages/SingIn";
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

import { ToastContainer } from "react-toastify";

import { connect } from "react-redux"
import { useEffect } from "react"
import { check_authenticated, load_user, refresh } from "./redux/actions/auth/auth"


function App({
  refresh,
  check_authenticated,
  load_user,
  refresh_token,
  access_token,
  isAuthenticated,
  user_loading,
  user
}) {

  useEffect(() => {
    if(isAuthenticated !== true)
      {refresh()
        check_authenticated()
        load_user()
      }
  })

  return (

    <Provider store={store}>
      <Router>
        <ToastContainer style={{ zIndex: 1000 }} />
        <div className="bg-black-bg app-container -z-100"> {/* Agrega esta clase para controlar el layout principal */}
          <Navbar />
          <Routes>
            {/* Error display, si no existe*/}
            <Route path="*" element={<Error404 />} />

            {/* Ruta Home */}
            <Route path="/" element={<ArPuzzleHome />} />

            {/* Ruta Login */}
            <Route path="/Login" element={<Login />} />

            {/* Ruta Cambio de Contraseña */}
            <Route path="/reset_password" element={<ResetPassword />} />
            {/* Ruta Cambio de Contraseña Confirmación */}
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            {/* Ruta Cambio de Contraseña Finalizado */}
            <Route path="/password_reset_complete" element={<ResetPasswordFinished />} />


            {/* Ruta Registro */}
            <Route path="/SingIn" element={<SingIn />} />

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

// Esto llamará a alguna variable de Redux que tengamos inicializada
const mapStateToProps = state => ({

  user_loading: state.auth.user_loading,
  refresh_token: state.auth.refresh,
  access_token: state.auth.access,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

// Si llamamos alguna función de redux el export se tiene que hacer así 
export default connect(mapStateToProps, {
  refresh,
  check_authenticated,
  load_user,
})(App)