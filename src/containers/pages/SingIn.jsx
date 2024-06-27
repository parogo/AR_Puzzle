import Logo_AR from "../../assets/img/Logo_AR.png";
import Layout from "../../hocs/layouts/Layout";
import { register, login } from "../../redux/actions/auth/auth";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// Importa el archivo de estilos personalizado

//import "react-toastify/dist/ReactToastify.css";

function SingIn({
  register,
  login,
  isRegistered,
  isAuthenticated,
  loading,
  usernameMessage,
  emailMessage,
  passwordMessage,
}) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });

  const { email, username, first_name, last_name, password, re_password } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onClick = async (e) => {
    e.preventDefault();
    register(email, username, first_name, last_name, password, re_password);
  };

  const usernameMessageRef = useRef(usernameMessage);
  const emailMessageRef = useRef(emailMessage);
  const passwordMessageRef = useRef(passwordMessage);

  useEffect(() => {
    document.title = "Registro";

    if (
      (isRegistered === null || isRegistered === false) &&
      usernameMessage &&
      loading === false
    ) {
      toast.error(usernameMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      usernameMessageRef.current = null;
    }

    if (
      (isRegistered === null || isRegistered === false) &&
      emailMessage &&
      loading === false
    ) {
      toast.error(emailMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      emailMessageRef.current = null;
    }

    if (
      (isRegistered === null || isRegistered === false) &&
      passwordMessage &&
      loading === false
    ) {
      toast.error(passwordMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      passwordMessageRef.current = null;
    }
  }, [isRegistered, usernameMessage, emailMessage, passwordMessage, loading]);

  if (isRegistered) {
    login(email, password);
  }

  if (isAuthenticated) {
    toast.success("¡Bienvenido!, ya puedes acceder a la sección de comunidad", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src={Logo_AR}
            alt="Logo AR Puzzle"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Introduzca sus datos
          </h2>
        </div>

        {/* Correo electrónico */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Nombre de usuario */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Nombre de usuario
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => onChange(e)}
                  type="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Nombre */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Nombre
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="first_name"
                  name="first_name"
                  value={first_name}
                  onChange={(e) => onChange(e)}
                  type="first_name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Apellido */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Apellidos
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="last_name"
                  name="last_name"
                  value={last_name}
                  onChange={(e) => onChange(e)}
                  type="last_name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Contraseña */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Repite la Contraseña */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Vuelva a introducir la contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="re_password"
                  name="re_password"
                  value={re_password}
                  onChange={(e) => onChange(e)}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={(e) => onClick(e)}
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-bold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/Login"
              className="font-semibold leading-6 text-orange-500 hover:text-orange-600"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isRegistered: state.auth.isRegistered,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  usernameMessage: state.auth.usernameMessage,
  emailMessage: state.auth.emailMessage,
  passwordMessage: state.auth.passwordMessage,
});

export default connect(mapStateToProps, {
  register,
  login,
})(SingIn);
