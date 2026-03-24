import express, { Request, Response } from "express";
import cors from "cors";
import router from './src/routes/index'; 

const app = express();
const PORT = 3333;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT"],
}));

app.use(express.json());

// rota teste
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor funcionando!');
});

// prefixo da API
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
