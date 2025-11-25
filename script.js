// Sama seperti sebelumnya (fungsi tombol "Beli Sekarang")
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Fitur ini belum tersedia. Silakan hubungi admin via WhatsApp.');
    });
});
