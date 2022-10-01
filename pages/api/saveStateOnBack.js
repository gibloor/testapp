import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body

    fs.writeFileSync('data/state.json', JSON.stringify(data, null, 4));

    res.status(201).json(data)
  }
}