import ListNiveles from "../../components/Comunidad/ListNiveles";
import SetPagination from "../../components/pagination/SetPagination";
import Layout from "../../hocs/layouts/Layout";
import {
  get_lista_niveles_disponibles,
  delete_nivel_disponible,
} from "../../redux/actions/nivelesDisponibles/nivelesDisponibles";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function ListNivelesDisponibles({
  get_lista_niveles_disponibles,
  delete_nivel_disponible,
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
    document.title = "Mis Niveles Disponibles";
  }, []);

  useEffect(() => {
    if (user?.username) {
      get_lista_niveles_disponibles(user.username);
    }
  }, [get_lista_niveles_disponibles, user]);

  const handleNivelDisponible = async (
    nivelId,
    nivelTitle,
    nivelDisponibleId
  ) => {
    setIsLoading(true);
    try {
      if (nivelDisponibleId) {
        await delete_nivel_disponible(nivelDisponibleId);
        await get_lista_niveles_disponibles(user.username);
      }
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
            error1="Para acceder a tus niveles disponibles debes iniciar sesión."
            error2="Puedes hacerlo clickeando en el botón de arriba a la derecha."
          />
        </div>
      </Layout>
    );
  }

  const nivelesDisponiblesArray = Array.isArray(nivelesDisponibles)
    ? nivelesDisponibles
    : [];
  const nivelesMapped = nivelesDisponiblesArray
    .map((nd) => nd.nivel)
    .filter(Boolean);

  return (
    <Layout>
      <div className="relative mx-auto lg:max-w-screen-lg py-12 px-4 lg:px-8">
        <ListNiveles
          niveles={nivelesMapped}
          nivelesDisponibles={nivelesDisponiblesArray}
          handleNivelDisponible={handleNivelDisponible}
          isLoading={isLoading}
          error1="No tienes niveles disponibles."
          error2="Añade niveles a tu lista desde la comunidad."
        />
        {nivelesDisponiblesArray.length > 0 && (
          <SetPagination
            list_page={(page) =>
              get_lista_niveles_disponibles(user.username, page)
            }
            list={nivelesDisponiblesArray}
            count={count}
          />
        )}
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  nivelesDisponibles: state.nivelesDisponibles.lista_niveles_disponibles,
  count: state.nivelesDisponibles.count,
  next: state.nivelesDisponibles.next,
  previous: state.nivelesDisponibles.previous,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  get_lista_niveles_disponibles,
  delete_nivel_disponible,
})(ListNivelesDisponibles);
