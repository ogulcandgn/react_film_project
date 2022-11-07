import React from "react";
import { useEffect } from "react";
import api from "../api.json";

function SearchMovie({ search, movieData, setMovieData }) {
  useEffect(() => {
    getMovies();
    // console.log(movieData);
  }, [search]);

  async function getMovies() {
    const data = api
      .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      .map((i) => {
        return {
          id: i.episode_id,
          title: i.title,
          img: i.img,
          desc: i.desc,
        };
      });
    setMovieData(data);
  }

  return (
    <div>
      {/* navbar */}
      {/* content */}
      {movieData.length === 0 && (
        <p className="container mx-auto">Sonuç bulunamadı</p>
      )}
      <div className="container mx-auto my-10 p-5">
        <div
          id="movie_card"
          className="flex flex-wrap justify-center gap-6 mb-6"
        >
          {movieData.map((item, index) => {
            return (
              <div key={index} className="w-72 shadow-lg">
                <img
                  className="w-full"
                  style={{ height: "400px" }}
                  src={item.img}
                />
                <div className="px-4 mb-4">
                  <h2 className="text-xl my-3">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
