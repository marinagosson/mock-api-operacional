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
