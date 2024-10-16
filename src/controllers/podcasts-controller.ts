import { IncomingMessage, ServerResponse } from "http";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { serviceListEpisodes } from "../services/list-episodes-services";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const queryString = req.url?.split("?p=")[1] ?? "";

  const content = await serviceFilterEpisodes(queryString);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
