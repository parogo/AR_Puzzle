import Layout from "../../hocs/layouts/Layout";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";

function Logout({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="relative px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-xl lg:max-w-5xl pt-12 lg:pt-12">
          <h1 className="text-3xl text-white font-bold tracking-tight text-center lg:text-3xl">
            Contraseña cambiada con éxito
          </h1>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <button
          type="button"
          className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-bold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          <Link to="/Login">Volver a inicio de sesión</Link>
        </button>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Logout);
