import { getNowPlay } from "../apis/api.js";
import { useEffect, useState } from "react";

const Nowplaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    getNowPlay().then((result) => {
      setNowPlaying(result);
    });
  }, []);

  const toggleHover = (index) => {
    setHoveredIndex(index);
  };

  const resetHover = () => {
    setHoveredIndex(null);
  };

  const PopularMovieList = () => {
    return nowPlaying.map((movie, i) => {
      return (
        <div
          className="inline-block px-3"
          key={i}
          onMouseEnter={() => toggleHover(i)}
          onMouseLeave={resetHover}
        >
          <div className="card bg-card w-52 relative">
            {hoveredIndex === i && (
              <div className="absolute bottom-24 right-1 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </div>
            )}
            <figure className="">
              <img
                src={`${import.meta.env.VITE_APP_BASEIMGURL}/${
                  movie.poster_path
                }`}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="p-5">
              <div
                className="card-title font-bold text-lg truncate"
                style={{ color: "#B6B6B6" }}
              >
                {movie.title}
              </div>
              <div
                className="font-normal text-[12px]"
                style={{ color: "#828282" }}
              >
                {movie.release_date}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-black px-16">
      <div className="font-poppins xl:text-4xl lg:text-xl md:text-md sm:text-sm text-white py-10">Now Playing</div>
      <div className="container mx-auto gap-2 justify-start overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-300">
        <div className="flex flex-nowrap ">
          <PopularMovieList />
        </div>
      </div>
    </div>
  );
};

export default Nowplaying;
