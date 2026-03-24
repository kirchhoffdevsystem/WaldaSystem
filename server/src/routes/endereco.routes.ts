import express from 'express';
import EnderecoRepository from '../repositories/endereco.repository';
import EnderecoController from '../controllers/conveniado.controller';

const enderecoRepository =  new EnderecoRepository()
const enderecoController = new EnderecoController(enderecoRepository);

const enderecoRouter = express.Router();

enderecoRouter.get('/', (req, res) => enderecoController.listar(req, res));
enderecoRouter.post('/', (req, res) => enderecoController.criar(req, res));
enderecoRouter.put("/status/:id", (req, res) => enderecoController.alterarStatus(req, res));

export default enderecoRouter;