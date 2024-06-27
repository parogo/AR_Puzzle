import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

function SearchNavBar() {

    const location = useLocation();
    const navigate = useNavigate();
    // Para el buscador
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/Comunidad/" + term), 0.2);
        setTerm("");
    };
    const handleRefresh = (e) => {
        e.preventDefault(); // Evitar la navegación por defecto de React Router
        window.location.href = "/Comunidad"; // Forzar la navegación y recarga completa de la página
    };

    return (
        <div className="relative mx-auto lg:max-w-screen-lg pt-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <Link to={`/Comunidad`} onClick={handleRefresh}>
                        <Button
                            className={`${location.pathname.toLowerCase() === "/comunidad"
                                ?
                                "text-boton-naranja"
                                : "text-gray-200"
                                } py-2 px-4 bg-gray-900 hover:bg-gray-700 rounded-md justify-center`}
                        >
                            Todos los niveles
                        </Button>
                    </Link>
                </div>

                <form onSubmit={(e) => onSubmit(e)} className="relative col-span-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex justify-center items-center pl-3">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUlJREFUSEu1lYsNAUEQhkclqASVoBJUgkpQCZ1wXzJ/MtjZPXK3iezZx3z/PG5uYiOPycj2rQaYmdnazJb+e3Tz1cyYzz439WWAXXdzX7kN5GRmhxahBLi4Yu4CublyPMKbaYDj0aoG+QRsOgNHd3/rhkv3gSGEGRGpJxHA4btbQxXqWCNcKCcsDMA8swaE51RMBCjuxJYLjCwXczeMt3idehEBOoxxIBoYkHp5I4PyIs1FBBAeQiJ1pdjLIHvcVVgRwL2v8SugZOPpi8WSj4sqTyW4VeLsq+pi3t7utZLcgihvvQClMq0BYj7SvP37okXjvV80qZXb/Md1tQr+4+XC617nqSDyplJOcxA3Ws2OsygnyUBTSKtdEwoUMzPUstV7Yk8qQob44FQhQwCUG3XXt1YzFEAQQhn7WPWT2XrJeu0P6UERODrgBZ5/VhnZJN56AAAAAElFTkSuQmCC" alt="" />
                    </div>
                    <input
                        id="search"
                        name="search"
                        value={term}
                        onChange={(e) => handleChange(e)}
                        type="search"
                        className={`
                py-2.5 pl-10 pr-3
                block w-full h-full rounded-md
                border border-gray-800
                focus:border-gray-800 focus:ring-gray-800
                placeholder-gray-700 focus:placeholder-gray700
              `}
                    />
                </form>
            </div>
        </div>
    )
}

export default SearchNavBar;