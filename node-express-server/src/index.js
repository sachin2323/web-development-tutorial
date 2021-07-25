import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/forms', (req, res) => {
  console.log(req.query);
  res.end('Received');
});

app.post('/forms', (req, res) => {
  console.log(req.body);
  res.end('Received');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
