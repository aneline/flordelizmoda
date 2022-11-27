// Definir variáveis universais                                                                                                               
var valorTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var valorProduto = [0, 160, 150, 200, 180, 170, 200, 200, 210, 180, 150, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 130, 150, 130, 130, 130, 145, 130, 130, 140, 130, 130, 100, 125, 130, 130, 100, 130, 100, 120, 125, 130, 100, 100];                                                                           
var qtd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Aumentar a quantidade de itens de um produto
function adicionarItem(item) {
	var quantidade = document.getElementById('quantidade' + item);
	var total = document.getElementById('total' + item);
	qtd[item] += 1;
	valorTotal[item] = valorProduto[item] * qtd[item];
	quantidade.innerHTML = qtd[item];
	total.innerHTML = valorTotal[item].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
	console.log(quantidade);
	valorCompra();
}

// Diminuir a quantidade de itens de um produto
function removerItem(item) {
	if (qtd[item] > 0) {
		qtd[item] -= 1;
		var quantidade = document.getElementById('quantidade' + item);
		var total = document.getElementById('total' + item);
		quantidade.innerHTML = qtd[item];
		valorTotal[item] = valorProduto[item] * qtd[item];
		total.innerHTML = valorTotal[item];
		valorCompra();
	}
}

// Calcular o valor total da compra
function valorCompra() {
	var valorTotalCompra = document.getElementById('valorTotalCompra');
	var valor = 0;;
	for (var i = 0; i < valorTotal.length; i++) {
		valor += valorTotal[i];
	}
	valorTotalCompra.innerHTML = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	console.log(valorTotal.length);
}


// Finalizar a compra e zerar os valores
function finalizarCompra() {
	var nome = document.getElementById('nome').innerHTML;
	alert('Obrigada pela compra, ' + nome + '!');
	document.location.reload(true);
}