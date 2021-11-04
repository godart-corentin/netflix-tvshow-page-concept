import { Container } from "..";
import { Show } from "../../api";
import { SeasonSection } from "../SeasonSection";

type ShowSeaonsProps = {
  show: Show;
};

export const ShowSeasons: React.FC<ShowSeaonsProps> = ({ show }) => {
  return (
    <Container>
      {show.seasons.map((season, idx) => (
        <SeasonSection
          key={idx}
          season={season}
          showSlug={show.slug}
          index={idx + 1}
        />
      ))}
    </Container>
  );
};
