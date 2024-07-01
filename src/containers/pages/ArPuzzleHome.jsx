import logo_AR from "../../assets/img/Logo_AR.png";
import QR_Click_me from "../../assets/img/qr_click_me.png";
import qr_code_mapa from "../../assets/img/qr_code_mapa.png";
import qr_code_tools from "../../assets/img/qr_code_tools.png";
import video_tarjeta_tools from "../../assets/video/video_tarjeta_herramienta.mp4";
import video_tarjeta_mapa from "../../assets/video/video_tarjeta_mapa.mp4";
import Layout from "../../hocs/layouts/Layout";
import React, { useEffect } from "react";

function ArPuzzleHome() {
  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "AR Puzzle";
    window.scrollTo({
      top: 0,
      behavior: "smooth", // para un desplazamiento suave
    });
  }, []);

  return (
    <Layout>
      <div className="relative mx-auto max-w-2xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Primera fila */}

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-6 md:gap-0">
          <div>
            <p className="text-lg text-white block">
              <span className="font-semibold text-3xl text-boton-naranja block">
                ¿Qué es AR Puzzle?
              </span>
              <br></br>
              "Augmented Reality" Puzzle es un{" "}
              <span className="text-boton-naranja">videojuego</span> pensado
              para acercar la{" "}
              <span className="text-boton-naranja">realidad aumentada</span> a
              todo el mundo. A través de nuestro teléfono móvil escanearemos
              códigos QR para traer elementos del mundo virtual a nuestro mundo
              real.
              <br></br>
              <br></br>
              ¡Descubre un nuevo mundo de posibilidades!
            </p>
          </div>

          <article className="block">
            <img src={QR_Click_me} alt="QR Code" className="w-full h-auto" />
            <img src={logo_AR} alt="Mapa del juego" className="w-full h-auto" />
          </article>
        </div>

        {/* Linea Horizontal 1 División */}
        <div className="relative py-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-400 px-3 text-gray-500"></span>
          </div>
        </div>

        {/* Segunda fila */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-6 md:gap-0">
          <div>
            <p className="text-lg text-white block">
              <span className="font-semibold text-3xl text-boton-naranja block">
                Resuelve puzzles de otro mundo
              </span>
              <br></br>
              Este será el QR que te permitirá generar el mapa del juego. Una
              vez escaneado será como si el puzzle apareciera de verdad delante
              de ti. Estos mapas podrán ser creados por ti mismo o por otros
              jugadores de la{" "}
              <a href="/Comunidad" className="text-boton-naranja">
                comunidad
              </a>
              .<br></br>
              <br></br>
              Clickea en él para ver el video de la tarjeta en acción.
              <br className="block lg:hidden"></br>
              <br className="block lg:hidden"></br>
              <br className="block lg:hidden"></br>
              <br className="block lg:hidden"></br>
            </p>
          </div>

          <article className="block">
            <img src={qr_code_mapa} alt="QR Code" className="w-full h-auto" />
            <video
              src={video_tarjeta_mapa}
              alt="Mapa generado al escanear la tarjeta mapa"
              className="w-full h-auto"
              controls
            />
          </article>
        </div>

        {/* Linea Horizontal 2 División */}
        <div className="relative py-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-400 px-3 text-gray-500"></span>
          </div>
        </div>

        {/* Tercera fila */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-0">
          <div>
            <p className="text-lg text-white block">
              <span className="font-semibold text-3xl text-boton-naranja block">
                Con herramientas de otro mundo
              </span>
              <br></br>
              Con este otro QR podrás invocar las herramientas con las que
              resolver el puzzle.
              <br></br>
              <br></br>
              Clickea en él para ver el video de la tarjeta en acción.
              <br className="block lg:hidden"></br>
              <br className="block lg:hidden"></br>
              <br className="block lg:hidden"></br>
              <br className="block lg:hidden"></br>
            </p>
          </div>

          <article className="block">
            <img src={qr_code_tools} alt="QR Code" className="w-full h-auto" />
            <video
              src={video_tarjeta_tools}
              alt="Mapa generado al escanear la tarjeta mapa"
              className="w-full h-auto"
              controls
            />
          </article>
        </div>
      </div>
    </Layout>
  );
}

export default ArPuzzleHome;
