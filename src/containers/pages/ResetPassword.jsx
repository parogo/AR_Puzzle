import Logo_AR from "../../assets/img/Logo_AR.png";
import Layout from "../../hocs/layouts/Layout";
import { reset_password } from "../../redux/actions/auth/auth";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ResetPassword({ reset_password, isAuthenticated, loading }) {
  const [formData, setFormData] = useState({ email: "" });

  const navigate = useNavigate();

  useEffect(() => {
    if (loading === true) {
      toast.success("Le hemos enviado un correo para resetear su contraseña", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      navigate("/");
    }
  }, [loading, navigate]);

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onClick = async (e) => {
    e.preventDefault();
    reset_password(email);
    //Navigate("/password_reset_sent");
  };

  if (isAuthenticated) {
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
        </div>

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

            <div>
              <div className="flex items-end">
                <div className="text-sm">
                  <Link
                    to="/Login"
                    className="font-semibold text-orange-500 hover:text-orange-600"
                  >
                    Volver a iniciar sesión
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={(e) => {
                  onClick(e);
                }}
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-bold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Olvidé mi contraseña
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
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  reset_password,
})(ResetPassword);
