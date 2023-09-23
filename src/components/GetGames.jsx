import React, { useState } from "react";
import { useGetGamesQuery } from "../reducers/api";

function GetGames() {
  const [category, setCategory] = useState("mmo");
  const { data, error, isLoading } = useGetGamesQuery(category);

  const categories = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "sandbox",
    "open-world",
    "survival",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
  ];

  const buttonClass =
    "px-2 py-2 mx-2 my-1 text-sm bg-[#0f0f1e] text-white rounded shadow hover:bg-[#707084] hover:text-yellow-500";

  return (
    <div>
      <div className="py-1 flex justify-center flex-wrap bg-gray-800 fixed top-[60px] left-0 w-full z-0 border-b">
        {categories.map((category) => (
          <button
            key={category}
            className={`${buttonClass} lg:block hidden`}
            onClick={() => {
              setCategory(category);
              window.scrollTo(0, 0);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}

        {/* Dropdown for small and medium screens */}
        <div className="lg:hidden flex">
          <h1 className="text-white text-center px-2 text-2xl">Category</h1>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
              window.scrollTo(0, 0);
            }}
            className=" bg-gray-400 rounded-lg w-[80px] h-[30px] border"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="pt-[11rem]">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-4">
            {data.map((game) => (
              <li
                key={game.id}
                className="bg-gray-300 p-4 rounded flex flex-col shadow-md"
              >
                <div className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <img
                      src={game.thumbnail}
                      alt={game.title}
                      className="w-full object-cover rounded"
                    />
                  </div>
                  <strong className="block text-center text-xl mb-2">
                    {game.title}
                  </strong>
                  <p className="mb-4 flex-grow">{game.short_description}</p>
                </div>
                <div>
                  <a
                    href={game.game_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#69698c] text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-200 block text-center mb-2"
                  >
                    Play Now
                  </a>
                  <a
                    href={game.freetogame_profile_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0f0f1e] text-white py-1 px-4 rounded hover:bg-gray-600 transition duration-200 block text-center"
                  >
                    More Info
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GetGames;
