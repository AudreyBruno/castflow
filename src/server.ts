import http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";

const port = process.env.PORT || 3333;

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if (req.method === "GET" && baseUrl === "/api/list") {
      await getListEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl === "/api/episode") {
      await getFilterEpisodes(req, res);
    }
  }
);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
