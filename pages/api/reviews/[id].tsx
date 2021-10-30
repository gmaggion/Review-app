//api/reviews/[id].tsx

import { NextApiRequest, NextApiResponse } from "next";
import { EditReviewFormData } from "../../../components/EditReviewForm";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id }
  } = req;
  if (req.method === "DELETE") {
    
    console.log(process.env.REVIEW_API_URL + `/`+ id);

    const response = await fetch(process.env.REVIEW_API_URL + `/${id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json"
        }
    });


    return res.status(200).json({ status: "Success" });
  } else if (req.method === "PUT") {
    const data = req.body as EditReviewFormData;

    const response = await fetch(process.env.REVIEW_API_URL + `/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const review = await response.json();

    return res.status(200).json({ status: "Success", review });
  }

  return res.status(405).json({ msg: "Method not implemented" });
};