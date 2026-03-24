import { Router } from 'express';
import conveniadoRouter from './conveniado.routes';
import convenioRouter from './convenio.routes';
import dependenteRouter from './dependente.routes';
import empresaRouter from './empresa.routes';
import enderecoRouter from './endereco.routes';
import filiacaoRouter from './filiacao.routes';
import funcionarioSindicatoRouter from './funcionario_sindicato.routes';
import mensalidadeRouter from './mensalidade.routes';
import telefoneRouter from './telefone.routes';
import usuarioRouter from './usuario.routes';

const router = Router();

router.use('/conveniado', conveniadoRouter);
router.use('/convenio', convenioRouter);
router.use('/dependente', dependenteRouter);
router.use('/empresa', empresaRouter);
router.use('/endereco', enderecoRouter);
router.use('/filiacao', filiacaoRouter);
router.use('/funcionario_sindicato', funcionarioSindicatoRouter);
router.use('/mensalidade', mensalidadeRouter);
router.use('/telefone', telefoneRouter);
router.use('/usuario', usuarioRouter);

export default router;
