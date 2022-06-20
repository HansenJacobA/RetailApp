import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export default function home() {
  return (
    <div className="container home">

      <div className="row">
        <h1> Retail Application </h1>
      </div>

      <br />

      <span>Explore clothing!</span>

      <br />
      <br />

      <div className="row">
        <Link to="/login">
          <button type="button" className="btn btn-dark btn-lg"> 🕵️ </button>
        </Link>
      </div>

    </div>
  );
}
