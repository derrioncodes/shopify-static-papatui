import Header1 from "../Header/Header1/Header1"
import Footer from "../Footer/Footer"

export default function MainLayout(props){
    return(<>
    <Header1/>
    <main>{props.children}</main>
    <Footer/>
    </>)
}