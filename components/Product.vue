<template>
  <v-hover v-slot="{ hover }" class="mt-2 ma-1">
    <v-card
      class="ma-1"
      color="grey lighten-4"
      elevation="0"
      height="250"
      width="200"
    >
      <v-img :aspect-ratio="16 / 14" :src="product_image">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-3 v-card--reveal text-h6 white--text"
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
          depressed
          :loading="loading"
        >
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
        <nuxt-link to="/Product/1">
          <div class="font-weight-light black--text font-bold mb-2">
            {{ product_image == 'feature4.jpg' ? 'Iphone' : 'Designer Shoes' }}
          </div>
          <p class="font-weight-bold green--text mb-2">30% off</p>
        </nuxt-link>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    product_image: {
      type: String,
      default: '',
    },
  },
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
  opacity: 0.6;
  position: absolute;
  width: 100%;
}
a {
  text-decoration: none;
}
</style>
