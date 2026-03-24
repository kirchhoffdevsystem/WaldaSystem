import express from 'express';
import EmpresaRepository from '../repositories/empresa.repository';
import EmpresaController from '../controllers/empresa.controller';

const empresaRepository =  new EmpresaRepository()
const empresaController = new EmpresaController(empresaRepository);

const empresaRouter = express.Router();

empresaRouter.get('/', (req, res) => empresaController.listar(req, res));
empresaRouter.post('/', (req, res) => empresaController.criar(req, res));
empresaRouter.put("/status/:id", (req, res) => empresaController.alterarStatus(req, res));

export default empresaRouter;