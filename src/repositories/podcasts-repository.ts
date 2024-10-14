import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcasts = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const data = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(data);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcast === podcastName
    );
  }

  return jsonFile;
};
