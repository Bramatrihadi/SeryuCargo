import { getTopRated } from "../apis/api.js";
import { useEffect, useState } from "react";

const Toprated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getTopRated().then((result) => {
      setTopRated(result);
    });
  }, []);

  const TopRatedList = () => {
    const topRatedToShow = topRated.slice(0, 12);

    return topRatedToShow.map((topMovie, i) => {
      return (
        <div className="p-2" key={i}>
          <div className="card bg-card w-56 ">
            <figure className="">
              <img
                src={`${import.meta.env.VITE_APP_BASEIMGURL}/${
                  topMovie.poster_path
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
                {topMovie.title}
              </div>
              <div
                className="font-normal text-[12px]"
                style={{ color: "#828282" }}
              >
                {topMovie.release_date}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-black px-16">
      <div className="font-poppins xl:text-4xl lg:text-xl md:text-md sm:text-sm text-white py-10 mx-auto">
        Top Rated
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap items-center lg:justify-between justify-center p-3">
          <TopRatedList />
        </div>
      </div>
    </div>
  );
};

export default Toprated;
