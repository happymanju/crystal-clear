const fs = require("fs");


function makeSeed() {
  const refills = JSON.parse(fs.readFileSync(__dirname + "/output.json"));
  return refills;
}


exports.seed = function (knex) {
  const refills = makeSeed();
  // Deletes ALL existing entries
  return knex('refills').del()
    .then(function () {
      // Inserts seed entries
      try {
        let newRefills = [];
        for (let item of refills) {
          const id = item.id;
          const user_id = item.user_id.slice(0, 7);
          const category = item.category;
          const amount = item.amount;
          const date = item.date;
          newRefills.push({
            id,
            user_id,
            category,
            amount,
            date
          });
        }
        const test = newRefills.slice(0, 9000);
        return knex("refills").insert(test);
      } catch (err) {
        console.error("Error seeding records:\n", err.message)
      }
    });
};
