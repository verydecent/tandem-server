const server = require("./server");

server.listen(process.env.PORT || 4000, () =>
  console.log("Server listening on port 4000")
);
