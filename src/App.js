import React, { useEffect, useState } from "react";
import Tmdb from './services/Tmdb';

const App = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
  
    loadAll();
  }, [])

  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item) => (
          <li key={ item.id }>
            {item.title}
          </li>
        ))}
      </section>
    </div >
  );
}

export default App;
