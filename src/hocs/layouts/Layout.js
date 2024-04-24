import { connect } from "react-redux"

function Layout({children}) {
    return (
        <div>
            {children}
        </div>
       
    )
}

// Esto llamará a alguna variable de Redux que tengamos inicializada
const mapStateToProps = state => ({

})

// Si llamamos alguna función de redux el export se tiene que hacer así 
export default connect(mapStateToProps, {

}) (Layout)