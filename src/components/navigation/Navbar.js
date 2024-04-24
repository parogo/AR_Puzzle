import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import logo_letras_AR_Puzzle from 'assets/img/LOGO_AR_PUZZLE_CON_LETRAS.png'

function Navbar(){
    return (
        <nav className='w-full py-2 shadow-md fixed'>
            <div className="bg-white px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px:2">
                <div className="ml-4 mt-2">
                    {/* LOGO */}
                    <img src={logo_letras_AR_Puzzle} width={350} height={120} className=""></img>
                </div>
                    {/* Enlaces menú superior */}
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <Link to='/AR_Puzzle' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-2">AR Puzzle</Link>
                    <Link to='/Comunidad'className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-2">Comunidad</Link>
                    <Link to='/RoadMap'className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-2">Desarrollo Futuro</Link>
                    <Link to='/Foro'className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-2">Foro</Link>
                    <Link to='/Contacto'className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-2">Contacto</Link>
                    <Link to='/Register'className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:underline hover:underline-offset-2">Registrarse</Link>

                    <button
                        type="button"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-boton-naranja px-6 py-2 text-l font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </div>
            </div>
        </nav>
       
    )
}

// Esto llamará a alguna variable de Redux que tengamos inicializada
const mapStateToProps = state => ({

})

// Si llamamos alguna función de redux el export se tiene que hacer así 
export default connect(mapStateToProps, {

}) (Navbar)