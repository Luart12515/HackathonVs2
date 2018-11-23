import React, { Component } from 'react';
import './styles/App.css';
import './styles/img.css';
import './styles/letters.css';
import Navigation from './components/navigation'
import logoMDB from './img/Mongo-db-logo.png';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <br/>
              <h1 className="letterTitle letterLogo App">Tecnologias Aprendidas y usadas</h1>
            </div>
            <div className="col-sm-12">          
              <div className="card-deck">
                
                <div class="card">
                  <img src={logo} className="card-img-top App-logo cards3" alt="logo" alt="Card image cap" />                   
                    <div class="card-body ">
                      <h5 class="card-title">React</h5>
                      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
                
                <div className="card">
                  <img src={logoMDB} className="card-img-top cards3" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">MongoDB</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>                    
                  </div>
                </div>

                
                <div className="card">
                  <img className="card-img-top" src="./img/Mongo-db-logo.png" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card-deck">

                <div className="card">
                  <img src={logoMDB} className="card-img-top" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">MongoDB</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Persona acargo: Azael </small></p>
                    <p className="card-text"><small className="text-muted">Couch: [Pendiente] </small></p>
                    
                  </div>
                </div>

                <div class="card">
                  <img class="card-img-top" src=".../100px200/" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                
                <div className="card">
                  <img className="card-img-top" src="./img/Mongo-db-logo.png" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div>
    );
  }
}
export default App;