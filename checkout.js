function calcularSubtotal(itens) {
    return itens.reduce((total, item) => {
        return total + (item.preco * item.quantidade);
    }, 0);
}
  
function contarItens(itens) {
    return itens.reduce((total, item) => {
        return total + item.quantidade;
    }, 0);
}

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

  function finalizarCompra(itens, codigoCupom) {
    const subtotal = calcularSubtotal(itens);
    const desconto = aplicarCupom(subtotal, codigoCupom);
    const total = Math.max(0, subtotal - desconto);
  
    return { subtotal, desconto, total };
  }
        
const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));
