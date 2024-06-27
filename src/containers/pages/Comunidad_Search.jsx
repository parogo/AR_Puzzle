import Layout from "../../hocs/layouts/Layout";
import {
  get_search_nivel,
  get_search_nivel_page,
} from "../../redux/actions/nivel/nivel";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ListNiveles from "../../components/Comunidad/ListNiveles";
import SetPagination from "../../components/pagination/SetPaginationConParam";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";

function Comunidad_Search({
  get_search_nivel,
  get_search_nivel_page,
  niveles,
  count,
  next,
  previous,
  isAuthenticated
}) {
    const params = useParams();
    const term_actual = params.term;

  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Comunidad";
    get_search_nivel(term_actual);
  }, [term_actual, get_search_nivel, get_search_nivel_page]);

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
          error1  ={`Ningún nivel cuadra con la búsqueda "${term_actual}"`}
          error2  ="" 
        />
        <SetPagination list_page={get_search_nivel_page} list={niveles} count={count} term={term_actual}/>
      </div>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  niveles: state.nivel.niveles_filtrados,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  get_search_nivel,
  get_search_nivel_page,
})(Comunidad_Search);
