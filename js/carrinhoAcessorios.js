// Definir variáveis universais                                                                                                               
var valorTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var valorProduto = [0,  50, 70, 36, 65, 20, 26, 28, 30, 70, 80, 100, 830, 550, 650, 720, 830, 690, 850, 960, 2900, 480, 550, 690, 650];                                                                           
var qtd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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