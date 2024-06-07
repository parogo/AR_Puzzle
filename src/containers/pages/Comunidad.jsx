import Layout from "../../hocs/layouts/Layout";
import {
  get_lista_niveles,
  get_lista_niveles_page,
} from "../../redux/actions/nivel/nivel";
import { useEffect } from "react";
import { connect } from "react-redux";
import ListNiveles from "../../components/Comunidad/ListNiveles";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";


function Comunidad({
  get_lista_niveles,
  get_lista_niveles_page,
  niveles,
  count,
  next,
  previous,
}) {

    useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Comunidad";
    get_lista_niveles();
  }, [get_lista_niveles]);


  return (
    <Layout>
      <SearchNavBar/>
      
      <ListNiveles 
        niveles ={niveles} 
        error1  ="Estamos teniendo problemas para cargar los niveles."
        error2  ="Por favor espere unos segundos y vuelva a intentarlo o póngase en contacto con nosotros." 
      />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  niveles: state.nivel.lista_niveles,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
});

export default connect(mapStateToProps, {
  get_lista_niveles,
  get_lista_niveles_page,
})(Comunidad);
