import ListNiveles from "../../components/Comunidad/ListNiveles";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";
import SetPagination from "../../components/pagination/SetPagination";
import Layout from "../../hocs/layouts/Layout";
import {
  get_lista_niveles,
  get_lista_niveles_page,
} from "../../redux/actions/nivel/nivel";
import {
  get_lista_niveles_disponibles,
  create_nivel_disponible,
  delete_nivel_disponible,
} from "../../redux/actions/nivelesDisponibles/nivelesDisponibles";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Comunidad({
  get_lista_niveles,
  get_lista_niveles_page,
  get_lista_niveles_disponibles,
  create_nivel_disponible,
  delete_nivel_disponible,
  niveles,
  nivelesDisponibles,
  count,
  next,
  previous,
  isAuthenticated,
  user,
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // para un desplazamiento suave
    });
    document.title = "Comunidad";
  }, []);

  useEffect(() => {
    get_lista_niveles();
    if (user?.username) {
      get_lista_niveles_disponibles(user.username);
    }
  }, [get_lista_niveles, get_lista_niveles_disponibles, user]);

  const handleNivelDisponible = async (
    nivelId,
    nivelTitle,
    nivelDisponibleId
  ) => {
    setIsLoading(true);
    try {
      if (nivelDisponibleId) {
        await delete_nivel_disponible(nivelDisponibleId);
      } else {
        // Corregido: Pasamos el título del nivel en lugar del ID
        await create_nivel_disponible(user.username, nivelTitle);
      }
      await get_lista_niveles_disponibles(user.username);
    } catch (error) {
      console.error("Error al manejar nivel disponible:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="relative mx-auto lg:max-w-screen-lg py-12 px-4 lg:px-8">
          <ListNiveles
            niveles={[]}
            error1="Para acceder a la comunidad debe iniciar sesión."
            error2="Puede hacerlo clickeando en el botón de arriba a la derecha."
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchNavBar />
      <div className="relative mx-auto lg:max-w-screen-lg py-12 px-4 lg:px-8">
        <ListNiveles
          niveles={niveles}
          nivelesDisponibles={nivelesDisponibles || []}
          handleNivelDisponible={handleNivelDisponible}
          isLoading={isLoading}
          error1="Estamos teniendo problemas para cargar los niveles."
          error2="Por favor espere unos segundos y vuelva a intentarlo o póngase en contacto con nosotros."
        />
        <SetPagination
          list_page={get_lista_niveles_page}
          list={niveles}
          count={count}
        />
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  niveles: state.nivel.lista_niveles,
  nivelesDisponibles: state.nivelesDisponibles.lista_niveles_disponibles,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  get_lista_niveles,
  get_lista_niveles_page,
  get_lista_niveles_disponibles,
  create_nivel_disponible,
  delete_nivel_disponible,
})(Comunidad);
