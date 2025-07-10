import http from "http";

//creating server
const server = http.createServer((req, res) => {
  //console.log(req);
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 404;
  res.statusMessage = "BAD";

  //shorthand for above
  res.writeHead(200, "GOOD", { "Content-Type": "text/plain" });
  res.write(`
    <h1>Hey There!</h1>
    `);
});

server.listen(9000, () => {
  console.log(`Server is listening at port 9000`);
});
