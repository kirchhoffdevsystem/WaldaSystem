import { supabase } from "../db/supabase"
import type { Empresa } from "../types/types_db"

export default class EmpresaRepository {
  async todos(): Promise<Empresa[] | null> {
    const { data, error } = await supabase
      .from('empresa')
      .select('*')

    if (error) {
      console.error('Erro ao buscar empresas:', error)
      return null
    }
    return data
  }

  async criar(empresa: Omit<Empresa, 'id'>): Promise<Empresa | null> {
    const { data, error } = await supabase
      .from('empresa')
      .insert(empresa)
      .select('*') // retorna os campos do registro inserido
      .single(); // retorna um objeto único, não array

    if (error) {
      console.error('Erro ao cadastrar empresa:', error);
      return null;
    }
    return data;
  }

  async atualizarStatus(id: number, status: string) {
    const { data, error } = await supabase
      .from("empresa")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Erro ao atualizar status:", error);
      return null;
    }
    return data;
  }

}