import Layout from "../../hocs/layouts/Layout";
import React, { useEffect /* useState */ } from "react";

function Contacto() {
  useEffect(() => {
    // Esta función se ejecuta al cargar el componente
    document.title = "Contacto";
    window.scrollTo({
      top: 0,
      behavior: "smooth", // para un desplazamiento suave
    });
  }, []);

  return (
    <Layout>
      <div className="relative px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-xl lg:max-w-5xl pt-12 lg:pt-12">
          <h1 className="text-3xl text-white font-bold tracking-tight text-center lg:text-6xl">
            Gracias por su interés en este proyecto
          </h1>
          <p className="mt-6 text-lg pt-6 text-white text-center">
            Si tienes alguna pregunta, comentario o sugerencia no dude en
            contactar con nosotros
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-2xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-14 justify-center w-full py-12 place-items-center">
          <div className="grid h-20 w-20 card bg-base-100 rounded-box place-items-center lg:justify-self-end">
            <a
              href="mailto:pablo.rodriguezgomez@alum.uca.es?subject=Consulta%20proyecto%20AR%20Puzzle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="75px"
                height="75px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                    fill="#EA4335"
                  ></path>{" "}
                  <path
                    d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                    fill="#FBBC05"
                  ></path>{" "}
                  <path
                    d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                    fill="#34A853"
                  ></path>{" "}
                  <path
                    d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                    fill="#C5221F"
                  ></path>{" "}
                  <path
                    d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                    fill="#C5221F"
                  ></path>{" "}
                  <path
                    d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                    fill="#C5221F"
                  ></path>{" "}
                  <path
                    d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                    fill="#4285F4"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>

          <div className="grid h-20 w-20 card bg-base-100 rounded-box place-items-center lg:justify-self-start">
            <a
              href="https://www.linkedin.com/in/parogo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="LinkedIn"
                role="img"
                viewBox="0 0 512 512"
                fill="#ffffff"
                width="64px"
                height="64px"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="8.192"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#0077b5"></rect>
                  <circle cx="142" cy="138" r="37"></circle>
                  <path
                    stroke="#ffffff"
                    strokeWidth="66"
                    d="M244 194v198M142 194v198"
                  ></path>
                  <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contacto;
