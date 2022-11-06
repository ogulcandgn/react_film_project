import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api.json";

function SearchMovie() {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovies();
    console.log(movieData);
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
      {/* navbar */}
      <div className="flex justify-center items-center my-10">
        <div className="space-y-10 ">
          <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                onChange={handleChange}
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Aramak istediğiniz film"
              />
            </div>
            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
              <select>
                <option value="" selected>
                  Kategoriler
                </option>
                <option value="">Savaş</option>
                <option value="">Yerli</option>
                <option value="">Yabancı</option>
                <option value="">Bilim Kurgu</option>
              </select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
            </div>
            <div className="bg-blue-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Filmi Ara</span>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      {movieData.length === 0 && (
        <p className="container mx-auto">Sonuç bulunamadı</p>
      )}
      <div className="container mx-auto my-10 p-5">
        <div
          id="movie_card"
          className="flex flex-wrap justify-center gap-6 mb-6"
        >
          {movieData.map((item) => {
            return (
              <div className="w-72 shadow-lg">
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
