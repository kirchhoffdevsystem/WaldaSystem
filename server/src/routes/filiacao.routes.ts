import express from 'express';
import FiliacaoRepository from '../repositories/filiacao.repository';
import FiliacaoController from '../controllers/conveniado.controller';

const filiacaoRepository =  new FiliacaoRepository()
const filiacaoController = new FiliacaoController(filiacaoRepository);

const filiacaoRouter = express.Router();

filiacaoRouter.get('/', (req, res) => filiacaoController.listar(req, res));
filiacaoRouter.post('/', (req, res) => filiacaoController.criar(req, res));
filiacaoRouter.put("/status/:id", (req, res) => filiacaoController.alterarStatus(req, res));

export default filiacaoRouter;