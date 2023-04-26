const { db } = require("./database/database");
const { server } = require("./server/server");

db.connect();

server.get("/pin", (req, res) => {
  res.sendStatus(200);
});

server.listen(5050);
