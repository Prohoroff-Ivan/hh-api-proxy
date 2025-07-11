export default async function handler(req, res) {
  const { query } = req;
  const text = query.text || "React";
  try {
    const response = await fetch(`https://api.hh.ru/vacancies?text=${encodeURIComponent(text)}&area=1`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при запросе к hh.ru" });
  }
}
