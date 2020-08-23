// var orm = require("../config/orm");
var orm = require("../config/orm.js");
let burger = {
    all: function(callback){
        orm.all("burgers", function(res){
            callback(res);
        });
    },
    // create: function(name, callback){
    create: function(cols, vals, callback){
        // orm.create("burgers", ["name", "devoured"], [name, false]
        orm.create("burgers", cols, vals
        ,function(res){
            callback(res);
        });
    },
    // update: function(id, callback){
    // update: function(id, condition, callback){
    update: function(objvals, condition, callback){
        var condition ="id" + condition;
        orm.update("burgers",
        // { devoured: true }, condition, function(res){
            objvals, condition, function(res){
            callback(res);
        });
    },
};
module.exports = burger;