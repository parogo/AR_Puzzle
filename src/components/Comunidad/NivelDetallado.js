import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { connect } from "react-redux";
import { 
    get_lista_niveles_disponibles, 
    create_nivel_disponible, 
    delete_nivel_disponible 
} from "../../redux/actions/nivelesDisponibles/nivelesDisponibles";

function NivelDetallado({ 
    niveles, 
    error1, 
    error2,
    user,
    nivelesDisponibles,
    get_lista_niveles_disponibles,
    create_nivel_disponible,
    delete_nivel_disponible
}) {

    const [nivelDisponibleId, setNivelDisponibleId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user?.username) {
            get_lista_niveles_disponibles(user.username);
        }
    }, [user, get_lista_niveles_disponibles]);

    const updateNivelDisponibleId = useCallback(() => {
        if (Array.isArray(nivelesDisponibles) && niveles) {
            const nivelEncontrado = nivelesDisponibles.find(nivelDisp => nivelDisp.nivel.id === niveles.id);
            setNivelDisponibleId(nivelEncontrado?.id || null);
        } else {
            setNivelDisponibleId(null);
        }
    }, [nivelesDisponibles, niveles]);

    useEffect(() => {
        updateNivelDisponibleId();
        //console.log(nivelesDisponibles);
        //console.log(niveles);
    }, [updateNivelDisponibleId]);

    const handleNivelDisponible = async () => {
        setIsLoading(true);
        try {
            if (nivelDisponibleId) {
                await delete_nivel_disponible(nivelDisponibleId);
                setNivelDisponibleId(null);
            } else if (niveles?.id) {
                const result = await create_nivel_disponible(user.username, niveles.title);
                if (result && result.id) {
                    setNivelDisponibleId(result.id);
                }
            }
            // Actualizar la lista de niveles disponibles después de la acción
            await get_lista_niveles_disponibles(user.username);
        } catch (error) {
            console.error("Error al manejar nivel disponible:", error);
        } finally {
            setIsLoading(false);
        }
    };

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
            <div
                key={niveles.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
                <img
                    src={"/" + niveles.thumbnail.slice(8)}
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
                    {niveles.title}
                </h3>

                    <p className="text-gray-300">
                        De{" "}
                        <Link
                            to={`/Creador/${niveles.creador}`}
                            className="text-boton-naranja font-bold"
                        >
                            {" "}
                            {niveles.creador}
                        </Link>
                    </p>

                    <p className="text-gray-300">
                        Visitas: {" "}
                        <span className="text-boton-naranja">{niveles.views}</span>
                    </p>

                    <p className="text-gray-300">
                        Likes: {" "}
                        <span className="text-boton-naranja">{niveles.likes}</span>
                    </p>

                    <Button 
                        onClick={handleNivelDisponible}
                        disabled={isLoading}
                        className={`mt-2 w-full text-white transition-colors duration-300 ${
                            isLoading 
                                ? 'bg-gray-500 cursor-not-allowed' 
                                : nivelDisponibleId 
                                    ? 'bg-red-500 hover:bg-red-600' 
                                    : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                    >
                        {isLoading 
                            ? 'Procesando...' 
                            : (nivelDisponibleId 
                                ? "Quitar de mi lista" 
                                : "Añadir a mi lista")
                        }
                    </Button>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    user: state.auth.user,
    nivelesDisponibles: state.nivelesDisponibles.lista_niveles_disponibles
});

export default connect(mapStateToProps, {
    get_lista_niveles_disponibles,
    create_nivel_disponible,
    delete_nivel_disponible
})(NivelDetallado);