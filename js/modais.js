/*!
 * Codigo para abrir modais de outra página
 * com base na URL.
 */

function carregarModal(modalId) {
    fetch('pages/modais.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalContainer').innerHTML = data;
            let modalElement = document.getElementById(modalId);
            new bootstrap.Modal(modalElement).show();
        });
}
