
var orm = require("../config/orm");

var burgers = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burger", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burgers;