import { supabase } from "../db/supabase"
import type { FuncionarioSindicato } from "../types/types_db"

export default class FuncionarioSindicatoRepository {
  async todos(): Promise<FuncionarioSindicato[] | null> {
    const { data, error } = await supabase
      .from('funcionario_sindicato')
      .select('*')

    if (error) {
      console.error('Erro ao buscar funcionarios do sindicato:', error)
      return null
    }
    return data
  }

  async criar(funcionario_sindicato: Omit<FuncionarioSindicato, 'id'>): Promise<FuncionarioSindicato | null> {
    const { data, error } = await supabase
      .from('funcionario_sindicato')
      .insert(funcionario_sindicato)
      .select('*') // retorna os campos do registro inserido
      .single(); // retorna um objeto único, não array

    if (error) {
      console.error('Erro ao cadastrar funcionario sindicato:', error);
      return null;
    }
    return data;
  }

 /*  async atualizarStatus(id: number, status: string) {
    const { data, error } = await supabase
      .from("funcionario_sindicato")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Erro ao atualizar status:", error);
      return null;
    }
    return data;
  } */

}