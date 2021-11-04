import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 2em 0;
`;

export const Heading = styled.h3`
  color: #fff;
  margin-bottom: 1em;
`;

export const EpisodesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const EpisodeItem = styled.div`
  padding: 0.5em;
  width: 33.33%;
  z-index: 1;
  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover {
    @media all and (min-width: 767px) {
      transform: scale(1.25);
      z-index: 2;
    }
  }

  &:hover div > div {
    display: flex;
  }

  @media all and (max-width: 991px) {
    width: 50%;
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }
`;

export const ItemContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  & > img {
    width: 100%;
  }
`;

export const ItemOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  z-index: 3;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  display: none;
`;

export const EpisodeInfo = styled.div`
  position: absolute;
  bottom: 0.5em;
  left: 1em;
  display: none;
  align-items: center;
  z-index: 4;

  & > p {
    font-size: 2em;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    margin-right: 0.5em;
  }

  & > span {
    color: rgba(255, 255, 255, 0.8);
  }
`;
