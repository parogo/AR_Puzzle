import { connect } from "react-redux"

function Layout({children}) {
    return (
        <div className="relative min-h-screen bg-black bg-dot-white/[0.2]">
            {/* Pseudo-element to add the radial gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-black" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)' }}></div>
            </div>
            
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

// Esto llamará a alguna variable de Redux que tengamos inicializada
const mapStateToProps = state => ({

})

// Si llamamos alguna función de redux el export se tiene que hacer así 
export default connect(mapStateToProps, {

}) (Layout)