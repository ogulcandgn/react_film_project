import React from "react";

function Header({ handleChange }) {
  return (
    <div>
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
    </div>
  );
}

export default Header;
