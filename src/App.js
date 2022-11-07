import SearchMovie from "./components/SearchMovie";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);

  const handleChange = (e) => {
    //aradığımız harfler arası yarım saniyeden fazlaysa temizlesin
    const searchTimeOut = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);

    return () => {
      clearTimeout(searchTimeOut);
    };
  };
  return (
    <div>
      <Header handleChange={handleChange} />
      <SearchMovie
        search={search}
        movieData={movieData}
        setMovieData={setMovieData}
      />
      <Footer />
    </div>
  );
}

export default App;
