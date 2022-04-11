import React, { Fragment } from "react";
import './body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./cards/cards";

class Body extends React.Component {
    render() {
        return (
            <Fragment>

                <section className="Body">
            <Cards 
            name1='Nekfeu' name2='Damso'name3='Nepal'name4='Freeze C.'name5='Nekfeu'
            text1='Cyborg' text2='Epseité'text3='444 Nuits' 
            text4='Blue' text5='Sombre désirs'
            text="Les albums de la semaine"
            />
            <Cards 
            name1='Nekfeu'name2='Damso'name3='Nepal'name4='Freeze C.'name5='Nekfeu'
            text1='Humanoide' text2='Macarena' text3='444 Nuits' 
            text4='Freeze räel' text5='Energie sombre'
            text="Les titres de la semaine"
            />
                </section>

            </Fragment>
        )
    }
}

export default Body;