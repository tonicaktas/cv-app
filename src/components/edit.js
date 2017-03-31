import React, {Component} from 'react';
import firebase from 'firebase';
import Bootstrap from 'react-bootstrap';

import Info from './Larare/Info';







class Edit extends Component {

  constructor(props){
    super(props);
     this.state = {
      larare:[]
                      }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
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






  handleQuestionChange(event){
    var larare = this.state.larare;

    if(event.target.name === 'namn'){
      larare.namn = event.target.value;

    } else if(event.target.name === 'född'){
      larare.född = event.target.value;


    } else if(event.target.name === 'adress'){
      larare.adress = event.target.value;

    } else if(event.target.name === 'email'){
      larare.email = event.target.value;

    } else if(event.target.name === 'mobil'){
      larare.mobil = event.target.value;

    } else if(event.target.name === 'gymnasium'){
      larare.gymnasium = event.target.value;

    } else if(event.target.name === 'eftergymnasium1'){
      larare.eftergymnasium1 = event.target.value;

    } else if(event.target.name === 'eftergymnasium2'){
      larare.eftergymnasium2 = event.target.value;

    } else if(event.target.name === 'från1'){
      larare.från1 = event.target.value;

    } else if(event.target.name === 'till1'){
      larare.till1 = event.target.value;

    } else if(event.target.name === 'arbetserfarenhet1'){
      larare.arbetserfarenhet1 = event.target.value;

    } else if(event.target.name === 'från2'){
      larare.från2 = event.target.value;

    } else if(event.target.name === 'till2'){
      larare.till2 = event.target.value;

    } else if(event.target.name === 'arbetserfarenhet2'){
      larare.arbetserfarenhet2 = event.target.value;

    } else if(event.target.name === 'språk1'){
      larare.språk1 = event.target.value;

    } else if(event.target.name === 'språk2'){
      larare.språk2 = event.target.value;

    } else if(event.target.name === 'språk3'){
      larare.språk3 = event.target.value;

    }

      this.setState({larare:larare},function(){
      console.log(this.state);
    });
  }

  handleQuestionSubmit(event){
    firebase.database().ref('/cv').set({

      larare:this.state.larare
    });

    this.setState({submitted:true}, function(){
      console.log('Questions Submitted...');
    });
    event.preventDefault();
  }



  render() {
    return (
      <div className="main-content">



              <form onSubmit={this.handleQuestionSubmit.bind(this)}>

              <div className=" col-sm-3 info"><h2>Info</h2>
                    <p className="col-sm-2">
                        <input type="text"
                               name="namn"
                               value={this.state.larare.namn}
                               onChange={this.handleQuestionChange} /><span className="label">Namn</span><br />
                               </p>
                    <p className="col-sm-2">
                       <input type="number"
                              name="född"
                              inputMode="numeric"
                              value={this.state.larare.född}
                              onChange={this.handleQuestionChange} /><span className="label">Född</span><br />
                              </p>
                      <p className="col-sm-2">
                       <input type="text"
                             name="adress"
                             value={this.state.larare.adress}
                             onChange={this.handleQuestionChange} /><span className="label">Adress</span><br />
                             </p>
                      <p className="col-sm-2">
                       <input type="text"
                            name="email"
                            value={this.state.larare.email}
                            onChange={this.handleQuestionChange} /><span className="label">Email</span><br />
                            </p>
                      <p className="col-sm-2">
                      <input type="number"
                             name="mobil"
                             inputMode="numeric"
                             value={this.state.larare.mobil}
                             onChange={this.handleQuestionChange} /><span className="label">Mobil</span><br />

                    </p>
                    </div>{/* end info */}






                    <div className=" col-sm-3 utbildning"><h2>Utbildning</h2>
                    <p className="col-sm-12">
                        <input type="text"
                        name="gymnasium"
                        value={this.state.larare.gymnasium}
                        onChange={this.handleQuestionChange} /><span className="label">Gymnasium</span><br /></p>
                    <p className="col-sm-12">
                        <input type="text"
                        name="eftergymnasium1"
                        value={this.state.larare.eftergymnasium1}
                        onChange={this.handleQuestionChange} /><span className="label">Eftergymnasium </span><br /></p>
                    <p className="col-sm-12">
                        <input type="text"
                        name="eftergymnasium2"
                        value={this.state.larare.eftergymnasium2}
                        onChange={this.handleQuestionChange} /><span className="label">Eftergymnasium</span><br /></p>
                    </div>{/* end utbildning */}


              <div className=" col-sm-3 erfarenhet">
                <h2>Erfarenhet</h2><br />
                  <div className="erfaren-1">
                    <p className="col-sm-12 fran-till" >
                          <input type="number"
                           name="från1"
                           inputMode="numeric"
                           value={this.state.larare.från1}
                           onChange={this.handleQuestionChange} /><span className="label">Från</span><br />

                    </p>
                    <p className="col-sm-12 fran-till">
                          <input type="number"
                           name="till1"
                           inputMode="numeric"
                           value={this.state.larare.till1}
                           onChange={this.handleQuestionChange} /><span className="label">Till</span><br />

                    </p>

                    <p className="col-sm-12 ">
                    <span className="label"> Arbetserfarenhet </span><br />
                          <textarea type="text"
                            name="arbetserfarenhet1"
                            value={this.state.larare.arbetserfarenhet1}
                            onChange={this.handleQuestionChange} /></p>
                </div>{/*end erfaren-1*/}

                <div className="erfaren-2">
                    <p className="col-sm-12 fran-till">
                          <input type="number"
                           name="från2"
                           inputMode="numeric"
                           value={this.state.larare.från2}
                           onChange={this.handleQuestionChange} /><span className="label">Från</span><br />

                    </p>
                    <p className="col-sm-12 fran-till">
                          <input type="number"
                           name="till2"
                           inputMode="numeric"
                           value={this.state.larare.till2}
                           onChange={this.handleQuestionChange} /><span className="label">Till</span><br />

                    </p>

                    <p className="col-sm-12">
                    <span className="label"> Arbetserfarenhet </span><br />
                      <textarea type="text"
                            name="arbetserfarenhet2"
                            value={this.state.larare.arbetserfarenhet2}
                            onChange={this.handleQuestionChange} /></p>

                  </div>{/* end erfaren-2 */}

              </div>{/* end erfarenhet */}


                    <div className=" col-sm-3 sprak">  <h2>Språkkunskaper</h2>

                    <p className="col-sm-12">
                    <input type="text"
                           name="språk1"
                           value={this.state.larare.språk1}
                           onChange={this.handleQuestionChange} /><span className="label">Modersmål</span><br />

                    </p>

                    <p className="col-sm-12">
                    <input type="text"
                           name="språk2"
                           value={this.state.larare.språk2}
                           onChange={this.handleQuestionChange} /><span className="label">Flytande</span><br />

                    </p>

                    <p className="col-sm-12">
                    <input type="text"
                           name="språk3"
                           value={this.state.larare.språk3}
                           onChange={this.handleQuestionChange} /><span className="label">Grundläggande</span><br />

                    </p>
                    </div> {/* end språk */}

                    <button  type="submit" value="Submit" className="btn btn-block">Skapa</button>

                    </form>




      </div>

    );
  }
}

export default Edit;
