import Cookies from "cookies";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }

  const cookies = new Cookies(req, res);
  cookies.set("access_token");

  res.status(200).json({ message: "logout" });
}
