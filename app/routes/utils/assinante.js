export function hasAssinante(req) {
  if (req.headers.assinante == null) {
    return false;
  } else {
    return true;
  }
}

export const resSendAssinanteNotFound = {
  message: "Assinante não enviado no header"
};

import { produtos as list1Assinante1 } from './assinante1/newList1';
import { produtos as list2Assinante1 } from './assinante1/newList2';
import { produtos as list3Assinante1 } from './assinante1/newList3';

import { produtos as list1Assinante2 } from './assinante2/newList1';
import { produtos as list2Assinante2 } from './assinante2/newList2';
import { produtos as list3Assinante2 } from './assinante2/newList3';


export const produtosAssinante1 = [...list1Assinante1, ...list2Assinante1, ...list3Assinante1];
export const produtosAssinante2 = [...list1Assinante2, ...list2Assinante2, ...list3Assinante2];

export const assinante1 = "marina";
export const assinante2 = "natalia";

