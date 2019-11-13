import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;

    if (this.props.isWinner) {
      title = <h1 className="pokedex-winner">Winning Hand!</h1>;
    } else {
      title = <h1 className="pokedex-loser">Losing Hand</h1>;
    }

    return (
      <div className="pokedex">
        {title}
        <h3>Total experience: {this.props.exp}</h3>
        <div className="pokedex-cards">
          {this.props.pokemon.map(p => (
            // eslint-disable-next-line no-unused-expressions
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
