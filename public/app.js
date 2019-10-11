document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ua-UA', {
        currency: 'grn',
        style: 'currency'
    }).format(node.textContent)
})