import React from 'react';
import Image from 'next/image';
type Movie = {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
};

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({
  movie: { imdbID, Year, Poster, Title },
}: MovieCardProps) {
  return (
    <div className="w-[310px]">
      <div
        className=" relative h-[460px] m-6 b overflow-hidden flex items-center justify-center flex-wrap rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out "
        key={imdbID}
      >
        <div>
          <Image
            src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
            alt={Title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="text-center px-2">
        <h3 className="font-semibold">{Title}</h3>
        <p>{Year}</p>
      </div>
    </div>
  );
}
