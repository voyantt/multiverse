const express = require("express");
const httpProxy = require("http-proxy");
const vhost = require("vhost");

const servers = require("./.servers.json");
const config = require("./.cfg.json");
const html = require("./data/html.json");

const app = express();
const apiProxy = httpProxy.createProxyServer();

servers.forEach((server) => {
    app.use(vhost(server["@"], (req, res) => {
        apiProxy.web(req, res, {
            target: `http://127.0.0.1:${server.port}`
        });
    }));
});

app.use("*", (req, res) => {
    res.send(html["404"]);
});

app.listen(config.server.port, () => {
    console.log(`Multiverse local reverse-proxy router running @ port ${config.server.port} with ${servers.length} servers.`);
});