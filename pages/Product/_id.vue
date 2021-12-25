<template>
  <div class="container mt-10">
    <v-row>
      <v-col cols="12" sm="12" md="5">
        <v-card elevation="0" class="fixed">
          <template>
            <v-carousel hide-delimiter-background :show-arrows="false">
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </template>
          <v-card-actions v-show="!$vuetify.breakpoint.xs">
            <v-spacer />
            <v-btn
              :loading="loading1"
              color="primary lighten-1"
              large
              @click="AddToCart"
            >
              <v-icon left>mdi-cart-outline</v-icon>
              Add To Cart
            </v-btn>
            <v-btn
              :loading="loading2"
              color="primary darken-1"
              large
              @click="BuyNow"
            >
              <v-icon left>mdi-flash-outline</v-icon>
              <span class="mr-5"> Buy Now</span>
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="7">
        <v-breadcrumbs :items="breadCrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <div class="ms-7">
          <h2 class="font-weight-regular">
            Apple iPhone 12 (Pacific Blue , 256 GB)
          </h2>
          <v-btn small elevation="0">
            4 <v-icon color="yellow darken-2">mdi-star</v-icon>
          </v-btn>
          <span>1,036 Ratings & 71 Reviews</span>
          <h1 class="mt-4 mb-4">
            ₹ 1,19,900
            <v-chip class="ma-2" color="teal" text-color="white">
              <v-avatar left>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              In Stock
            </v-chip>
          </h1>
          <div>
            <h3 class="grey--text">Description :</h3>
            <div :class="!$vuetify.breakpoint.xs && 'ml-10'">
              <ul>
                <li class="mt-2">64 GB ROM</li>
                <li class="mt-2">
                  13.72 cm (5.4 inch) Super Retina XDR Display
                </li>
                <li class="mt-2">12MP + 12MP | 12MP Front Camera</li>
                <li class="mt-2">
                  A14 Bionic Chip with Next Generation Neural Engine Processor
                </li>
                <li class="mt-2">Ceramic Shield</li>
                <li class="mt-2">Industry-leading IP68 Water Resistance</li>
                <li class="mt-2">All Screen OLED Display</li>
                <li class="mt-2">
                  12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision
                  HDR Recording
                </li>
              </ul>
            </div>
          </div>
        </div>
          <v-card class="mt-10">
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-toolbar-title class="text-h6 pl-0">
                Ratings and reviews
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn text>
                Rate Product
                <v-icon right color="yellow darken-2">mdi-star</v-icon>
              </v-btn>
            </v-app-bar>
            <v-list three-line>
              <template v-for="(item, index) in ratings">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>
                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
      </v-col>
    </v-row>
    <v-footer v-if="$vuetify.breakpoint.xs" app bottom fixed padless>
      <v-bottom-navigation background-color="primary" dark>
        <v-spacer />
        <v-btn :loading="loading1" @click="AddToCart">
          <span>Add to cart</span>
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn :loading="loading2" @click="BuyNow">
          <span>Buy Now</span>
          <v-icon>mdi-flash-outline</v-icon>
        </v-btn>
        <v-spacer />
      </v-bottom-navigation>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      breadCrumbs: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'SmaprtPhones',
          disabled: false,
          href: '/Smartphones',
        },
        {
          text: 'Apple Iphone 12',
          disabled: true,
          href: '/Product2',
        },
      ],
      items: [
        {
          src: '/iphone1.jfif',
        },
        {
          src: '/iphone1.jfif',
        },
        {
          src: '/iphone1.jfif',
        },
        {
          src: '/iphone1.jfif',
        },
      ],
      ratings: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Praveen Malethia',
          subtitle: "Awesome Product",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Alex',
          subtitle: `I'm a very positive about this product.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Alex',
          subtitle: `I'm a very positive about this product.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Alex',
          subtitle: `I'm a very positive about this product.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Alex',
          subtitle: `I'm a very positive about this product.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Alex',
          subtitle: `I'm a very positive about this product.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Alex',
          subtitle: `I'm a very positive about this product.`,
        },
      ],
    }
  },
  methods: {
    AddToCart() {
      this.loading1 = true
      setTimeout(() => {
        this.loading1 = false
      }, 500)
    },
    BuyNow() {
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false
      }, 500)
    },
  },
}
</script>

<style>
.fixed {
  position: sticky;
  top: 0;
  z-index: 0;
}</style>
