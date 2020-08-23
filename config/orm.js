var connection = require("../config/connection.js");
function printQuestionMarks(num) {
    var arr =[];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
function objToSql(ob) {
    let arr = [];
    for (var key in ob) {
        arr.push(key +"="+ value);
    }
    return arr.toString();
}
var orm = {
    all: function(tableInput, callback){
        let queryString = "SELECT * FROM " + tableInput +";";
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        });
    },
    create: function(table, cols, vals , callback) {
        let boolean = false;
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        // queryString += printQuestionMarks(vals.lenngth);
        queryString += printQuestionMarks(vals.length);
        queryString +=  ",";
        queryString +=  boolean;
        queryString += ")";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    update: function(table, objColVals, condition, callback){
        let queryString = "UPDATE" + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function (err, result){
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
}
module.exports = orm;