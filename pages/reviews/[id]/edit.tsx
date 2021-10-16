import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import {
  EditReviewForm,
  EditReviewFormData
} from "../../../components/EditReviewForm";
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

async function sendData(id: number, data: EditReviewFormData) {
  const res = await fetch(`/api/reviews/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const body = await res.json();
  if (!res.ok) {
    throw new Error(body.data.error.message);
  }
}

export default function EditReviewPage({
  review
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //const reviewObj = JSON.parse(review) as Review;
  const router = useRouter();
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);


  function handleSubmit(data: EditReviewFormData) {
    try {
      sendData(review.id, data);
      notifySuccess ("Editado");
      router.replace(`/reviews/${review.id}`);
    } catch (error) {
      notifyError ("Erro");
    }
  }
  
  return (
    <>

    <section className="m-4">
        <EditReviewForm onSubmit={handleSubmit} review={review} reset={false} />
    </section>
      
    </>
  );
}