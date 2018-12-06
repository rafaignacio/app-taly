import React, { PureComponent } from "react";

export const ReportComponent = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <label>Acidente com vítima?</label>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label className="radio-inline">
          <input type="radio" name="vitima" id="inlineRadio1" value="option1" />{" "}
          Sim
        </label>
      </div>
      <div className="col">
        <label className="radio-inline">
          <input type="radio" name="vitima" id="inlineRadio2" value="option2" />{" "}
          Não
        </label>
      </div>
    </div>

    <div className="row" style={{ paddingTop: 18 }}>
      <div className="col">
        <div className="switch">
          <label>
            Acionar Polícia Militar
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>

    <div className="row" style={{ paddingTop: 18 }}>
      <div className="col">
        <div className="switch">
          <label>
            Acionar Corpo de Bombeiros
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>

    <div className="row" style={{ paddingTop: 18 }}>
      <div className="col">
        <div className="switch">
          <label>
            Enviar mensagem para contatos de emergência
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>

    <div className="row" style={{ paddingTop: 18 }}>
      <div className="col">
        <div className="switch">
          <label>
            Registrar Boletim de Ocorrência
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>

    <div className="row" style={{ paddingTop: 18 }}>
      <div className="col">
        <label>Gravidade das lesões</label>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label className="radio-inline" style={{ color: "green" }}>
          <input
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />{" "}
          Leve
        </label>
      </div>
      <div className="col">
        <label className="radio-inline" style={{ color: "orange" }}>
          <input
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />{" "}
          Média
        </label>
      </div>
      <div className="col">
        <label className="radio-inline" style={{ color: "red" }}>
          <input
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />{" "}
          Grave
        </label>
      </div>
    </div>

    <div className="row" style={{ paddingTop: 18 }}>
      <div className="col">
        <button
          type="button"
          className="btn btn-raised btn-warning"
          style={{ width: "100%" }}
        >
          Acionar Seguro
        </button>
      </div>
    </div>

    <div className="row" style={{ paddingTop: 18 }}>
      <div className="col">
        <button
          type="button"
          className="btn btn-raised btn-info"
          style={{ width: "100%" }}
        >
          Anexar Fotos/Videos
        </button>
      </div>
    </div>

    <div className="row" style={{ paddingTop: 18 }}>
      <div className="col">
        <button
          type="button"
          className="btn btn-raised btn-primary"
          style={{ width: "100%" }}
        >
          Enviar Solicitação
        </button>
      </div>
    </div>
  </div>
);
