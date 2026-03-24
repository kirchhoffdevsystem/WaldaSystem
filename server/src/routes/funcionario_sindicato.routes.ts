import express from 'express';
import FuncionarioSindicatoRepository from '../repositories/funcionario_sindicato.repository';
import FuncionarioSindicatoController from '../controllers/funcionario_sindicato.controller';

const funcionarioSindicatoRepository =  new FuncionarioSindicatoRepository()
const funcionarioSindicatoController = new FuncionarioSindicatoController(funcionarioSindicatoRepository);

const funcionarioSindicatoRouter = express.Router();

funcionarioSindicatoRouter.get('/', (req, res) => funcionarioSindicatoController.listar(req, res));
funcionarioSindicatoRouter.post('/', (req, res) => funcionarioSindicatoController.criar(req, res));

export default funcionarioSindicatoRouter;