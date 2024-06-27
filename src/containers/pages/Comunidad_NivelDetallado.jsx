import Layout from "../../hocs/layouts/Layout";
import { get_detailed_nivel } from "../../redux/actions/nivel/nivel";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import NivelDetallado from "../../components/Comunidad/NivelDetallado";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";

function Comunidad_NivelDetallado({

  get_detailed_nivel,
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
    document.title = "Nivel: " + slug;
    get_detailed_nivel(slug);
  }, [slug, get_detailed_nivel]);

  if(!isAuthenticated){
    return (
      <Layout>
        <div className="relative mx-auto lg:max-w-screen-lg py-12 px-4 lg:px-8">
          <NivelDetallado 
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
        <NivelDetallado 
          niveles ={niveles} 
          error1  ={`No existe ningún nivel llamado "${slug}"`}
          error2  ="" 
        />
      </div>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  niveles: state.nivel.nivel_detallado,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  get_detailed_nivel,
})(Comunidad_NivelDetallado);
