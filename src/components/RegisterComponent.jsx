import React, { Component } from "react";

export const RegisterComponent = () => (
  <div>
    {/* <div
      style={{
        backgroundColor: "#009688",
        width: "100%",
        color: "white",
        height: "30px",
        fontWeight: 600
      }}
    >
      <center>Cadastro</center>
    </div> */}
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="nome" className="bmd-label-floating">
              Nome Completo
            </label>
            <input type="text" className="form-control" id="nome" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="endereco" className="bmd-label-floating">
              Endereço
            </label>
            <input type="text" className="form-control" id="endereco" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="dtnasc" className="bmd-label-floating">
              Data Nascimento
            </label>
            <input type="text" className="form-control" id="dtnasc" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="telefone" className="bmd-label-floating">
              Telefone
            </label>
            <input type="text" className="form-control" id="telefone" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="veiculos" className="bmd-label-floating">
              Veículos Próprios
            </label>
            <input type="text" className="form-control" id="veiculos" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="seguro" className="bmd-label-floating">
              Seguro do Veículo
            </label>
            <input type="text" className="form-control" id="seguro" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="segurovida" className="bmd-label-floating">
              Seguro de Vida
            </label>
            <input type="text" className="form-control" id="segurovida" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="form-group">
            <label for="tpsangue" className="bmd-label-floating">
              Tipo Sanguíneo
            </label>
            <input type="text" className="form-control" id="tpsangue" />
          </div>
        </div>

        <div className="col-6">
          <div className="form-group">
            <label for="fator" className="bmd-label-floating">
              Fator
            </label>
            <input type="text" className="form-control" id="fator" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="alergia" className="bmd-label-floating">
              Alergias
            </label>
            <input type="text" className="form-control" id="alergia" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="doenca" className="bmd-label-floating">
              Doenças Crônicas
            </label>
            <input type="text" className="form-control" id="doenca" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <div className="form-group">
            <label for="contatos" className="bmd-label-floating">
              Contatos para Emergencia
            </label>
            <input type="text" className="form-control" id="contatos" />
          </div>
        </div>
      </div>

      <div style={{ height: "40px" }} />
    </div>

    <button
      className="btn btn-primary btn-raised"
      style={{
        position: "fixed",
        bottom: "-3px",
        right: "-3px",
        left: "-3px",
        width: "105%",
        height: "40px"
      }}
    >
      Registrar
    </button>
  </div>
);
