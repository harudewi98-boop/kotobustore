// 1. Fungsi Ganti Kategori
const categoryButtons = document.querySelectorAll('.category-btn');
const bbcoinPackages = document.getElementById('bbcoinPackages');
const skinsPackages = document.getElementById('skinsPackages');
const charismaPackages = document.getElementById('charismaPackages');
const modalTitle = document.getElementById('modalTitle');
const ringkasanTipe = document.getElementById('ringkasan_tipe');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus status aktif dari semua tombol
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Sembunyikan semua konten paket
        bbcoinPackages.style.display = 'none';
        skinsPackages.style.display = 'none';
        charismaPackages.style.display = 'none';

        // Tampilkan konten & update judul modal sesuai kategori
        const category = button.dataset.category;
        if (category === 'bbcoin') {
            bbcoinPackages.style.display = 'block';
            modalTitle.textContent = 'Top Up BBC';
            ringkasanTipe.textContent = 'BBC';
        } else if (category === 'skins') {
            skinsPackages.style.display = 'block';
            modalTitle.textContent = 'Beli Skin/Item';
            ringkasanTipe.textContent = 'Skin/Item';
        } else if (category === 'charisma') {
            charismaPackages.style.display = 'block';
            modalTitle.textContent = 'Top Up Charisma';
            ringkasanTipe.textContent = 'Charisma';
        }
    });
});

// 2. Fungsi Tombol Beli Sekarang
const buyButtons = document.querySelectorAll('.buy-btn');
const modal = document.getElementById('topupModal');
const closeBtn = document.querySelector('.close');
const ringkasanPaket = document.getElementById('ringkasan_paket');
const ringkasanHarga = document.getElementById('ringkasan_harga');
const qrisBtn = document.querySelector('.qris-btn');

// Input Form
const idMlbb = document.getElementById('id_mlbb');
const idServer = document.getElementById('id_server');
const nickname = document.getElementById('nickname');
const whatsapp = document.getElementById('whatsapp');

// Ringkasan Input
const ringkasanIdMlbb = document.getElementById('ringkasan_id_mlbb');
const ringkasanIdServer = document.getElementById('ringkasan_id_server');
const ringkasanNickname = document.getElementById('ringkasan_nickname');

// Tampilkan modal saat tombol beli diklik
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ambil data paket & harga
        const packageName = button.dataset.paket;
        const price = button.dataset.harga;

        // Update ringkasan pesanan
        ringkasanPaket.textContent = packageName;
        ringkasanHarga.textContent = price;

        // Update tipe berdasarkan kategori aktif
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        if (activeCategory === 'bbcoin') ringkasanTipe.textContent = 'BBC';
        else if (activeCategory === 'skins') ringkasanTipe.textContent = 'Skin/Item';
        else if (activeCategory === 'charisma') ringkasanTipe.textContent = 'Charisma';

        // Tampilkan modal
        modal.style.display = 'block';
    });
});

// Tutup modal saat tombol X diklik
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tutup modal saat klik di luar area modal
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Update ringkasan input saat form diisi
idMlbb.addEventListener('input', () => ringkasanIdMlbb.textContent = idMlbb.value || '-');
idServer.addEventListener('input', () => ringkasanIdServer.textContent = idServer.value || '-');
nickname.addEventListener('input', () => ringkasanNickname.textContent = nickname.value || '-');

// Fungsi Bayar dengan QRIS (buka WhatsApp)
qrisBtn.addEventListener('click', () => {
    // Validasi form
    if (!idMlbb.value || !idServer.value || !nickname.value || !whatsapp.value) {
        alert('Harap isi semua data form terlebih dahulu!');
        return;
    }

    // Buat pesan WhatsApp
    const pesan = `Halo, saya ingin memesan:\n` +
        `• Paket: ${ringkasanPaket.textContent}\n` +
        `• Harga: ${ringkasanHarga.textContent}\n` +
        `• Tipe: ${ringkasanTipe.textContent}\n` +
        `• ID MLBB: ${idMlbb.value}\n` +
        `• ID Server: ${idServer.value}\n` +
        `• Nickname: ${nickname.value}\n` +
        `• No WA: ${whatsapp.value}\n` +
        `Silakan kirim instruksi pembayaran QRIS.`;

    // Buka WhatsApp
    window.open(`https://wa.me/6282234691398?text=${encodeURIComponent(pesan)}`, '_blank');

    // Tutup modal
    modal.style.display = 'none';
});
