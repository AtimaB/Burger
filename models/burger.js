var orm = require("../config/orm");

let burger = {
    all: function(callback){
        orm.all("burgers", function(res){
            callback(res);
        });
    },

    create: function(name, callback){
        orm.create("burgers", ["name", "devoured"], [name, false]
        ,function(res){
            callback(res);
        });
    },

    update: function(id, callback){
        var condition ="id" + id;
        orm.update("burgers",
        { devoured: true }, condition, function(res){
            callback(res);
        });
    },
};

module.exports = burger;