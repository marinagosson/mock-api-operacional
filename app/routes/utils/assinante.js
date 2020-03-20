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

export const assinante1 = "marina";
export const assinante2 = "natalia";

