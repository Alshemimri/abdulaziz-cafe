import React from 'react'
import { Container } from "@material-ui/core"
import Header from "./Header"
import CssBaseline from '@material-ui/core/CssBaseline';



const Layout = ({children, home}) => {
    



    return (
       
        <Container maxWidth="md" style={{direction: 'rtl'}}>
            
            <Header home={home} />
            {children}
            {/* <Footer /> */}
           
        </Container>
     
    )
}


export default Layout