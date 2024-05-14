import Layout from "hocs/layouts/Layout";
import React, { useState } from "react";
import qr_code_mapa from "assets/img/qr_code_mapa.png";
import mapa_juego from "assets/img/mapa_juego.png";

function ArPuzzleHome() {
  const [hover, setHover] = useState(false); // Definiendo el estado hover y la función setHover
  return (
    <Layout>
      <div className="bg-black bg-dot-white/[0.25] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

        {/* <div className="relative px-8 lg:px-12"> */}
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Primera fila */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-6 md:gap-0">
            <div>
              <p className="text-lg text-white block">
                <span className="font-semibold text-3xl text-boton-naranja text-center block">
                  REALIDAD AUMENTADA
                </span>
                <br></br>
                La realidad aumentada (AR) permite superponer información
                digital en el mundo real a través de dispositivos, mejorando así
                la interacción de los usuarios con el entorno mediante el uso de
                imágenes y sonidos generados por computadora.
              </p>
            </div>
            <article className="block">
              <img src={qr_code_mapa} alt="QR Code" className="w-full h-auto" />
              <img
                src={mapa_juego}
                alt="Mapa del juego"
                className="w-full h-auto"
              />
            </article>
          </div>
        </div>
      </div>

      {/* <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{" "}
                    <a href="/" className="font-semibold text-orange-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl text-white font-bold tracking-tight sm:text-center sm:text-6xl">
                  Data to enrich your online business
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="/"
                    className="inline-block rounded-lg bg-orange-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                  >
                    Get started
                    <span className="text-orange-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="/"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Live demo
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </Layout>
  );
}

export default ArPuzzleHome;
