<template>
    <div class="cart-page mt-5">
        <div v-if="combinedData.length > 0" class="cart-items">
            <CartItem
                v-for="(item, index) in combinedData"
                :key="index"
                :product="item"
                :quantity="item.quantity"
                :totalPrice="item.totalPrice"
                @increment="incrementQuantity(index)"
                @decrement="decrementQuantity(index)"
                @remove="removeItem(index)"
            />
        </div>

        <div v-else>
            <p
                class="empty d-flex justify-content-center align-items-center fw-bold"
            >
                Cart is empty.
            </p>
        </div>

        <div class="d-flex justify-content-between">
            <div v-if="cartItems && cartItems.length > 0" class="total-price">
                Total Price: IDR {{ formatPrice(total) }},-
            </div>
            <div>
                <ButtonState
                    class="bg-success"
                    :onClick="showCheckoutPopup"
                    label="Checkout"
                ></ButtonState>
            </div>
        </div>
        <!-- <div>
          {{ cartItems }}
      </div> -->
    </div>
    <PopUpCheckout v-if="showPopup" @close="closePopup" :totalPrice="total" />
</template>

<script>
import { mapState } from "vuex";
import { cardsData } from "../data/cardsData";

export default {
    data() {
        return {
            showPopup: false,
        };
    },
    methods: {
        showCheckoutPopup() {
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
        },
        incrementQuantity(index) {
            this.cartItems[index].quantity++;
        },
        decrementQuantity(index) {
            if (this.cartItems[index].quantity > 1) {
                this.cartItems[index].quantity--;
            }
        },
        removeItem(index) {
            this.cartItems.splice(index, 1);
        },
        formatPrice(price) {
            // Format angka dengan tanda . setiap 3 angka
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
    },
    computed: {
        ...mapState({
            cartItems: (state) => state.cartNotif.cartItems,
        }),
        combinedData() {
            if (
                this.cartItems &&
                Array.isArray(this.cartItems) &&
                this.cartItems.length > 0
            ) {
                return this.cartItems
                    .map((item) => {
                        const productData = cardsData.find(
                            (product) => product.id === item.id
                        );
                        if (productData) {
                            const totalPrice =
                                item.quantity * productData.price;
                            return {
                                ...productData,
                                quantity: item.quantity,
                                totalPrice: totalPrice,
                            };
                        } else {
                            return null;
                        }
                    })
                    .filter((item) => item !== null);
            } else {
                return [];
            }
        },
        total() {
            return this.combinedData.reduce(
                (acc, item) => acc + item.totalPrice,
                0
            );
        },
    },
};
</script>

<style scoped>
.empty {
    height: 80vh;
    font-size: 30px;
}

.cart-page {
    padding: 20px;
}

.cart-items {
    margin-bottom: 20px;
}

.total-price {
    font-weight: bold;
}
</style>
