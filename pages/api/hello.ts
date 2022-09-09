export default function handler(req, res) {
  console.log('info log')
  console.log(process.env.SERVER_ENV_SAMPLE)
  res.status(200).json({ text: 'Hello' });
}