import { useState, FormEvent } from "react";

export type EditReviewFormData = {
  title: string;
  description: string;
  rating: string;
};

type Props = {
  onSubmit: (data: EditReviewFormData) => void;
  review?: Review;
  reset?: boolean;
};

const EditReviewForm: React.FC<Props> = ({ onSubmit, review, reset }) => {
  const [title, setTitle] = useState(review?.title || "");
  const [description, setDescription] = useState(review?.description || "");
  const [rating, setRating] = useState(review?.rating || "");
  function doReset() {
    setTitle("");
    setDescription("");
    setRating("");
  }
  function isValid(data: EditReviewFormData): boolean {
    return data.description !== "" && data.title !== "";
  }
  function onFormSubmit(e: FormEvent<HTMLFormElement>, data: EditReviewFormData) {
    e.preventDefault();
    onSubmit(data);
    if (reset) doReset();
  }

  return (
    <form
      className="bg-white px-8 pt-6 pb-8 mb-4"
      onSubmit={e => onFormSubmit(e, { title, description, rating })}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Titulo
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Your title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Descrição
        </label>
        <textarea
          className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          rows={10}
          placeholder="Your description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Nota
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="text"
          placeholder="nota"
          value={rating}
          onChange={e => setRating(e.target.value)}
          required
          />
          </div>

      <div className="flex md:justify-end">
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-grow md:flex-grow-0 ${
            !isValid({ title, description, rating })
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          disabled={!isValid({ title, description, rating })}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

EditReviewForm.defaultProps = { reset: true };
export { EditReviewForm };
