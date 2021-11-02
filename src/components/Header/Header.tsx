import netflixLogo from "../../assets/netflix_logo.svg";
import avatar from "../../assets/john-doe.jpg";

import { Avatar, Navigation, NetflixLogo, User, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Wrapper>
      <Navigation>
        <NetflixLogo src={netflixLogo} alt="Netflix Logo" />
        <ul>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Shows</a>
          </li>
          <li>
            <a href="#">New & Popular</a>
          </li>
        </ul>
      </Navigation>
      <User>
        <p>John Doe</p>
        <Avatar src={avatar} alt="Avatar image" />
      </User>
    </Wrapper>
  );
};
