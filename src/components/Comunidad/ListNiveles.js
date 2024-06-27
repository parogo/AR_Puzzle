import { Link } from "react-router-dom";
import { Button } from "../../components/button";

function ListNiveles({ niveles, error1, error2 }) {

    if (!niveles || (Array.isArray(niveles) && niveles.length === 0)) {
        return (
            <div className="text-center text-gray-300 py-10">
                {error1}
                <br />
                {error2}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {niveles.map((nivel) => (
                <div
                    key={nivel.id}
                    className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                >
                    <img
                        src={"/" + nivel.thumbnail.slice(8)}
                        /* src={
                            process.env.PUBLIC_URL +
                            "dataBaseMedia/nivel/test_2/Logo_AR.png"
                            } */
                        alt="Imagen no encontrada"
                        width={400}
                        height={300}
                        className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-200">
                            {nivel.title}
                        </h3>

                        <p className="text-gray-300">
                            De{" "}
                            <Link
                                to={`/Creador/${nivel.creador.slug}`}
                                className="text-boton-naranja"
                            >
                                {" "}
                                {nivel.creador.name}
                            </Link>
                        </p>

                        <Link to={`/Nivel/${nivel.slug}`}>
                            <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                                Ver en detalle
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListNiveles;