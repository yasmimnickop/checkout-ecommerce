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
   
  
 
    
function finalizarCompra(itens, codigoCupom) {
  
    
const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));
