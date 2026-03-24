import express from 'express';
import UsuarioRepository from '../repositories/usuario.repository';
import UsuarioController from '../controllers/usuario.controller';

const usuarioRepository =  new UsuarioRepository()
const usuarioController = new UsuarioController(usuarioRepository);

const usuarioRouter = express.Router();

usuarioRouter.get('/', (req, res) => usuarioController.listar(req, res));
usuarioRouter.post('/', (req, res) => usuarioController.criar(req, res));
usuarioRouter.put("/status/:id", (req, res) => usuarioController.alterarStatus(req, res));

export default usuarioRouter;