export default async function handler(req, res) {
  const { messages } = req.body;

  const reply = "หนูเป็นแชทบอทจำลองค่ะ ยังไม่ได้เชื่อมต่อ GPT จริง 🥲 แต่พี่สามารถเพิ่ม OpenAI API ได้เองในอนาคตนะคะ!";
  res.status(200).json({ result: reply });
}
