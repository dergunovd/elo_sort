/**
 *  @author Dmitry Dergunov <dmitry@dergunov.net>
 *  @link https://en.wikipedia.org/wiki/Elo_rating_system
 */

const { START_RATING } = require("./config");

class Item {
  constructor(value) {
    this.value = value;
    this.rating = START_RATING;
    this.shows = 0;
  }

  getValue() {
    return this.value;
  }

  getRating() {
    return this.rating;
  }

  setRating(rating) {
    this.rating = rating;
  }

  getNewRatingAfterGame(rival) {
    this.shows++;
    console.log(
      this.getRating(),
      this.getK(),
      this.compareWith(rival),
      this.getE(rival)
    );
    return (
      this.getRating() +
      Math.round(this.getK() * (this.compareWith(rival) - this.getE(rival)))
    );
  }

  getK() {
    if (this.shows < 30) {
      return 40;
    } else if (this.rating < 2400) {
      return 20;
    }
    return 10;
  }

  getE(rival) {
    return 1 / (1 + Math.pow(10, (rival.getRating() - this.getRating()) / 400));
  }

  compareWith(rival) {
    if (this.getValue() < rival.getValue()) {
      return 0;
    }
    if (this.getValue() === rival.getValue()) {
      return 0.5;
    }
    return 1;
  }
}

module.exports.Item = Item;
