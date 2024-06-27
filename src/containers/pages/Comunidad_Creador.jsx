import Layout from "../../hocs/layouts/Layout";
import {
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
} from "../../redux/actions/nivel/nivel";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {  useParams } from "react-router-dom";
import ListNiveles from "../../components/Comunidad/ListNiveles";
import SetPagination from "../../components/pagination/SetPaginationConParam";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";

function Comunidad_Creador({
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
  niveles,
  count,
  next,
  previous,
  isAuthenticated
}) {
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Creador: " + slug;
    get_lista_niveles_by_creador(slug);
  }, [slug, get_lista_niveles_by_creador, get_lista_niveles_by_creador_page]);

  
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
          error1  ={`No existe ningún creador llamado "${slug}"`}
          error2  ="o no tiene ningún nivel publicado actualmente." 
        />
      <SetPagination list_page={get_lista_niveles_by_creador_page} list={niveles} count={count} term={slug} />
      </div>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  niveles: state.nivel.niveles_creador,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
})(Comunidad_Creador);
