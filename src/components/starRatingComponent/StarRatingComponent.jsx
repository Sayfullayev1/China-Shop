import React from 'react'
import './starRatingComponent.scss'




export default function StarRatingComponent(props) {


    let rating = 0

    if (props.rating) {
        rating = props.rating
    }
    

    const maxStars = 5;
    const starPercentage = ( rating / maxStars) * 100;
 
  return (
    <div className="star-rating__wrapper">
        <div className="star-rating">

            <div className="star-rating__back">
              {[...Array(maxStars)].map((_, index) => (
                <span key={index} className="star">&#9734;</span>
              ))}
            </div>
            <div className="star-rating__front" style={{ width: `${starPercentage}%` }}>
              {[...Array(maxStars)].map((_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
            </div>
              
        </div>

        <span >({rating.toFixed(1)})</span>
    </div>
  )
}
