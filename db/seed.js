const db = require("./");

const seed = ({ shopData, treasureData }) => {
  return db
    .query(`DROP TABLE IF EXISTS treasures;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS shops;`);
    })
    .then(() => {
      return db.query(`CREATE TABLE shops (
			shop_id SERIAL PRIMARY KEY,
			shop_name VARCHAR(50) NOT NULL,
			owner VARCHAR(50) NOT NULL,
			slogan TEXT NOT NULL
		)`);
    })
    .then(() => {
      return db.query(`
		CREATE TABLE treasures (
			treasure_id SERIAL PRIMARY KEY,
			treasure_name VARCHAR(50) NOT NULL,
			colour VARCHAR(50) NOT NULL,
			age INT NOT NULL,
			cost_at_auction FLOAT(2) NOT NULL,
			shop_id INT REFERENCES shops(shop_id)

		)
		`);
    });
  // then: create some new tables - but which first and why?
  // then: insert the raw data into the tables.
};

module.exports = seed;
