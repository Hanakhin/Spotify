import React, { Fragment } from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import spotify from '../body/icons/spotify.svg'

class Header extends React.Component {
    render() {
        return (

            <Fragment>

                <section className="Header">

                    <div className="TitleMoon">
                        <span className="container justify-content-between col-12 flex-wrap" style={{ display: 'flex',placeItems:'center'  }}> <span style={{display:'inline-flex'}}><img src={spotify} alt="icon spotify" width={'40px'} /> <h1>Spotify</h1></span>
                        <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="   Artiste , Titre" 
                        style={{ borderRadius: '10px', border: '0',height:'35px', minWidth:'15rem' }} />
                        </span>
                    </div>

                </section>


            </Fragment>
        )
    }
}

export default Header;