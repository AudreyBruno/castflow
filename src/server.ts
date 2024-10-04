import http from "http";
import { getListEpisodes } from "./controllers/podcasts-controller";

const port = process.env.PORT || 3333;

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
      await getListEpisodes(req, res);
    }
  }
);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
