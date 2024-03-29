import { OpenAIStream } from "../utils/answer.js";

export const config = {
  runtime: "edge",
};

const handler = async (req, res) => {
  try {
    const { prompt } = await req.body;
    const stream = await OpenAIStream(prompt, res);
    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
};

export default handler;
