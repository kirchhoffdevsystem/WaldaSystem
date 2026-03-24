import express from 'express';
import TelefoneRepository from '../repositories/telefone.repository';
import TelefoneController from '../controllers/telefone.controller';

const telefoneRepository =  new TelefoneRepository()
const telefoneController = new TelefoneController(telefoneRepository);

const telefoneRouter = express.Router();

telefoneRouter.get('/', (req, res) => telefoneController.listar(req, res));
telefoneRouter.post('/', (req, res) => telefoneController.criar(req, res));
telefoneRouter.put("/status/:id", (req, res) => telefoneController.alterarStatus(req, res));

export default telefoneRouter;