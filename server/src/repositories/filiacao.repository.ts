import { supabase } from "../db/supabase"
import type { Filiacao } from "../types/types_db"

export default class FiliacaoRepository {
  async todos(): Promise<Filiacao[] | null> {
    const { data, error } = await supabase
      .from('filiacao')
      .select('*')

    if (error) {
      console.error('Erro ao buscar filiacoes:', error)
      return null
    }
    return data
  }

  async criar(filiacao: Omit<Filiacao, 'id'>): Promise<Filiacao | null> {
    const { data, error } = await supabase
      .from('filiacao')
      .insert(filiacao)
      .select('*') // retorna os campos do registro inserido
      .single(); // retorna um objeto único, não array

    if (error) {
      console.error('Erro ao cadastrar filiacao:', error);
      return null;
    }
    return data;
  }

  async atualizarStatus(id: number, status: string) {
    const { data, error } = await supabase
      .from("filiacao")
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