/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("activity", {
    id: {
      type: "SERIAL",
      primaryKey: true,
    },
    name: {
      type: "TEXT",
      notNull: true,
    },
    duration: {
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
  pgm.dropTable("activity");
};