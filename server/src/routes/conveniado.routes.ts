import express from 'express';
import ConveniadoRepository from '../repositories/conveniado.repository';
import ConveniadoController from '../controllers/conveniado.controller';

const conveniadoRepository =  new ConveniadoRepository()
const conveniadoController = new ConveniadoController(conveniadoRepository);

const conveniadoRouter = express.Router();

conveniadoRouter.get('/', (req, res) => conveniadoController.listar(req, res));
conveniadoRouter.post('/', (req, res) => conveniadoController.criar(req, res));
conveniadoRouter.put("/status/:id", (req, res) => conveniadoController.alterarStatus(req, res));

export default conveniadoRouter;