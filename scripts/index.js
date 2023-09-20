const server = require("./server");

const PORT = process.env.PORT || 3000;
server.app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
