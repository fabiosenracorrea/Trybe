// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  let ccl = cc.length;
  return (ccl > 4) ? ('#'.repeat(ccl - 4) + cc.slice(ccl-4, ccl)) : (cc)
}

//observações:
// slice não é inclusivo pro último
// salvar variáveis quando muito desnecessário, como aqui com '#'