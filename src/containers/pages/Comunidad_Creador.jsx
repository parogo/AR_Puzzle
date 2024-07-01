import ListNiveles from "../../components/Comunidad/ListNiveles";
import SearchNavBar from "../../components/Comunidad/SearchNavBar";
import SetPagination from "../../components/pagination/SetPaginationConParam";
import Layout from "../../hocs/layouts/Layout";
import {
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
} from "../../redux/actions/nivel/nivel";
import {
  get_lista_niveles_disponibles,
  create_nivel_disponible,
  delete_nivel_disponible,
} from "../../redux/actions/nivelesDisponibles/nivelesDisponibles";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Comunidad_Creador({
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
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
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // para un desplazamiento suave
    });
    document.title = "Creador: " + slug;
  }, []);

  useEffect(() => {
    get_lista_niveles_by_creador(slug);
    if (user?.username) {
      get_lista_niveles_disponibles(user.username);
    }
  }, [slug, get_lista_niveles_by_creador, get_lista_niveles_disponibles, user]);

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
          error1={`No existe ningún creador llamado "${slug}"`}
          error2="o no tiene ningún nivel publicado actualmente."
        />
        <SetPagination
          list_page={get_lista_niveles_by_creador_page}
          list={niveles}
          count={count}
          term={slug}
        />
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  niveles: state.nivel.niveles_creador,
  nivelesDisponibles: state.nivelesDisponibles.lista_niveles_disponibles,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
  get_lista_niveles_disponibles,
  create_nivel_disponible,
  delete_nivel_disponible,
})(Comunidad_Creador);
