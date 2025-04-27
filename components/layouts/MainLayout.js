export default function MainLayout(props){
    return(<>
    <header>This is the header</header>
    <main>{props.children}</main>
    <footer>This is the footer</footer>
    </>)
}