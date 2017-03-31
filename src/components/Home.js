import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="main-content home">
      <div className="container home-home">
        <h2>Examensarbete</h2>
        <p>En webbaplikation som underlättar att skapa en enkel cv.</p>



        <p>Man kan skapa och ändra CV så mycket och ofta du vill. Informationen
        som du fyller i skickas till googles databas som heter firebase.
        Det är som ett Word dokument fast mycket mer kraftfullt och smidigt.
        Allt uppdateras automatiskt. Man behöver bara fokusera på innehållet.

        Det första man gör är att man går in på fliken "preview" och se hur
        strukturen på cv mallen är uppbyggd. Och vilken data som är skriven i databasen.
        Vill man skriva ny innehåll klickar man på fliken "edit". Där hittar man en formulär
        som är enkel att fylla i och skicka till databasen.

        För att se på färdig produkt så går man in på "print". Man kan spara cv eller
        skriva ut den.</p>

        <h2>För att bygga denna projekt använde jag:</h2>
        <ul>
        <li>React.js</li>
        <li>Firebase</li>
        <li>D3.js</li>
        <li>React Router</li>
        <li>Bootstrap</li>
        <li>Auth0Lock</li>
        <li>Webpack</li>

        </ul>


        <h2>Mallen</h2>

        <p>Efter undersökning utav olika bemaningsföretag som Manpower,
         Speed, Unflex, Adecco så har jag kommit fram till vilken mall de själva
         oftast får in och vilka cv-mallar de använder för att rekrytera ny arbetskraft.
         <br />
         <br />

         </p>
         <h4>För att använda applikationen måste du logga in med google eller yahoo.</h4>

        </div>


      </div>
    );
  }
}

export default Home;
