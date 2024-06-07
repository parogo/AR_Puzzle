import Layout from "../../hocs/layouts/Layout";

function Error404() {
  return (
    <Layout>
      <div className="relative text-center py-32 lg:py-52 px-10">
        <p className="text-base font-bold text-orange-800">ERROR 404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Página no encontrada 😢
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lo sentimos, no pudimos encontrar la página que buscas.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-boton-naranja focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Volver al inicio
          </a>
          <a
            href="mailto:pablo.rodriguezgomez@alum.uca.es?subject=Error%20página%20no%20encontrada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-300"
          >
            Contactar con soporte <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Error404;
