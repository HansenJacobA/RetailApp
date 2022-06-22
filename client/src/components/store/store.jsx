import React from 'react';
import './store.scss';
import Overview from '../overview/overview';
import Questions from '../questions/questions';
import Related from '../related/related';
import Reviews from '../reviews/reviews';

export default function store() {
  return (
    <div className="container store">
      <h3>Store</h3>
      <Overview />
      <Questions />
      <Related />
      <Reviews />
    </div>
  );
}
