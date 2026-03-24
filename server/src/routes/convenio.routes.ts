import express from 'express';
import ConvenioRepository from '../repositories/convenio.repository';
import ConvenioController from '../controllers/convenio.controller';

const convenioRepository =  new ConvenioRepository()
const convenioController = new ConvenioController(convenioRepository);

const convenioRouter = express.Router();

convenioRouter.get('/', (req, res) => convenioController.listar(req, res));
convenioRouter.post('/', (req, res) => convenioController.criar(req, res));
convenioRouter.put("/status/:id", (req, res) => convenioController.alterarStatus(req, res));

export default convenioRouter;