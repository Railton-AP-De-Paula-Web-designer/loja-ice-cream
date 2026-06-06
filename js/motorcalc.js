// ==========================================================================
// 1. SELEÇÃO DE ELEMENTOS DO DOM
// ==========================================================================
const containerprodutos = document.querySelector('.container-produtos');
const totalPicolesDisplay = document.getElementById('total-picoles');
const valorTotalDisplay = document.getElementById('valor-total');
const btnCancelar = document.getElementById('cancelar-pedido');
const btnImprimir = document.getElementById('imprimir-pedido');

// ==========================================================================
// 2. ATUALIZAR RESUMO DO PEDIDO (CÁLCULO EM TEMPO REAL)
// ==========================================================================
function atualizarResumoPedido() {
    let totalItens = 0; // Corrigido o erro de digitação para bater com a soma abaixo
    let valorTotal = 0;

    // Varre todos os produtos na tela para somar as quantidades e valores
    document.querySelectorAll('.item-produto').forEach(produto => {
        const qtd = parseInt(produto.querySelector('.contador').innerText) || 0;
        const preco = parseFloat(produto.getAttribute('data-preco')) || 0;

        totalItens += qtd;
        valorTotal += (qtd * preco);
    });

    // Injeta os valores calculados mantendo o texto original do layout intacto
    if (totalPicolesDisplay) totalPicolesDisplay.innerText = totalItens;
    if (valorTotalDisplay) valorTotalDisplay.innerText = `Valor total: R$ ${valorTotal.toFixed(2)}`;
}

// ==========================================================================
// 3. EVENTOS DE CLIQUE (ADICIONAR E REMOVER PRODUTOS)
// ==========================================================================
if (containerprodutos) {
    containerprodutos.addEventListener('click', (e) => {
        const target = e.target;
        const item = target.closest('.item-produto');
        if (!item) return;

        const contadorelemento = item.querySelector('.contador');
        let quantidadeLocalNoCarrinho = parseInt(contadorelemento.innerText) || 0;

        // AÇÃO DE ADICIONAR (+) - Livre de travas
        if (target.classList.contains('btn-add')) {
            contadorelemento.innerText = quantidadeLocalNoCarrinho + 1;
        }
        // AÇÃO DE REMOVER (-) - Impede números negativos e corrige variáveis
        else if (target.classList.contains('btn-remove') && quantidadeLocalNoCarrinho > 0) {
            contadorelemento.innerText = quantidadeLocalNoCarrinho - 1;
        }
        
        // Atualiza a barra de resumo a cada clique
        atualizarResumoPedido();
    });
}

// ==========================================================================
// 4. BOTÃO CANCELAR PEDIDO (LIMPEZA LOCAL DA TELA)
// ==========================================================================
if (btnCancelar) {
    // Corrigido o addEventListener9 para addEventListener
    btnCancelar.addEventListener('click', () => {
        // Verifica se existe algum item no carrinho antes de perguntar
        let temItens = false;
        
        // Separada a linha fundida que quebrava a sintaxe
        document.querySelectorAll('.contador').forEach(c => {
            if (parseInt(c.innerText) > 0) temItens = true;
        });

        if (!temItens) return;

        if (confirm("Deseja realmente cancelar todo o seu pedido?")) {
            // Zera todos os contadores visualmente
            document.querySelectorAll('.contador').forEach(c => c.innerText = "0");
            // Atualiza o resumo da barra para R$ 0.00
            atualizarResumoPedido();
        }
    });
}

// ==========================================================================
// 5. BOTÃO IMPRIMIR (ENVIO DIRETO PARA O WHATSAPP DO DONO)
// ==========================================================================
if (btnImprimir) {
    btnImprimir.addEventListener('click', () => {
        let totalItensQtd = 0;
        
        if (totalPicolesDisplay) {
            // Corrigido totalItnsQtd para totalItensQtd
            totalItensQtd = parseInt(totalPicolesDisplay.innerText) || 0;
        }
        
        if (totalItensQtd === 0) {
            alert("O carrinho está vazio! Escolha os sabores antes de enviar.");
            return;
        }

        // Configuração do destino (Celular do empresário)
        const numeroTelefone = "5516996488910";
        let mensagem = `* NOVO PEDIDO - Distribuidora Vitoria*\n`;
        mensagem += `---------------------------\n`;

        // Coleta apenas os sabores que o cliente escolheu (quantidade > 0)
        document.querySelectorAll('.item-produto').forEach(produto => {
            const qtd = parseInt(produto.querySelector('.contador').innerText) || 0;
            const nome = produto.querySelector('.nome-produto').innerText.trim();
            if (qtd > 0) {
                // Corrigido mensage para mensagem
                mensagem += `  ${qtd}x ${nome}\n`;
            }
        });
        
        mensagem += `--------------------\n`;

        // Extrai o valor calculado para a mensagem do WhatsApp de forma limpa
        let textoTotal = "R$ 0.00";
        if (valorTotalDisplay) {
            textoTotal = valorTotalDisplay.innerText.replace("Valor total: ", "");
        }
        mensagem += `*Total: ${textoTotal}*`;

        // Gera a URL da API do WhatsApp com o texto escapado corretamente e remove espaço do http
        const linkZap = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

        // Abre o WhatsApp em uma nova aba
        window.open(linkZap, '_blank');

        // Limpa o carrinho após o envio para evitar pedidos duplicados
        document.querySelectorAll('.contador').forEach(c => c.innerText = "0");
        
        // Atualiza a barra inferior para zerar o painel visual também
        atualizarResumoPedido();
    });
}