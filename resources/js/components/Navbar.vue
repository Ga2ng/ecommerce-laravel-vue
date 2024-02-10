<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <router-link class="navbar-brand fw-bold" to="/">G-Shoes</router-link>
            <button class="navbar-toggler" type="button" @click="toggleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{ show: isOpen }">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/shop"
                        >Shop</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about"
                        >About</router-link
                        >
                    </li>
                    <li>
                        <NotifCart />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            // cartNotification: 0,
        };
    },
    // computed: {
    //     showCartIcon() {
    //         // Return true jika bukan halaman home
    //         return this.$route.path !== "/";
    //     },
    // },
    methods: {
        toggleNavbar() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
</style>
