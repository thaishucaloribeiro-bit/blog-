document.addEventListener('DOMContentLoaded', () => {
    const botaoCurtir = document.getElementById('btnCurtir');
    const textoCurtir = document.getElementById('textoCurtir');

    botaoCurtir.addEventListener('click', () => {
        // Alterna a classe 'curtido' (adiciona se não existir, remove se existir)
        botaoCurtir.classList.toggle('curtido');

        // Atualiza o texto dinamicamente
        if (botaoCurtir.classList.contains('curtido')) {
            textoCurtir.textContent = 'Curtido!';
        } else {
            textoCurtir.textContent = 'Curtir Artigo';
        }
    });
});