import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import cssCard from './card.css';
import nekfeu from '../Covers/nekfeu.jpg'
import damso from '../Covers/damso.jpg';
import freeze from '../Covers/freeze.jpg';
import nepal from '../Covers/nepal.jpg';
import nekfeu2 from '../Covers/nekfeu2.jpg';

const Card = (props) => {

    return (
        <div className="wrapper">
        <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={props.img} alt="Card image cap" 
            style={{padding:'20px' ,borderRadius: '30px'}}/>

                <div>
                    <h5 className="card-title text-center " style={{color:'white'}}>{props.name}</h5>
                    <p className="card-text text-center" style={{color:'var(--bs-gray)'}}>{props.text}</p>
                </div>
        </div>
</div>
    )
}

export default class Cards extends React.Component{
    render(props){
        return(
            <Fragment>
             <h1 className="text-start font-weight-bold container" style={{color:'white'}}>{this.props.text}</h1>
            <div className="col-12 d-flex flex-wrap justify-content-center p-4">
               
                        <Card
                            name={this.props.name1}
                            img={nekfeu}
                            text={this.props.text1}
                        />
                        <Card
                            name={this.props.name2}
                            img={damso}
                            text={this.props.text2}
                        />
                        <Card
                            name={this.props.name3}
                            img={nepal}
                            text={this.props.text3}
                        />
                        <Card
                            name={this.props.name4}
                            img={freeze}
                            text={this.props.text4}
                        />
                        <Card
                            name={this.props.name5}
                            img={nekfeu2}
                            text={this.props.text5}
                        />
                    </div>
                    </Fragment>
        )
    }
}


