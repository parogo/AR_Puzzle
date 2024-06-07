import Layout from "../../hocs/layouts/Layout";
import {
  get_search_nivel,
  get_search_nivel_page,
} from "../../redux/actions/nivel/nivel";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ListNiveles from "../../components/Comunidad/ListNiveles";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";

function Comunidad_Search({
  get_search_nivel,
  get_search_nivel_page,
  niveles,
  count,
  next,
  previous,
}) {
    const params = useParams();
    const term_actual = params.term;

  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Comunidad";
    get_search_nivel(term_actual);
  }, [term_actual, get_search_nivel, get_search_nivel_page]);

  return (
    <Layout>
      <SearchNavBar/>

      <ListNiveles 
        niveles ={niveles} 
        error1  ={`Ningún nivel cuadra con la búsqueda "${term_actual}"`}
        error2  ="" 
      />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  niveles: state.nivel.niveles_filtrados,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
});

export default connect(mapStateToProps, {
  get_search_nivel,
  get_search_nivel_page,
})(Comunidad_Search);
