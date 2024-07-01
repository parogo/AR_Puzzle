import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";

function ListNiveles({ 
    niveles, 
    error1, 
    error2, 
    nivelesDisponibles,
    handleNivelDisponible,
    isLoading 
}) {
    if (!niveles || (Array.isArray(niveles) && niveles.length === 0)) {
        return (
            <div className="text-center text-gray-300 py-10">
                {error1}
                <br />
                {error2}
            </div>
        );
    }

    const nivelesDisponiblesArray = Array.isArray(nivelesDisponibles) ? nivelesDisponibles : [];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {niveles.map((nivel) => {
                const nivelDisponible = nivelesDisponiblesArray.find(nd => nd.nivel.id === nivel.id);
                return (
                    <div
                        key={nivel.id}
                        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src={"/" + nivel.thumbnail.slice(8)}
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
                                    to={`/Creador/${nivel.creador}`}
                                    className="text-boton-naranja font-bold"
                                >
                                    {nivel.creador}
                                </Link>
                            </p>

                            <p className="text-gray-300">
                                Visitas: {" "}
                                <span className="text-boton-naranja">{nivel.views}</span>
                            </p>

                            <p className="text-gray-300">
                                Likes: {" "}
                                <span className="text-boton-naranja">{nivel.likes}</span>
                            </p>

                            <Link to={`/Nivel/${nivel.slug}`}>
                                <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                                    Ver en detalle
                                </Button>
                            </Link>

                            <Button 
                                onClick={() => handleNivelDisponible(nivel.id, nivel.title, nivelDisponible?.id)}
                                disabled={isLoading}
                                className={`mt-2 w-full text-white transition-colors duration-300 ${
                                    isLoading 
                                        ? 'bg-gray-500 cursor-not-allowed' 
                                        : nivelDisponible 
                                            ? 'bg-red-500 hover:bg-red-600' 
                                            : 'bg-blue-500 hover:bg-blue-600'
                                }`}
                            >
                                {isLoading 
                                    ? 'Procesando...' 
                                    : (nivelDisponible 
                                        ? "Quitar de mi lista" 
                                        : "Añadir a mi lista")
                                }
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListNiveles;