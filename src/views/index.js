import React, { Component } from 'react';
import './styles/App.css';
import Navigation from './components/navigation'


class App extends Component {
  constructor(props) {
    super(props);
      this.state = ({
        nombre:'',
        edad:'',
        user:'',
        email:'',
        tel:'',
        password:'',
        password2:''
      })

      this.startSession = this.startSession.bind(this);
      this.procesar = this.procesar.bind(this);
      this.cambioNombre = this.cambioNombre.bind(this);
      this.cambioEdad = this.cambioEdad.bind(this);    
      this.userView = this.userView.bind(this);
      this.emailView = this.emailView.bind(this);
      this.telView = this.telView.bind(this);
      this.passwordView = this.passwordView.bind(this);
      this.password2View = this.password2View.bind(this);    
    }

  render() {
    return (
      <div className="App">
       <Navigation/>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <br/>
              <h1 className="letterTitle letterLogo App">Bienvenido "Version actualizada"</h1>
            </div>
            <div className="col-sm-8">
              <img src="https://cdns3.eltiempo.es/eltiempo/blog/noticias/2014/02/tormenta.jpg" width="100%" height="80%" />
            </div>

            <div className="col-sm-4">
              <form onSubmit={this.startSession}>
                <div className="card mt-4 recuadro bordes styleBox">
                  <div className="card-header">
                    <h3> Iniciar Sesión </h3>
                  </div>
                  <div className="card-body">  
                    <input className="form-control" type="text" value={this.state.nombre} onChange={this.cambioNombre} placeholder="Correo o Usuario" required/>
                    <br></br>
                    <input className="form-control" type="password" value={this.state.edad} onChange={this.cambioEdad} placeholder="Contraseña" required/>
                    <br></br>
                    <p><input className="btn btn-lg btn-primary btn-block" type="submit" /></p> 
                  </div>
                </div>
                </form>
                <br></br>         
                <button type="button" className="btn btn-danger btn-lg" data-toggle="modal" data-target="#modalregistry">Registrate</button>
            </div>

            {/* Imagenes de los patrocinadores */}

            <div className="col-sm ">
              <img className="styleBox" src="https://cdns3.eltiempo.es/eltiempo/blog/noticias/2014/02/tormenta.jpg" width="100%" height="80%" />
            </div>
            <div className="col-sm">
              <img className="styleBox" src="https://cdns3.eltiempo.es/eltiempo/blog/noticias/2014/02/tormenta.jpg" width="100%" height="80%" />
              </div>
            <div className="col-sm">
              <img className="styleBox" src="https://cdns3.eltiempo.es/eltiempo/blog/noticias/2014/02/tormenta.jpg" width="100%" height="80%" />
            </div>
            <div className="col-sm">
              <img className="styleBox" src="https://cdns3.eltiempo.es/eltiempo/blog/noticias/2014/02/tormenta.jpg" width="100%" height="80%" />
            </div>
            
            {/* configuracion del modal */}
            <div className="modal" id="modalregistry">
              <form onSubmit={this.procesar}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title "> Crea tu propia cuenta</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>                  
                    <div className="modal-body">
                      <input className="form-control" type="text" value={this.state.user} onChange={this.userView} placeholder="Nombre Completo" required/>
                      <br></br>
                      <input className="form-control" type="email" value={this.state.email} onChange={this.emailView} placeholder="Correo electronico" required />
                      <br></br>
                      <input className="form-control" type="text" value={this.state.tel} onChange={this.telView} placeholder="Telefono" required/>
                      <br></br>
                      <input className="form-control" type="password" value={this.state.password} onChange={this.passwordView} placeholder="contraseña" required/>
                      <br></br>
                      <input className="form-control" type="password" value={this.state.password2} onChange={this.password2View} placeholder="Confirmar contraseña" required />
                      <br></br>
                    </div>
                    <div className="modal-footer">
                      <p><input className="btn btn-lg btn-primary btn-block" type="submit" /></p>  
                      <button type="button" class="btn btn-danger" data-dismiss="modal" >Cancelar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>         
          </div>
        </div>
      </div>  
    );
  }
  startSession(e) {
    e.preventDefault();
    alert('Usuario:'+this.state.nombre + ' Contraseña: '+ 
                         +this.state.edad);
  }
  procesar(e) {
    e.preventDefault();
    alert('Dato cargados// Usuario:'+this.state.user + ' Email: '+ 
                         +this.state.email+' Telefono: '+ this.state.tel + ' password: ' +this.state.password + ' password2: '+this.state.password2);
  }
  cambioNombre(e) {
    this.setState( {
      nombre: e.target.value
    })
  
}
cambioEdad(e) {
  this.setState( {
    edad: e.target.value
  })
}
  userView(e) {
    this.setState( {
      user: e.target.value
    })
  
  }
  emailView(e) {
    this.setState( {
      email: e.target.value
    })
  }
  telView(e) {
    this.setState( {
      tel: e.target.value
    })
  }
  passwordView(e) {
    this.setState( {
      password: e.target.value
    })
  }  
  password2View(e) {
    this.setState( {
      password2: e.target.value
    })
  } 
}
export default App;