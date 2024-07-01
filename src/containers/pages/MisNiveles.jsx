import { Button } from "../../components/button";
import SetPagination from "../../components/pagination/SetPagination";
import Layout from "../../hocs/layouts/Layout";
import {
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
  delete_nivel,
} from "../../redux/actions/nivel/nivel";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

// Componente Modal simple
const ConfirmModal = ({ isOpen, onClose, onConfirm, nivelTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Confirmar eliminación</h2>
        <p>
          ¿Estás seguro de que quieres eliminar el nivel "{nivelTitle}"? Esta
          acción no se puede deshacer.
        </p>
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose} className="mr-2 bg-gray-300 text-black">
            Cancelar
          </Button>
          <Button onClick={onConfirm} className="bg-red-500 text-white">
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};

function MisNiveles({
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
  delete_nivel,
  niveles,
  count,
  next,
  previous,
  isAuthenticated,
  user,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNivel, setSelectedNivel] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // para un desplazamiento suave
    });
    document.title = "Mis Niveles Creados";
  }, []);

  useEffect(() => {
    if (user?.username) {
      get_lista_niveles_by_creador(user.username);
    }
  }, [get_lista_niveles_by_creador, user]);

  const handleDeleteClick = (nivel) => {
    setSelectedNivel(nivel);
    setModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedNivel) {
      setIsLoading(true);
      try {
        await delete_nivel(selectedNivel.title);
        toast.success("Nivel eliminado correctamente.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        await get_lista_niveles_by_creador(user.username);
      } catch (error) {
        console.error("Error al eliminar nivel:", error);
      } finally {
        setIsLoading(false);
        setModalOpen(false);
        setSelectedNivel(null);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="relative mx-auto lg:max-w-screen-lg py-12 px-4 lg:px-8">
          <div className="text-center text-gray-300 py-10">
            Para acceder a tus niveles creados debes iniciar sesión.
            <br />
            Puedes hacerlo clickeando en el botón de arriba a la derecha.
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative mx-auto lg:max-w-screen-lg py-12 px-4 lg:px-8">
        {niveles && niveles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {niveles.map((nivel) => (
              <div
                key={nivel.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={"/" + nivel.thumbnail.slice(8)}
                  alt="Imagen no encontrada"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-200">
                    {nivel.title}
                  </h3>
                  <p className="text-gray-300">
                    Visitas:{" "}
                    <span className="text-boton-naranja">{nivel.views}</span>
                  </p>
                  <Button
                    onClick={() => handleDeleteClick(nivel)}
                    disabled={isLoading}
                    className="mt-4 w-full bg-red-500 text-white hover:bg-red-600"
                  >
                    Eliminar Nivel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-300 py-10">
            No has creado ningún nivel aún.
            <br />
            ¡Comienza a crear tus propios niveles!
          </div>
        )}
        <SetPagination
          list_page={(page) =>
            get_lista_niveles_by_creador_page(user.username, page)
          }
          list={niveles}
          count={count}
        />
      </div>
      <ConfirmModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
        nivelTitle={selectedNivel?.title}
      />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  niveles: state.nivel.niveles_creador,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  get_lista_niveles_by_creador,
  get_lista_niveles_by_creador_page,
  delete_nivel,
})(MisNiveles);
