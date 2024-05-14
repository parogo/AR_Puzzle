import Layout from "hocs/layouts/Layout";
import React, { useState } from "react";

function Comunidad() {
  const [showMessageOne, setShowMessageOne] = useState(false);
  const [showMessageTwo, setShowMessageTwo] = useState(false);

  const handleButtonOneClick = () => {
    setShowMessageOne(true);
  };

  const handleButtonTwoClick = () => {
    setShowMessageTwo(true);
  };

  return (
    <Layout>
      <div className="bg-black bg-dot-white/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="p-72 flex-col justify-center">
          <div className="p-5 flex flex-row justify-center space-x-4">
            {/* Boton 1-L */}
            {showMessageOne && (
              <div className="flex w-full max-w-sm overflow-hidden rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 bg-emerald-500">
                  <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                  </svg>
                </div>

                <div className="px-4 py-2 -mx-3">
                  <div className="mx-3">
                    <span className="font-semibold text-emerald-400">
                      Success
                    </span>
                    <p className="text-sm text-white">
                      Your account was registered!
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Botón */}
            {!showMessageOne && (
              <button
                onClick={handleButtonOneClick}
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Test
              </button>
            )}
            {/* Boton 1-R */}
            {showMessageOne && (
              <div className="flex w-full max-w-sm overflow-hidden rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 bg-emerald-500">
                  <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                  </svg>
                </div>

                <div className="px-4 py-2 -mx-3">
                  <div className="mx-3">
                    <span className="font-semibold text-emerald-400">
                      Success
                    </span>
                    <p className="text-sm text-white">
                      Your account was registered!
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Botón */}
            {!showMessageOne && (
              <button
                onClick={handleButtonOneClick}
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Test
              </button>
            )}
          </div>
          {/* Boton 2 */}
          <div className="p-5 flex flex-row justify-center space-x-4">
            {showMessageTwo && (
              <div className="flex w-full max-w-sm overflow-hidden rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 bg-emerald-500">
                  <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                  </svg>
                </div>

                <div className="px-4 py-2 -mx-3">
                  <div className="mx-3">
                    <span className="font-semibold text-emerald-400">
                      Success
                    </span>
                    <p className="text-sm text-white">
                      Your account was registered!
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Botón */}
            {!showMessageTwo && (
              <button
                onClick={handleButtonTwoClick}
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Test
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Comunidad;
