const { request, response } = require("express");

function logger(request, response, next) {
    console.log(`Wah, ada request masuk dari ${request.url}`);
    console.log(`Memberikan response ${response.statusCode} untuk api ${request.url}`);

    next();
}

module.exports = {logger};

