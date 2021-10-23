import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";

type Props = {
  review: Review;
};

const ReviewListItem: React.FC<Props> = ({ review }) => {
  return (
    <Link href="/reviews/[id]" as={`/reviews/${review.id}`}>
      <a>
        <article className="bg-gray-100 border-yellow-400 rounded-lg p-6 m-4 transition duration-300 ease-in-out transform hover:-translate-y-2 ">
          <div className="text-center md:text-left">
            <span className="text-lg">{review.title}</span>
            <ReactStars
            count={5}
            isHalf={true}
            edit={false}
            value={review.rating/2}
            size={24}
            activeColor="#ffd700"
          />
            <p className="text-purple-500">{review.description}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export { ReviewListItem };