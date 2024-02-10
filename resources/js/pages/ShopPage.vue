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
import { cardsData } from "../data/cardsData";

export default {
    data() {
        return {
            cards: cardsData,
        };
    },
    methods: {
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
