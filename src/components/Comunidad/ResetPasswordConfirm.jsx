import Logo_AR from "../../assets/img/Logo_AR.png";
import Layout from "../../hocs/layouts/Layout";
import { reset_password_confirm } from "../../redux/actions/auth/auth";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPasswordConfirm({
  reset_password_confirm,
  isAuthenticated,
  isPasswordChanged,
  loading,
}) {
  const Navigate = useNavigate();
  const params = useParams();
  const uid = params.uid;
  const token = params.token;

  useEffect(() => {
    if (isPasswordChanged === true) {
      Navigate("/password_reset_complete");
    }

    if (isPasswordChanged === false) {
      console.log("La nueva contraseña no es lo suficientemente segura");
      toast.error("La nueva contraseña no es lo suficientemente segura", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isPasswordChanged, Navigate]);

  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onClick = async (e) => {
    e.preventDefault();

    console.log(new_password);
    console.log(re_new_password);
    if (new_password !== re_new_password) {
      console.log("Las contraseñas no son iguales");
      toast.error("Las contraseñas deben ser iguales", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Detiene la ejecución si las contraseñas no coinciden
    } else {
      console.log(formData);
      console.log("Las contraseñas son iguales");
      reset_password_confirm(uid, token, new_password, re_new_password);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src={Logo_AR}
            alt="Logo AR Puzzle"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Nueva contraseña
              </label>
              <div className="mt-2">
                <input
                  name="new_password"
                  value={new_password}
                  onChange={(e) => onChange(e)}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Repita la nueva contraseña
              </label>
              <div className="mt-2">
                <input
                  name="re_new_password"
                  value={re_new_password}
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
                Cambiar contraseña
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            ¿Todavía no tienes una cuenta?{" "}
            <Link
              to="/SingIn"
              className="font-semibold leading-6 text-orange-500 hover:text-orange-600"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isPasswordChanged: state.auth.isPasswordChanged,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  reset_password_confirm,
})(ResetPasswordConfirm);
