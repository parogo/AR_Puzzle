import Layout from "../../hocs/layouts/Layout";
import { get_detailed_nivel } from "../../redux/actions/nivel/nivel";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ListNiveles from "../../components/Comunidad/ListNiveles";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";

function Comunidad_NivelDetallado({

  get_detailed_nivel,
  niveles,
  count,
  next,
  previous,
}) {
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Nivel: " + slug;
    get_detailed_nivel(slug);
  }, [slug, get_detailed_nivel]);

  return (
    <Layout>
      <SearchNavBar/>

      <ListNiveles 
        niveles ={niveles} 
        error1  ={`No existe ningún nivel llamado "${slug}"`}
        error2  ="" 
      />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  niveles: state.nivel.nivel_detallado,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
});

export default connect(mapStateToProps, {
  get_detailed_nivel,
})(Comunidad_NivelDetallado);
