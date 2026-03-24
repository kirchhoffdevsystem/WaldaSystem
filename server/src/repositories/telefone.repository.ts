import { supabase } from "../db/supabase"
import type { Telefone } from "../types/types_db"

export default class TelefoneRepository {
  async todos(): Promise<Telefone[] | null> {
    const { data, error } = await supabase
      .from('telefone')
      .select('*')

    if (error) {
      console.error('Erro ao buscar telefones:', error)
      return null
    }
    return data
  }

  async criar(telefone: Omit<Telefone, 'id'>): Promise<Telefone | null> {
    const { data, error } = await supabase
      .from('telefone')
      .insert(telefone)
      .select('*') // retorna os campos do registro inserido
      .single(); // retorna um objeto único, não array

    if (error) {
      console.error('Erro ao cadastrar telefone:', error);
      return null;
    }
    return data;
  }

  async atualizarStatus(id: number, status: string) {
    const { data, error } = await supabase
      .from("telefone")
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