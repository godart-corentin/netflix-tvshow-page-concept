import { Season } from "../../api";
import { formatWithZero } from "../../helpers";
import {
  EpisodeInfo,
  EpisodeItem,
  EpisodesGrid,
  Heading,
  ItemContent,
  ItemOverlay,
  Wrapper,
} from "./styles";

type SeasonSectionProps = {
  showSlug: string;
  season: Season;
  index: number;
};

export const SeasonSection: React.FC<SeasonSectionProps> = ({
  showSlug,
  season,
  index,
}) => {
  const imageContext = require.context(`../../assets/shows/`, true);

  return (
    <Wrapper>
      <Heading>Season {index}</Heading>
      <EpisodesGrid>
        {season.videos.map((video, idx) => {
          const episodeThumbnail = imageContext(
            `./${showSlug}/${video.thumbnail}`
          ).default;

          return (
            <EpisodeItem key={idx}>
              <ItemContent>
                <img
                  src={episodeThumbnail}
                  alt={`Episode ${idx + 1} thumbnail`}
                />
                <ItemOverlay />
                <EpisodeInfo>
                  <p>{formatWithZero(idx + 1)}</p>
                  <span>{video.name}</span>
                </EpisodeInfo>
              </ItemContent>
            </EpisodeItem>
          );
        })}
      </EpisodesGrid>
    </Wrapper>
  );
};
