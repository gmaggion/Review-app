import { Fragment } from "react";
import { ReviewListItem } from "./ReviewListItem";

type Props = {
  reviews: Review[];
};

const ReviewList: React.FC<Props> = ({ reviews }) => {
  return (
    <Fragment>
      {reviews.map(r => (
        <ReviewListItem key={r.id} review={r} />
      ))}
    </Fragment>
  );
};

export { ReviewList };