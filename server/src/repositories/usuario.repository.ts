import { supabase } from "../db/supabase"
import type { Usuario } from "../types/types_db"

export default class UsuarioRepository {
  async listar(): Promise<Usuario[] | null> {
    const { data, error } = await supabase
      .from('usuario')
      .select('*')

    if (error) {
      console.error('Erro ao buscar usuários:', error)
      return null
    }
    return data
  }

  async criar(usuario: Omit<Usuario, 'id'>): Promise<Usuario | null> {
    const { data, error } = await supabase
      .from('usuario')
      .insert(usuario)
      .select('*') // retorna os campos do registro inserido
      .single(); // retorna um objeto único, não array

    if (error) {
      console.error('Erro ao cadastrar usuario:', error);
      return null;
    }
    return data;
  }

  async atualizarStatus(id: number, status: string) {
    const { data, error } = await supabase
      .from("usuario")
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