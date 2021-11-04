import styled from "styled-components/macro";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  padding: 2em 3em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Navigation
export const Navigation = styled.div`
  display: flex;
  align-items: center;

  & > ul {
    margin-left: 3em;
    list-style: none;

    & > li {
      display: inline;
      font-size: 0.9em;

      &:not(:last-child) {
        margin-right: 1em;
      }

      & > a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.8);
        transition: 0.3s ease-out;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

export const NetflixLogo = styled.img`
  height: 25px;
`;

// User
export const User = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 0.9em;
    margin-right: 0.5em;
    color: rgba(255, 255, 255, 0.8);

    @media all and (max-width: 767px) {
      display: none;
    }
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
