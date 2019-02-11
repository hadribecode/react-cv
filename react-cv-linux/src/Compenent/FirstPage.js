import React, { Component, Fragment } from 'react';
import Slide from './slide';

//création de l'objet H2
export default class FirstPage extends Component {
    constructor(props) {
        // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
        super(props);
        // On définit le state de notre component que l'on hérite de la classe "Component"
        // Cela remplace la fonction "getInitialState"
        this.state = {
            FirstPageAnimation : "",
            Animation : "",
            id : "nope"
        };
    }
    //Animations de la page d'acceuil
    FirstPageOpening = () =>{
        this.setState({
            FirstPageAnimation : "opening"
        })
    }
    FirstPageClosing = () =>{
        this.setState({
            FirstPageAnimation : "closing"
        })
    }
    //Animation des slides
    up = () => {
        this.setState({
            Animation : "up",
        })
      }

    down = () => {
        this.setState({
            Animation : "down"
        })
    }
    //the id
    id = (e) => {
        this.setState({
            id : e
        })      
    }
    
    render() {
        //FirstPageAnimation
        let FirstPage = "FirstPage "
        if(this.state.FirstPageAnimation == "opening"){
            FirstPage = "FirstPage opening"
        }
        else if (this.state.FirstPageAnimation == "closing"){
            FirstPage = "FirstPage closing"
        }
        //slideAnimation

        let slideClass ="slide"
        if(this.state.Animation == "up"){
            slideClass = "slide up"
        }
        else if (this.state.Animation == "down"){
            slideClass = "slide down"
        }
        return (
            <Fragment>
            <div className={ FirstPage }>
                <h1>
                    { this.props.h1 /*h1 */ }
                </h1>
                <h2>
                    id = { this.state.id } et slideClass = { slideClass }
                </h2>
                <h2>
                    { this.props.h2 /*Mise en place d'un props qui h2 qui contiendra ce qu'on désire */ }
                </h2>
                <div className="button">
                    <button onClick={ () => { this.FirstPageOpening(); this.up(); this.id(1) } }>Start1</button>
                    <button onClick={ () => { this.FirstPageOpening(); this.up(); this.id(2) } }>Start2</button>
                    <button onClick={ () => { this.FirstPageOpening(); this.up(); this.id(3) /*Cette methode me permet de récupérer un "id" me permettant par la suite d'activer le slide correspondant */ } }>Start3</button>
                </div>
                <p></p>
            </div>
            <Slide ClassName={ this.state.id=="1"?slideClass:"" /* La récupération de l'id me permet de choisir lequelle des slides doit être activer */} onClick={ () => { this.FirstPageClosing(); this.down()} } h2="hello billy1" />
            <Slide ClassName={ this.state.id=="2"?slideClass:"" } onClick={ () => { this.FirstPageClosing(); this.down() } } h2="hello billy2" />
            <Slide ClassName={ this.state.id=="3"?slideClass:"" } onClick={ () => { this.FirstPageClosing(); this.down() } } h2="hello billy3" />
            </Fragment>
        );
    }
}