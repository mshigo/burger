var connection = require("./connection");

var orm ={
    select: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, res) {
          if (err) {
              console.error(err);
          }
          console.log(res);
        });    
    },
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        console.log(queryString);
    
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, res) {
          if (err) {
              console.error(err);
          };
          console.log(res);
        });
    }
}

module.exports = orm;