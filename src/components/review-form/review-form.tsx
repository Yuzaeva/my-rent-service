import { useState } from "react";
import { JSX } from "react";

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <form className="reviews__form form">
      <h2 className="reviews__title">Leave a Review</h2>

      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <label key={star} className="reviews__rating-label form__rating-label" title={`${star} stars`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              type="radio"
              value={star}
              checked={rating === star}
              onChange={() => setRating(star)}
            />
            <span className={`star-icon ${rating >= star ? "star--active" : ""}`}>★</span>
          </label>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit a review, please make sure to set a <span className="reviews__star">rating</span> and write at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.length < 50 || rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
