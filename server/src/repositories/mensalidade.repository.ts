import { supabase } from "../db/supabase"
import type { Mensalidade } from "../types/types_db"

export default class MensalidadeRepository {
  async todos(): Promise<Mensalidade[] | null> {
    const { data, error } = await supabase
      .from('mensalidade')
      .select('*')

    if (error) {
      console.error('Erro ao buscar mensalidades:', error)
      return null
    }
    return data
  }

  async criar(mensalidade: Omit<Mensalidade, 'id'>): Promise<Mensalidade | null> {
    const { data, error } = await supabase
      .from('mensalidade')
      .insert(mensalidade)
      .select('*') // retorna os campos do registro inserido
      .single(); // retorna um objeto único, não array

    if (error) {
      console.error('Erro ao cadastrar mensalidade:', error);
      return null;
    }
    return data;
  }

  async atualizarStatus(id: number, pgto_status: string) {
    const { data, error } = await supabase
      .from("mensalidade")
      .update({ pgto_status })
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