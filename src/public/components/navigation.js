import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/index.css';
import '../styles/letters.css'

class Navigation extends Component{
    render(){
        return(          
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                <a className="navbar-brand letterLogo" href="#">Domadores de Tormentas </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarsExample06">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../CV.js">Conocenos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../CV.js">Empresas asociadas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Becarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Equipo de trabajo</a>
                    </li>
                    </ul>
                </div>
            </nav>
           
        )
    }
}
export default Navigation;
