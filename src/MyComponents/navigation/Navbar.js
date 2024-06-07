import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo_letras_AR_Puzzle from '../../assets/img/LOGO_AR_PUZZLE_CON_LETRAS.png'
import { useLocation } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


const navigation = [
    { name: 'AR Puzzle', href: '/', current: true },
    { name: 'Comunidad', href: '/Comunidad', current: false },
    { name: 'Foro', href: '/Foro', current: false },
    { name: 'Descarga', href: '/Descarga', current: false },
    /* { name: 'Desarrollo Futuro', href: '/Desarrollo_Futuro', current: false }, */
    { name: 'Contacto', href: '/Contacto', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const location = useLocation(); // Hook para obtener la ubicación actual

    // Función para determinar si el enlace está activo
    function isCurrent(href) {
        if (href === "/Comunidad" &&
            (
                location.pathname === "/Comunidad" ||
                /^\/Creador\/.+/.test(location.pathname) ||
                /^\/Nivel\/.+/.test(location.pathname)
            )
        ) {
            return true;
        }
        else {
            return location.pathname === href;
        }
        /* return location.pathname === href; */
    }

    return (
        <Disclosure as="nav" className="bg-black-bg z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-6xl px-2 lg:px-6 xl:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                {/* Boton para abrir menú móvil */}
                                <Disclosure.Button
                                    className="relative inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-bg">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="/">
                                        <img
                                            className="h-12 w-auto"
                                            src={logo_letras_AR_Puzzle}
                                            alt="Your Company"
                                        />
                                    </a>
                                </div>
                                <div className="hidden lg:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            /* El que está recalcado cuando está el nav expandido */
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    isCurrent(item.href) ? 'bg-gray-900 font-semibold text-boton-naranja' : ' font-semibold text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium transition duration-300 ease-in-out'
                                                )}
                                                aria-current={isCurrent(item.href) ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">

                                {/* Menú dropdown del usuario */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <UserIcon className="h-6 w-6" aria-hidden="true" color="white" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        /* Perfil */
                                                        href="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Tu perfil
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        /* Cerrar sesión */
                                                        href="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-500')}
                                                    >
                                                        Cerrar sesión
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    {/* Menú móvil */}
                    <Transition
                        enter="duration-100 ease-out"
                        enterFrom="opacity-0 -translate-y-6"
                        enterTo="opacity-100 translate-y-0"
                        leave="duration-100 ease-out"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-6"
                    >
                        <Disclosure.Panel className="lg:hidden absolute w-full bg-black-bg">
                            {/* El close para poder llamarlo y cerrar el menú a voluntad */}
                            {({ close }) => (
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map((item) => (

                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                isCurrent(item.href) ? 'bg-gray-900 text-boton-naranja' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={isCurrent(item.href) ? 'page' : undefined}

                                            onClick={async () => {
                                                close()
                                            }}
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}

// Esto llamará a alguna variable de Redux que tengamos inicializada
const mapStateToProps = state => ({

})

// Si llamamos alguna función de redux el export se tiene que hacer así 
export default connect(mapStateToProps, {

})(Navbar)