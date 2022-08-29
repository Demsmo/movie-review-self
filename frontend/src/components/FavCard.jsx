import React from 'react'
import { deleteFavourite } from '../reducks/favourites/operations'
import { useDispatch } from 'react-redux'
import redheart from '../assets/img/favorite-button-highlighted.svg'
import star from '../assets/img/star.svg'

export default function FavCard({ favourite }) {
  const dispatch = useDispatch();
  return (
    <>
      <div class="movie-card">
        <img src={favourite.image} alt="movie-poster" />
        <img onClick={() =>
          dispatch(deleteFavourite(favourite.id))} src={redheart} alt="" class="favorite-button" />
          <h2 class="movie-title"> {favourite.name} </h2>
          <div class="rating-div">
            <img src={star} alt="" class="star" />
            <span class="rating">4.5</span>
            <span class="outof5">/5</span>
            <span class="trailer-button"><a href={favourite.trailer}><img src="/img/trailer button.png" alt="" /></a></span>
          </div>
      </div>
    </>
  )
}
