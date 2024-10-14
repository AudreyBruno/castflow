import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcasts = async (): Promise<Podcast[]> => {
  const data = fs.readFileSync(pathData, "utf-8");
  const jsonFile = JSON.parse(data);
  return jsonFile;
};
