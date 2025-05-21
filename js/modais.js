/*!
 * Codigo para abrir modais de outra página
 * com base na URL.
 */

function carregarModal(modalId) {
    fetch('pages/modais.html')
        .then(response => response.text())
        .then(data => {
            let modalContainer = document.getElementById('modalContainer');
            modalContainer.innerHTML = data; // Insere o conteúdo da página de modais
            let modalElement = document.getElementById(modalId);
            if (modalElement) {
                new bootstrap.Modal(modalElement).show();
            } else {
                console.error("Modal não encontrado: " + modalId);
            }
        });
}

