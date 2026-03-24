import { Request, Response } from "express";
import { isStatusType } from "./utils/validacaoCampos";

export default class UsuarioController {

    usuarioRepository: any;

    constructor(usuarioRepository: any) {
        this.usuarioRepository = usuarioRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const usuarios = await this.usuarioRepository.listar();
            return res.status(200).json({
                message: "Lista de usuarios",
                data: usuarios
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const { nome, cpf, funcao, email, status, endereco_id, empresa_id } = req.body;
            isStatusType(status)
            const usuario = await this.usuarioRepository.criar(nome, cpf, funcao, email, status, endereco_id, empresa_id)
            return res.status(201).json({
                message: "Usuario criado com sucesso",
                data: usuario
            });
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async alterarStatus(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { status } = req.body; // novo status

            // Validação do status
            isStatusType(status);

            const update = await this.usuarioRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Usuario não encontrado" });
            }

            return res.status(200).json({
                message: "Status atualizado com sucesso",
                data: update
            });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

}