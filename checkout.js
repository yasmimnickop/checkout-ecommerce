function calcularSubtotal(itens) {
    let subtotal = 0;
    fot (let i = 0; i < itens length; i++) {
        subtotal += itens[i].preco * itens[i].quantidade;
    }
    return subtotal;
}
  
function contarItens(itens) {

}
    
function aplicarCupom(subtotal, codigo) {

}
    
function finalizarCompra(itens, codigoCupom) {
    return { subtotal: 0, desconto: 0, total: 0 };
}
    
const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));