import tarjetas_pdf from "../../assets/descargas/Tarjetas_TFG.pdf";
import logo_AR from "../../assets/img/Logo_AR.png";
import imagen_descarga from "../../assets/img/boton_descarga.png";
import Layout from "../../hocs/layouts/Layout";
import React, { useEffect } from "react";

// Reemplaza con la ruta real de tu archivo

function Descarga() {
  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Descarga";
  }, []);

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };
  return (
    <Layout>
      {/* Primera fila */}
      <div className="flex items-center justify-center min-h-screen py-12">
        <div className="relative mx-auto max-w-xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-6 lg:gap-0">
            <div>
              <p className="text-lg text-center lg:text-left text-white block">
                <span className="font-semibold text-3xl text-boton-naranja block">
                  ¡Descarga el juego y empieza a jugar!
                </span>
                <br></br>
                Estamos muy agradecidos de que quieras probar nuestro juego.
                Para empezar a jugar, descarga el juego en tu dispositivo móvil
                y podrás empezar a jugar y a crear tus propios puzzles.
                <br></br>
                <br></br>
                ¡Haz click en la imagen para descargar el juego!
              </p>
            </div>

            <img
              src={logo_AR}
              alt="Descarga"
              className="w-40 h-auto cursor-pointer"
              onClick={() => handleDownload(tarjetas_pdf, "Tarjetas_TFG.pdf")}
              // Cambiar el archivo por la apk del juego
            />
          </div>

          {/* Linea Horizontal 1 División */}
          <div className="relative py-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-400 px-3 text-gray-500"></span>
            </div>
          </div>

          {/* Segunda fila */}
          <div className="pt-12 pb-28 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-6 lg:gap-0">
            <div>
              <p className="text-lg text-center text-white block">
                <span className="font-semibold text-3xl text-boton-naranja block">
                  ¡Descarga también las tarjetas del mapa y las herramientas!
                </span>
                <br></br>
                Esto descargará un archivo pdf que podrás imprimir y recortar
                para tener las tarjetas del mapa y las herramientas.
                <br></br>
                <br></br>
                ¡Estás a solo un paso de empezar a jugar!
              </p>
            </div>

            <img
              src={imagen_descarga}
              alt="Descarga"
              className="w-40 h-auto cursor-pointer"
              onClick={() => handleDownload(tarjetas_pdf, "Tarjetas_TFG.pdf")}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Descarga;
