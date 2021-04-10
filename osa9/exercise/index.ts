import express from 'express'
import { calculateBmi } from './bmiCalculator'

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    const height: number = Number(req.query.height)
    const weight : number = Number(req.query.weight)
    
    const bmi : string = calculateBmi(height, weight)
    res.json({ bmi, height, weight })
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});