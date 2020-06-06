// Components
import Header from "./Header"
// Material UI
import Container  from "@material-ui/core/Container"

const Layout = ({children, home}) => {
    return (
        <Container maxWidth="md" style={{direction: 'rtl', paddingTop: 5, paddingBottom: 5}} >
            <Header home={home} />
            {children}
        </Container> 
    )
}

export default Layout