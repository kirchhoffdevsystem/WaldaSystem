import { supabase } from "../db/supabase"
import type { Endereco } from "../types/types_db"

export default class EnderecoRepository {
  async todos(): Promise<Endereco[] | null> {
    const { data, error } = await supabase
      .from('endereco')
      .select('*')

    if (error) {
      console.error('Erro ao buscar enderecos:', error)
      return null
    }
    return data
  }

  async criar(endereco: Omit<Endereco, 'id'>): Promise<Endereco | null> {
    const { data, error } = await supabase
      .from('endereco')
      .insert(endereco)
      .select('*') // retorna os campos do registro inserido
      .single(); // retorna um objeto único, não array

    if (error) {
      console.error('Erro ao cadastrar endereco:', error);
      return null;
    }
    return data;
  }

  async atualizarStatus(id: number, status: string) {
    const { data, error } = await supabase
      .from("endereco")
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