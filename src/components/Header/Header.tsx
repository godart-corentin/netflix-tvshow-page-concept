import netflixLogo from "../../assets/netflix_logo.svg";
import netflixLogoMobile from "../../assets/netflix_logo_mobile.svg";
import avatar from "../../assets/john-doe.jpg";

import { Avatar, Navigation, NetflixLogo, User, Wrapper } from "./styles";
import useWindowDimensions from "../../hooks/window";

export const Header: React.FC<{}> = () => {
  const { width } = useWindowDimensions();

  return (
    <Wrapper>
      <Navigation>
        {width > 767 ? (
          <NetflixLogo src={netflixLogo} alt="Netflix Logo" />
        ) : (
          <NetflixLogo src={netflixLogoMobile} alt="Netflix Logo" />
        )}
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
