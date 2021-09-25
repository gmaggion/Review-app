import { InferGetServerSidePropsType } from "next";
import { Fragment } from "react";
import { ReviewList } from "../components/ReviewList";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:8081/api/reviews");
    const networkReviews = (await res.json()) as NetworkReview[];
    const reviews: Review[] = networkReviews.map(({ id, title, rating, description }) => ({
      id,
      title,
      rating,
      description
    }));
    return {
      props: { msg: "Lista de Avaliações!", reviews }
    };
}
  
export default function ListReview({
    reviews,
    msg
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(reviews);
    return (
      <Fragment>
        <h1 className="m-4 text-center text-4xl text-yellow-400">{msg}</h1>
        <div>
          <ReviewList reviews={reviews}/>
        </div>
      </Fragment>
    );
    
}