import {
  STATUS_TYPE_VALUES,
  PAGTO_TYPE_VALUES,
  FUNCAO_TYPE_VALUES,
  NOME_MES_TYPE_VALUES,
  TIPO_ASSOCIACAO_TYPE_VALUES,
  TIPO_ALTERACAO_DATA_VALUES
} from '../../types/enumValues';

import {
  status_type,
  pagto_type,
  funcao_type,
  nome_mes_type,
  tipo_associacao_type,
  tipo_alteracao_data
} from '../../types/types_enum';

/* ===========================
   TYPE GUARDS
=========================== */

export const isStatusType = (v: unknown): v is status_type =>
  STATUS_TYPE_VALUES.includes(v as status_type);

export const isPagtoType = (v: unknown): v is pagto_type =>
  PAGTO_TYPE_VALUES.includes(v as pagto_type);

export const isFuncaoType = (v: unknown): v is funcao_type =>
  FUNCAO_TYPE_VALUES.includes(v as funcao_type);

export const isNomeMesType = (v: unknown): v is nome_mes_type =>
  NOME_MES_TYPE_VALUES.includes(v as nome_mes_type);

export const isTipoAssociacaoType = (v: unknown): v is tipo_associacao_type =>
  TIPO_ASSOCIACAO_TYPE_VALUES.includes(v as tipo_associacao_type);

export const isTipoAlteracaoData = (v: unknown): v is tipo_alteracao_data =>
  TIPO_ALTERACAO_DATA_VALUES.includes(v as tipo_alteracao_data);

/* ===========================
   ASSERTS (lançam erro)
=========================== */

export function assertStatusType(v: unknown): asserts v is status_type {
  if (!isStatusType(v)) {
    throw new Error("Status inválido");
  }
}

export function assertPagtoType(v: unknown): asserts v is pagto_type {
  if (!isPagtoType(v)) {
    throw new Error("Tipo de pagamento inválido");
  }
}

export function assertFuncaoType(v: unknown): asserts v is funcao_type {
  if (!isFuncaoType(v)) {
    throw new Error("Função inválida");
  }
}

export function assertNomeMesType(v: unknown): asserts v is nome_mes_type {
  if (!isNomeMesType(v)) {
    throw new Error("Mês inválido");
  }
}

export function assertTipoAssociacaoType(v: unknown): asserts v is tipo_associacao_type {
  if (!isTipoAssociacaoType(v)) {
    throw new Error("Tipo de associação inválido");
  }
}

export function assertTipoAlteracaoData(v: unknown): asserts v is tipo_alteracao_data {
  if (!isTipoAlteracaoData(v)) {
    throw new Error("Tipo de alteração de data inválido");
  }
}
