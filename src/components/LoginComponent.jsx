import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LoginComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col">
            <center>
              <img height={120} width={120} src="/logo.png" />
            </center>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="form-group">
              <label for="emailInput" className="bmd-label-floating">
                E-mail
              </label>
              <input type="email" className="form-control" id="emailInput" />
            </div>

            <div className="form-group">
              <label for="senhaInput" className="bmd-label-floating">
                Senha
              </label>
              <input type="password" className="form-control" id="senhaInput" />
            </div>

            <div className="row" style={{ marginTop: 40 }}>
              <div className="col">
                <Link
                  to="/start"
                  className="btn btn-primary btn-raised"
                  style={{ width: "100%" }}
                >
                  Entrar
                </Link>
              </div>
            </div>

            <div
              className="row justify-content-center"
              style={{ marginTop: 15 }}
            >
              <div className="col">
                <Link to="/register">
                  <center>Cadastre-se</center>
                </Link>
              </div>
            </div>

            {/* <div
              className="row justify-content-center"
              style={{ marginTop: 60 }}
            >
              <div className="col">
                <Link to="/dpvat">
                  <center>Orientações sobre Seguro DPVAT</center>
                </Link>
              </div>
            </div>

            <div
              className="row justify-content-center"
              style={{ marginTop: 15 }}
            >
              <div className="col">
                <Link to="/juridico">
                  <center>Orientações sobre Ações Judiciais</center>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(LoginComponent);
