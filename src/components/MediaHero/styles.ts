import styled from "styled-components/macro";

export const Wrapper = styled.div`
  height: 650px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media all and (max-width: 767px) {
    height: 500px;
  }
`;

export const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
  transform: scale(1.25);
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const PrimaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6em;

  @media all and (max-width: 767px) {
    margin-bottom: 2em;
  }

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 1em;

    & > * {
      margin: 0 1em;
    }

    & > img {
      height: 20px;
    }

    & > p {
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.8em;
      letter-spacing: 1px;

      &.ageRating {
        color: #fff;
        font-weight: bold;
        padding: 0.3em;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 5px;
      }
    }
  }

  & > img {
    max-width: 80%;
    max-height: 100px;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5em;

  @media all and (max-width: 767px) {
    display: none;
  }
`;

export const SecondaryInfo = styled.div`
  display: flex;
  align-items: center;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  width: 50%;
  min-width: 350px;

  & > p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1em;
    line-height: 1.6em;
    max-width: 350px;
    @media all and (max-width: 767px) {
      text-align: center;
      font-size: 0.8em;
      max-width: 100%;
      width: 100%;
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 1em;
  }
`;

export const Tag = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  padding: 0.3em;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  font-size: 0.7em;

  &:not(:last-child) {
    margin-right: 0.5em;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  min-width: 350px;

  & > div {
    display: flex;
    align-items: center;
  }

  @media all and (max-width: 767px) {
    justify-content: center;
  }
`;

export const PlayButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2em;

  & > p {
    color: #fff;
    font-weight: bold;
    margin-right: 0.5em;
  }
`;

export const PlayIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: 0.3s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #fff;
  }

  @media all and (max-width: 767px) {
    width: 50px;
    height: 50px;
  }
`;

export const BlurDivider = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  z-index: 1;
  background-image:
    linear-gradient(
      to bottom,
      hsla(0, 0%, 3.9%, 0) 0%,
      hsla(0, 0%, 3.9%, 0.013) 8.1%,
      hsla(0, 0%, 3.9%, 0.049) 15.5%,
      hsla(0, 0%, 3.9%, 0.104) 22.5%,
      hsla(0, 0%, 3.9%, 0.175) 29%,
      hsla(0, 0%, 3.9%, 0.259) 35.3%,
      hsla(0, 0%, 3.9%, 0.352) 41.2%,
      hsla(0, 0%, 3.9%, 0.45) 47.1%,
      hsla(0, 0%, 3.9%, 0.55) 52.9%,
      hsla(0, 0%, 3.9%, 0.648) 58.8%,
      hsla(0, 0%, 3.9%, 0.741) 64.7%,
      hsla(0, 0%, 3.9%, 0.825) 71%,
      hsla(0, 0%, 3.9%, 0.896) 77.5%,
      hsla(0, 0%, 3.9%, 0.951) 84.5%,
      hsla(0, 0%, 3.9%, 0.987) 91.9%,
      hsl(0, 0%, 3.9%) 100%
    );
  };
`;
