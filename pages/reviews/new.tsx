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
  async function onFormSubmit(data: NewReviewFormData) {
    try {
      sendData(data);
      alert("Avaliação criada com sucesso!");
      router.replace(`/reviews`);
    } catch (error) {
      alert("Something went wrong :/");
    }
  }

  return (
    <section className="m-4">
      <EditReviewForm onSubmit={onFormSubmit} />
    </section>
  );
}

export default AddNewPage;