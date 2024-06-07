import Layout from "../../hocs/layouts/Layout";
import {
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
} from "../../redux/actions/nivel/nivel";
import { useEffect } from "react";
import { connect } from "react-redux";
import {  useParams } from "react-router-dom";
import ListNiveles from "../../components/Comunidad/ListNiveles";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";

function Comunidad_Creador({
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
  niveles,
  count,
  next,
  previous,
}) {
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Creador: " + slug;
    get_lista_niveles_by_creador(slug);
  }, [slug, get_lista_niveles_by_creador]);

  return (
    <Layout>
      <SearchNavBar/>

      <ListNiveles 
        niveles ={niveles} 
        error1  ={`No existe ningún creador llamado "${slug}"`}
        error2  ="o no tiene ningún nivel publicado actualmente." 
      />

    </Layout>
  );
}
const mapStateToProps = (state) => ({
  niveles: state.nivel.niveles_creador,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
});

export default connect(mapStateToProps, {
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
})(Comunidad_Creador);
