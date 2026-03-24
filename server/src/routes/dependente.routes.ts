import express from 'express';
import DependenteRepository from '../repositories/dependente.repository';
import DependenteController from '../controllers/dependente.controller';

const dependenteRepository =  new DependenteRepository()
const dependenteController = new DependenteController(dependenteRepository);

const dependenteRouter = express.Router();

dependenteRouter.get('/', (req, res) => dependenteController.listar(req, res));
dependenteRouter.post('/', (req, res) => dependenteController.criar(req, res));
dependenteRouter.put("/status/:id", (req, res) => dependenteController.alterarStatus(req, res));

export default dependenteRouter;