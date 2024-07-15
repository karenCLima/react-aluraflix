import Footer from '../../componentes/Footer';
import NavBar from '../../componentes/NavBar'
import { Outlet } from "react-router-dom";

const InitialPage = ()=>{
    return(
        <main>
            <NavBar/>
            <>
                <Outlet/>
            </>
            <Footer/>
        </main>
    )
}

export default InitialPage