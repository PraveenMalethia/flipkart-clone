<template>
  <v-hover v-slot="{ hover }" class="mt-2 ma-1">
    <v-card class="ma-1" color="grey lighten-4" height="250" width="200">
      <v-img
        :aspect-ratio="16 / 14"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out grey darken-3 v-card--reveal text-h6 white--text"
            style="height: 100%"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text style="position: relative">
        <v-btn
          absolute
          color="blue darken-2"
          class="white--text"
          fab
          @click="AddToCart"
          right
          top
          small
          :loading="loading"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text font-bold mb-2">
          Designer back cover
        </div>
        <p class=" font-weight-light black--text mb-2">
          30% off
        </p>
        <!-- <div class="font-weight-light text-sm mb-2">
          Our Vintage kitchen utensils delight any chef.<br />
          Made of bamboo by hand
        </div> -->
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    AddToCart() {
      this.loading = true
      this.snackbar = true
      setInterval(() => {
        this.loading = false
        this.snackbar = false
      }, 3000)
    },
  },
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
