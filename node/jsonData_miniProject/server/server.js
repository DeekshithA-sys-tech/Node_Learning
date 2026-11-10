const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 5000;

const htmlPath = path.join(__dirname, "../client/index.html");
const jsPath = path.join(__dirname, "../client/app.js");
const jsonPath = path.join(__dirname, "../client/jsonData.json");

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Load HTML page
    if (req.method === "GET" && req.url === "/") {

        fs.readFile(htmlPath, "utf-8", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    }

    // Load JS file
    else if (req.method === "GET" && req.url === "/app.js") {

        fs.readFile(jsPath, "utf-8", (err, data) => {
            res.writeHead(200, { "Content-Type": "application/javascript" });
            res.end(data);
        });

    }

    // Save Form Data
    else if (req.method === "POST" && req.url === "/save") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const newUser = JSON.parse(body);

            fs.readFile(jsonPath, "utf-8", (err, data) => {

                let users = [];

                if (!err && data) {
                    users = JSON.parse(data);
                }

                users.push(newUser);

                fs.writeFile(jsonPath, JSON.stringify(users, null, 2), err => {
                    res.end("Saved Successfully");
                });

            });

        });

    }

    else {
        res.end("404 Not Found");
    }

});

server.listen(port, () => {
    console.log(`Server running: http://localhost:5000`);
});