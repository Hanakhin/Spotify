import React, { Fragment } from "react";
import'./page.css'
import Header from "../components/header/header";
import Body from "../components/body/body";
import Footer from "../components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

class Page extends React.Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Body />
                <Footer />
            </Fragment>
        )
    }
}


export default Page;