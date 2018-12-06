import React from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const StartComponent = () => (
  <div>
    <div style={{ height: "100vh", width: "100%", padding: 0, margin: 0 }}>
      <GoogleMapReact
        defaultCenter={{ lat: -23.59, lng: -46.67 }}
        defaultZoom={16}
      >
        <AnyReactComponent
          lat={-23.5984764}
          lng={-46.6788539}
          text={"INSPER"}
        />
      </GoogleMapReact>
    </div>

    <div style={{ position: "fixed", bottom: "18px", left: "40%" }}>
      <Link to="/report" className="btn btn-danger bmd-btn-fab">
        <i
          className="material-icons align-self-center"
          style={{ marginTop: 16 }}
        >
          grade
        </i>
      </Link>
    </div>
  </div>
);
