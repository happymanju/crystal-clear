
exports.up = function (knex) {
    return knex.schema.createTable("refills", function (table) {
        table.string("id");
        table.string("user_id");
        table.string("category");
        table.string("amount");
        table.string("date");
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable("refills");
};
