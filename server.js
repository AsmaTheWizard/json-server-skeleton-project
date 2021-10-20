const jsonServer = require("json-server");
const server = jsonServer.create();

const router = jsonServer.router("data.json");
const middleware = jsonServer.defaults();

//port
const port = process.env.PORT || 4000;

//create server

server.use(middleware);
server.use(router);

server.listen(port, () => {
  console.log(`server is live and port is ${port}`);
});
