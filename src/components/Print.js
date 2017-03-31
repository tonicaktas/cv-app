import React, {Component} from 'react';
import firebase from 'firebase';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); // ES5 with npm
// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.j



import Info from './Larare/Info';


class Print extends Component {

  constructor(props){
    super(props);

          this.state = {

      larare:[]
    }



  }




  componentDidMount(){


    const rootRef = firebase.database().ref().child('cv');

    const domanRef = rootRef.child('larare');

    domanRef.on('value',snap => {

      this.setState({
        larare:snap.val()
      });

    });

  }



  render() {
    return (
      <div className="main-content">



        <div className="info-print">
          <h2>Personuppgifter</h2>
          <p>Namn: {this.state.larare.namn}</p>
          <p>Född: {this.state.larare.född}</p>
          <p>Adress: {this.state.larare.adress}</p>
          <p>Email: {this.state.larare.email}</p>
          <p>Mobil: {this.state.larare.mobil}</p>



        </div> {/* info */}

        <div className="utbildning-print">
            <h2>Utbildning</h2>
            <ul>

            <li>{this.state.larare.gymnasium}</li>

            <li>{this.state.larare.eftergymnasium1}</li>

            <li>{this.state.larare.eftergymnasium2}</li>
            </ul>





        </div> {/* utbildning */}

        <div className="erfarenhet-print">
              <h2>Arbetserfarenhet</h2>
              <p><strong>{this.state.larare.från1}</strong>-<strong>{this.state.larare.till1}</strong></p>
              <p>{this.state.larare.arbetserfarenhet1}</p>

              <p><strong>{this.state.larare.från2}</strong>-<strong>{this.state.larare.till2}</strong></p>
               <p>{this.state.larare.arbetserfarenhet2}</p>

        </div> {/* erfarenhet */}

        <div className="sprak-start">
            <h2>Språkkunskaper</h2>
            <p>{this.state.larare.språk1}</p>
            <p>{this.state.larare.språk2}</p>
            <p>{this.state.larare.språk3}</p>

        </div>{/* språk */}

      </div>

    );
  }
}

export default Print;
