// import { response } from 'express';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    ).then((response) => response.json()).then((json) => console.log(json));
  }, []);
  return <div>
    {loading ? <h1>Loading...</h1> : null}
  </div>;
}

export default App;
