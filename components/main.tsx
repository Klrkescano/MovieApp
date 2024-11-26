'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=ae3ef349';
type Movie = {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
};

export default function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    searchMovies('Demon Slayer');
  }, []);

  const searchMovies = async (title: string) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col p-5">
      <h1 className=" text-5xl font-bold">
        Ani<span className="text-blue-400">Flix</span>
      </h1>
      <div className="flex gap-4 mt-3">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Movies"
          className="w-full  p-2 rounded-lg text-gray-700 bg-gray-200 placeholder-gray-500 focus:outline-none "
        />
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          role="button"
          onClick={() => searchMovies(searchTerm)}
          className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className=" flex flex-wrap justify-center items-center ">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}
