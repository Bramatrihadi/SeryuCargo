import { getNowPlay } from "../apis/api.js";
import { useEffect, useState } from "react";

const Nowplaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getNowPlay().then((result) => {
      setNowPlaying(result);
    });
  }, []);

  const PopularMovieList = () => {
    return nowPlaying.map((movie, i) => {
      return (
        <div className="inline-block px-3" key={i}>
          <div className="card bg-card w-52">
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
