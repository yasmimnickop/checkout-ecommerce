function aplicarCupom(subtotal, codigo) {
    const valor = Math.max(0, subtotal);
    const cupom = String(codigo ?? "").trim().toUpperCase();
  
    let desconto = 0;
  
    if (cupom === "DESC10") {
      desconto = valor * 0.10;
    } else if (cupom === "DESC20" && valor >= 200) {
      desconto = valor * 0.20;
    } else if (cupom === "FRETEGRATIS") {
      desconto = 15;
    }
  
    return Math.min(desconto, valor);
  }