
var path = require ("path");

var koa = require ("koa");
var route = require ("koa-route");
var compose = require("koa-compose");

var view = require('co-views');

var config = require ("../config");

module.exports = function () {
  
  var app = koa();
  app.config = config;

  var mid = [];

  for (var r in config.route) {
    var obj = config.route[r];
    var ctrl = require("../ctrl/" + obj.controller)(app);
    var act = ctrl[obj.action];
    mid.push(route[obj.method.toLowerCase()](r, act));
  }

  app.use(compose(mid));

  app.render = view("view", { map: { html: "swig" } });

  return app;
}