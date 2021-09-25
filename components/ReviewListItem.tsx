import Link from "next/link";

type Props = {
  review: Review;
};

const ReviewListItem: React.FC<Props> = ({ review }) => {
  return (
    <Link href="/review/[id]" as={`/review/${review.id}`}>
      <a>
        <article className="bg-gray-100 border-yellow-400 rounded-lg p-6 m-4 transition duration-300 ease-in-out transform hover:-translate-y-2 ">
          <div className="text-center md:text-left">
            <span className="text-lg">{review.title}</span>
            <span className="text-lg">{review.rating}</span>
            <p className="text-purple-500">{review.description}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export { ReviewListItem };