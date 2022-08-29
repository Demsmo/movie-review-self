import React, { useEffect, useState } from 'react'
import { addFavourite } from '../reducks/favourites/operations'
import { useSelector, useDispatch } from 'react-redux'
import { getFavourites } from '../reducks/favourites/selectors'
import star from '../assets/img/star.svg'
import heart from '../assets/img/favorite-button.svg'
import trailer from '../assets/img/trailer button.png'

export default function Card({ movie }) {
  const dispatch = useDispatch();
  

  const clickFavourite = (movie) => {
    if(favourites){
    let isFavExist = favourites.find(fav => fav.id === movie.id)
    if (!isFavExist) {
      dispatch(addFavourite(movie))
    }
    else {
      alert('already added')
    }
  }
  };

  const selector = useSelector(state => state);
  const favourites = getFavourites(selector)
  const [showLikeButton, setshowLikeButton] = useState(true);
  useEffect(() => {
    const favourites = []
    let favoriteMovie = favourites.filter(favourite => favourite.id === movie.id)
    if (favoriteMovie.length > 0) {
      setshowLikeButton(false);
    }
  }, [favourites])

  return (
    <div>
      <div class="movie-card">
        <img src={movie.image} alt="movie-poster" />
        {showLikeButton && (
          <img onClick={() => { clickFavourite(movie); }} src={heart} alt="" class="favorite-button"></img>
        )}

        <h2 class="movie-title">{movie.name}</h2>
        <div class="rating-div">
          <img src={star} alt="" class="star" />
          <span class="rating"> {movie.rating} </span>
          <span class="outof5">/5</span>
          <span class="trailer-button"><a href={movie.trailer_link}><img src={trailer} alt="" /></a></span>
        </div>
      </div>
    </div>
  )
}
