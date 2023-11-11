import React, { useEffect } from "react";
import Tmdb from './services/Tmdb';

const App = () => {

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
    }
  
    loadAll();
  }, [])

  return(
    <div>
      Olá mundo!
    </div >
  );
}

export default App;
