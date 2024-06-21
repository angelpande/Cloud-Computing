/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("cal", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    image: {
      type: "bytea",
      notNull: false,
    },
    foodname: {
      type: "TEXT",
      notNull: true,
    },
    cal: {
      type: "INTEGER",
      notNull: true,
    },
    created_at: {
      type: "TEXT",
      notNull: true,
    },
    updated_at: {
      type: "TEXT",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("cal");
};

