import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    // alternative function for the apiInt
    // let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

    const imageApiHandler = () => {
      let apiId = "";
      let imgSrc = "";
      let apiInt = parseInt(this.props.id);

      const pokeImgAPI =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

      if (apiInt < 10) {
        apiId = `00${apiInt}`;
      } else if (apiInt > 9 && apiInt < 100) {
        apiId = `0${apiInt}`;
      } else if (apiInt > 99 && apiInt < 1000) {
        apiId = this.props.id.toString();
      }

      imgSrc = `${pokeImgAPI}${apiId}.png`;
      console.log(imgSrc);
      return imgSrc;
    };

    return (
      <div className="pokecard">
        <h1 className="pokecard-title">{this.props.name}</h1>
        <div className="pokecard-img">
          <img src={imageApiHandler()} alt={this.props.name} />
        </div>
        <div className="pokecard-data">Type: {this.props.type}</div>
        <div className="pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
