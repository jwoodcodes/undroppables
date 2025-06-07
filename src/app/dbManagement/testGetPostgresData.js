"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPostgresData_1 = require("./getPostgresData");
(0, getPostgresData_1.getPostgresData)().then(function (data) {
    console.log("Direct call result:", data);
    process.exit(0);
});
