<template>
    <div id="main" class="container">
        <div class="row justify-content-start">
            <div
                class="col-lg-3 col-md-6 mb-4 mb-lg-0 col-sm-6 d-flex align-items-center"
                v-for="card in cards"
                :key="card.id"
            >
                <Card
                    :brandName="card.brandName"
                    :imageSrc="card.imageSrc"
                    :price="card.price"
                    @click="handleCardClick(card.id)"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [], // Inisialisasi cards sebagai array kosong
        };
    },
    created() {
        this.getAllData(); // Panggil method untuk mengambil data saat komponen dibuat
    },
    methods: {
        async getAllData() {
            try {
                let response = await this.$store.dispatch("getAllData");
                // Mengisi cards dengan data dari respons server
                this.cards = response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
                // Tambahkan penanganan kesalahan jika diperlukan
            }
        },
        handleCardClick(cardId) {
            // Mengirim notifikasi dengan id kartu yang diklik
            console.log(`${cardId}`);
            this.$store.dispatch("updateCartNotification", cardId);
        },
    },
};
</script>

<style>
#main {
    margin-top: 80px;
}
</style>
