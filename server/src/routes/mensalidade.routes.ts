import express from 'express';
import MensalidadeRepository from '../repositories/mensalidade.repository';
import MensalidadeController from '../controllers/mensalidade.controller';

const mensalidadeRepository =  new MensalidadeRepository()
const mensalidadeController = new MensalidadeController(mensalidadeRepository);

const mensalidadeRouter = express.Router();

mensalidadeRouter.get('/', (req, res) => mensalidadeController.listar(req, res));
mensalidadeRouter.post('/', (req, res) => mensalidadeController.criar(req, res));
mensalidadeRouter.put("/status/:id", (req, res) => mensalidadeController.alterarStatus(req, res));

export default mensalidadeRouter;