import { useState, FormEvent, JSX } from "react";

type ReviewFormProps = {
  onSubmit: (reviewText: string, rating: number) => void;
};

function ReviewForm({ onSubmit }: ReviewFormProps): JSX.Element {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating > 0 && review.length >= 50) {
      setIsSubmitting(true);
      onSubmit(review, rating);
      setReview("");
      setRating(0);
      setIsSubmitting(false);
    }
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
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
              onChange={() => !isSubmitting && setRating(star)}
              disabled={isSubmitting}
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
        onChange={(e) => !isSubmitting && setReview(e.target.value)}
        disabled={isSubmitting}
      ></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit a review, please make sure to set a <span className="reviews__star">rating</span> and write at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.length < 50 || rating === 0 || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
