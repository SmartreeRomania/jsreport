﻿/*! 
 * Copyright(c) 2014 Jan Blaha 
 */ 

define(["app", "backbone", "dashboard/dashboard.view"],
    function (app, Backbone, DashboardView) {

        app.module("dashboard", function (module) {
            var Router = Backbone.Router.extend({
                routes: {
                    "": "dashboard"
                },
                dashboard: function () {
                    if (!app.settings.firstRun) {
                        app.layout.content.show(new DashboardView());
                    }
                }
            });

            app.dashboard.router = new Router();
        });
    });