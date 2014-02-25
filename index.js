/**
 * Module dependencies.
 */

var sinergis = require ("./lib");

/**
 * Application.
 */

var app = sinergis();
app.listen (app.config.option.port);
