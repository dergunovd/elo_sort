/**
 *  @author Dmitry Dergunov <dmitry@dergunov.net>
 */

const { NUM_ITEMS, NUM_ITERATES } = require("./config");
const { Item } = require("./item");

const items = [];
for (let i = 0; i < NUM_ITEMS; i++) {
  const item = new Item(Math.random());
  items.push(item);
}

for (let i = 0; i < NUM_ITERATES; i++) {
  const firstItem = items[Math.floor(Math.random() * NUM_ITEMS)];
  const secondItem = items[Math.floor(Math.random() * NUM_ITEMS)];
  const firstNewRating = firstItem.getNewRatingAfterGame(secondItem);
  const secondNewRating = secondItem.getNewRatingAfterGame(firstItem);
  firstItem.setRating(firstNewRating);
  secondItem.setRating(secondNewRating);
}

console.log(items.sort((a, b) => a.getRating() - b.getRating()));
