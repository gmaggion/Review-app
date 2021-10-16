import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditReviewForm } from "../../components/EditReviewForm";
import { useRouter } from "next/router";

export type NewReviewFormData = {
  title: string;
  description: string;
};

async function sendData(data: NewReviewFormData) {
    const res = await fetch("/api/reviews", {
      method: "POST",
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

function AddNewPage() {
  const router = useRouter();
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  async function onFormSubmit(data: NewReviewFormData) {
    try {
      sendData(data);
      notifySuccess ("Criado com sucesso")
      router.replace(`/reviews`);
    } catch (error) {
      notifyError("Deu ruim:/");
    }
  }

  return (
    <>
    <section className="m-4">
        <EditReviewForm onSubmit={onFormSubmit} />
      </section>
      </>
  );
}

export default AddNewPage;