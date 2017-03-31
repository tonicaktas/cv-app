import React, { Component } from 'react';

class Info extends Component {
  constructor(){
    super();
    this.state = {
      // namn:'default',
      larare:[]
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);

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
      <form onSubmit={this.handleQuestionSubmit.bind(this)}>

        <div className="row">
          <div className="col-sm-12">
                  <p className="col-sm-12">
                      <input type="text"
                             name="namn"
                             value={this.state.namn}
                             onChange={this.handleQuestionChange} />Namn<br /></p>
                  <p className="col-sm-12">
                     <input type="number"
                            name="född"
                            inputMode="numeric"
                            value={this.state.född}
                            onChange={this.handleQuestionChange} />Född<br /></p>
                    <p className="col-sm-12">
                    <input type="text"
                           name="adress"
                           value={this.state.adress}
                           onChange={this.handleQuestionChange} />Adress<br /></p>
                    <p className="col-sm-12">
                    <input type="text"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleQuestionChange} />Email<br /></p>
                    <p className="col-sm-12">
                    <input type="number"
                           name="mobil"
                           inputMode="numeric"
                           value={this.state.mobil}
                           onChange={this.handleQuestionChange} />Mobil<br />

                  </p>
                  <button type="submit" value="Submit" className="btn btn-block">Skapa</button>


            </div>
          </div>
          </form>

    );
  }
}

export default Info;
