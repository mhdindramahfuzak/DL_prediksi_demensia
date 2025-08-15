document.addEventListener('DOMContentLoaded', () => {

    // Fungsi untuk membuka modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex'; // Gunakan flex untuk memusatkan konten
        }
    }

    // Fungsi untuk menutup modal
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Menambahkan event listener ke semua gambar yang bisa diklik
    document.getElementById('imgLoss').addEventListener('click', () => openModal('modalLoss'));
    document.getElementById('imgEval').addEventListener('click', () => openModal('modalEval'));
    document.getElementById('imgPrediksi').addEventListener('click', () => openModal('modalPrediksi'));
    
    // BARIS BARU YANG DITAMBAHKAN
    document.getElementById('imgTrend').addEventListener('click', () => openModal('modalTrend'));

    // Menambahkan event listener ke semua tombol close
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', (event) => {
            const modal = event.target.closest('.modal-backdrop');
            closeModal(modal);
        });
    });

    // Menambahkan event listener untuk menutup modal saat mengklik di luar konten
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', (event) => {
            if (event.target === backdrop) {
                closeModal(backdrop);
            }
        });
    });

});