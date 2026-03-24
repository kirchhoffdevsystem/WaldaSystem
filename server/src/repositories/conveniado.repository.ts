import { supabase } from "../db/supabase"
import type { Conveniado } from "../types/types_db"

export default class ConveniadoRepository {
  async listar(): Promise<Conveniado[] | null> {
    const { data, error } = await supabase
      .from('conveniado')
      .select('*')

    if (error) {
      console.error('Erro ao buscar conveniados:', error)
      return null
    }
    return data
  }

  async criar(conveniado: Omit<Conveniado, 'id'>): Promise<Conveniado | null> {
    const { data, error } = await supabase
      .from('conveniado')
      .insert(conveniado)
      .select('*') // retorna os campos do registro inserido
      .single(); // retorna um objeto único, não array

    if (error) {
      console.error('Erro ao cadastrar conveniado:', error);
      return null;
    }
    return data;
  }

  async atualizarStatus(id: number, status: string) {
    const { data, error } = await supabase
      .from("conveniado")
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