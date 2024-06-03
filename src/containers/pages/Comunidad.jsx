import Layout from "../../hocs/layouts/Layout";
import { get_creadores } from "../../redux/actions/creadores/creadores";
import {
  get_lista_niveles,
  get_lista_niveles_page,
} from "../../redux/actions/nivel/nivel";
import React, { useEffect /* useState */ } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function Comunidad({
  get_creadores,
  creadores,
  get_lista_niveles,
  get_lista_niveles_page,
  niveles,
  count,
  next,
  previous,
}) {
  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Comunidad | AR Puzzle";
    get_creadores();
    get_lista_niveles();
  }, [get_creadores, get_lista_niveles]);

  const location = useLocation();
  console.log(location.search);
  return (
    <Layout>
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-12 px-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-9 px-12">
              <button
                className={`${
                  location.pathname === "/Comunidad"
                    ? location.search
                      ? "text-gray-200"
                      : "text-boton-naranja"
                    : "text-gray-200"
                } py-2 px-4 bg-gray-900 hover:bg-gray-700  rounded-md`}
              >
                Todos los niveles
              </button>
            </div>

            <div className="col-span-3 px-12">
              <div className="bg-red-900 rounded-md">text</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  creadores: state.creadores.creadores,
  niveles: state.nivel.lista_niveles,
  count: state.nivel.count,
  next: state.nivel.next,
  previous: state.nivel.previous,
});

export default connect(mapStateToProps, {
  get_creadores,
  get_lista_niveles,
  get_lista_niveles_page,
})(Comunidad);
