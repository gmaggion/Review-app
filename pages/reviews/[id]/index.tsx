import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:8081/api/reviews/${id}`);
  const { title, rating, description, id: reviewId } = (await res.json()) as NetworkReview;
  const review: Review = { title, rating, description, id: reviewId };
  return {
    props: { review }
  };
}

async function deleteReview(id: number) {
  const res = await fetch(`/api/reviews/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) {
    const body = await res.json();
    throw new Error(body.data.error.message);
  }
}

export default function ReviewDetailPage({
    review
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //const postObj = JSON.parse(review) as Review;
  const router = useRouter();
  async function handleDeleteButtonClick(id: number) {
    const answer = confirm("Tem certeza amigão?");
    if (!answer) return;

    try {
      await deleteReview(id);
      alert("Avaliação deletada com sucesso!");
      router.replace("/reviews");
    } catch (error) {
      alert("putsss erro");
    }
  }
  return (
    <section className="m-4">
      <h1 className="m-4 text-center text-3xl text-yellow-500">{review.title}</h1>
      <h2 className="m-4 text-center text-2xl text-yellow-300">{review.rating}</h2>
      <p className="">{review.description}</p>
      <div className="mt-20 flex flex-col md:flex-row md:justify-end">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block flex-grow md:inline md:flex-grow-0">
          <a href={`/reviews/${review.id}/edit`}>Edit</a>
        </button>
        <button
          onClick={() => handleDeleteButtonClick(review.id)}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block flex-grow mt-2 md:inline md:flex-grow-0 md:m-0 md:ml-1"
        >
          Deletar
        </button>
      </div>
    </section>
  );
}