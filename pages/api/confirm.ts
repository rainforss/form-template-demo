// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ingestionKey: string;
};

export default function handler(res: NextApiResponse<Data>) {
  res.status(200).json({ ingestionKey: process.env.INSESTION_KEY! });
}
