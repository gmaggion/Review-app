import { NextApiRequest, NextApiResponse } from "next";
import { NewReviewFormData } from "../../reviews/new";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
        const data = req.body as NewReviewFormData;

        const response = await fetch(process.env.REVIEW_API_URL, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const review = await response.json();

        return res.status(201).json({ status: "Success", data: review });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not create review", error }
      });
    }
  }

  return res.status(405).json({ msg: "Method not implemented" });
};