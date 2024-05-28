import React from 'react';

type LocationDetailInfoProps = Record<string, string>;

export function LocationDetailInfo({
  name,
  address,
  comment,
  cuisine,
  rating,
}: LocationDetailInfoProps) {
  return (
    <ul>
      <li>
        <h2 className='text-[124px] uppercase max-w-72 leading-[6.5rem] tracking-[-.045em]'>
          {name}
        </h2>
      </li>
      <li>
        <b>Address: </b>
        {address}
      </li>

      <li>
        <b>Comment: </b>
        {comment}
      </li>
      <li>
        <b>Cuisine: </b>
        {cuisine}
      </li>
      <li>
        <b>Rating: </b>
        {rating}
      </li>
    </ul>
  );
}
