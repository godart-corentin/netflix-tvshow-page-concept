import {
  IoPlayOutline as PlayIconOutline,
  IoPlay as PlayIcon,
  IoVolumeMuteOutline as MuteIcon,
  IoVolumeHighOutline as VolumeIcon,
} from "react-icons/io5";

import {
  Wrapper,
  BackgroundVideo,
  BlurDivider,
  Content,
  PrimaryInfo,
  SecondaryInfo,
  Description,
  Tag,
  Controls,
  PlayButton,
  PlayIconWrapper,
  TagWrapper,
} from "./styles";

import { Show } from "../../api";
import { Container } from "..";

import NetflixSeriesLogo from "../../assets/netflix-series-logo.png";
import { useRef, useState } from "react";

type MediaHeroProps = {
  show: Show;
};

export const MediaHero: React.FC<MediaHeroProps> = ({ show }) => {
  const [muted, setMuted] = useState(true);
  const [playHover, setPlayHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const showsContext = require.context(`../../assets/shows/`, true);
  const showLogo = showsContext(`./${show.slug}/${show.logo}`).default;

  const onToggleVolume = () => {
    if (!videoRef.current) {
      return;
    }

    if (muted) {
      videoRef.current.muted = false;
    } else {
      videoRef.current.muted = true;
    }
    setMuted((state) => !state);
  };

  return (
    <Wrapper>
      <BackgroundVideo
        key={show.trailer}
        ref={videoRef}
        playsInline
        autoPlay
        loop
        muted
        id="video"
      >
        <source src={show.trailer} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <BlurDivider />
      <Content>
        <Container>
          <PrimaryInfo>
            <div>
              {show.isNetflixShow && (
                <img src={NetflixSeriesLogo} alt="Netflix Series" />
              )}
              {show.ageRating && <p className="ageRating">{show.ageRating}+</p>}
              <p>{show.date}</p>
              <p>
                {show.seasons.length} season{show.seasons.length > 1 && "s"}
              </p>
            </div>
            <img src={showLogo} alt="Logo" />
          </PrimaryInfo>
          <TagWrapper>
            {show.tags.map((tag, idx) => (
              <Tag>{tag}</Tag>
            ))}
          </TagWrapper>
          <SecondaryInfo>
            <Description>
              <p>{show.description}</p>
            </Description>
            <Controls>
              <PlayButton>
                <p>Watch Now</p>
                <PlayIconWrapper
                  onMouseOver={() => setPlayHover(true)}
                  onMouseOut={() => setPlayHover(false)}
                >
                  {playHover ? (
                    <PlayIcon color="#212121" />
                  ) : (
                    <PlayIconOutline color="#fff" />
                  )}
                </PlayIconWrapper>
              </PlayButton>
              <div>
                {muted ? (
                  <MuteIcon
                    onClick={onToggleVolume}
                    color="#fff"
                    size={24}
                    cursor="pointer"
                  />
                ) : (
                  <VolumeIcon
                    onClick={onToggleVolume}
                    color="#fff"
                    size={24}
                    cursor="pointer"
                  />
                )}
              </div>
            </Controls>
          </SecondaryInfo>
        </Container>
      </Content>
    </Wrapper>
  );
};
