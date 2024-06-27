import Layout from "../../hocs/layouts/Layout";
import {
  get_lista_niveles,
  get_lista_niveles_page,
} from "../../redux/actions/nivel/nivel";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ListNiveles from "../../components/Comunidad/ListNiveles";
import SetPagination from "../../components/pagination/SetPagination";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";


function Comunidad({
  get_lista_niveles,
  get_lista_niveles_page,
  niveles,
  count,
  next,
  previous,
  isAuthenticated
}) {

    useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Comunidad";
    get_lista_niveles();
  }, [get_lista_niveles]);

  if(!isAuthenticated){
    return (
      <Layout>
        <div className="relative mx-auto lg:max-w-screen-lg py-12 px-4 lg:px-8">
          <ListNiveles 
            niveles ={[]} 
            error1  ="Para acceder a la comunidad debe iniciar sesión."
            error2  ="Puede hacerlo clickeando en el botón de arriba a la derecha." 
          />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
        <SearchNavBar/>
      <div className="relative mx-auto lg:max-w-screen-lg py-12 px-4 lg:px-8">
        <ListNiveles 
          niveles ={niveles} 
          error1  ="Estamos teniendo problemas para cargar los niveles."
          error2  ="Por favor espere unos segundos y vuelva a intentarlo o póngase en contacto con nosotros." 
        />
 
        <SetPagination list_page={get_lista_niveles_page&&get_lista_niveles_page} list={niveles} count={count&&count} />

      </div>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  niveles: state.nivel.lista_niveles,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  get_lista_niveles,
  get_lista_niveles_page,
})(Comunidad);
