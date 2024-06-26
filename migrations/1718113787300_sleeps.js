/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("sleeps", {
    id: {
      type: "SERIAL",
      primaryKey: true,
    },
    bedtime: {
      type: "TEXT",
      notNull: true,
    },
    wakeuptime: {
      type: "TEXT",
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
  pgm.dropTable("sleeps");
};