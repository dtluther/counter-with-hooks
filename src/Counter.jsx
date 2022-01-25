import React from 'react';
import getJokeId, { dadJokeUrl } from './getJokeId';

export default function Counter() {
  return (
    <section className="demo">
      <h1 className="dad-joke"></h1>
      <div className={`counter-box`}>
        <h1>Counter</h1>
        <h3 className="count">0</h3>
        <div className="buttons-box">
          <button className="decrease-btn">Decrease</button>
          <button className="increase-btn">Increase</button>
        </div>
        {/* <div className="name-box">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Your Name"
          />
        </div> */}
      </div>
    </section>
  );
}
