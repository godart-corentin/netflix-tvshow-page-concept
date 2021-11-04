import { useEffect, useState } from "react";

import { Show, ShowService } from "./api";
import { Header, MediaHero, ShowSeasons } from "./components";

function App() {
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    setShow(ShowService.getShow(0));
  }, []);

  return (
    <div>
      <Header />
      {show && (
        <>
          <MediaHero show={show} />
          <ShowSeasons show={show} />
        </>
      )}
    </div>
  );
}

export default App;
