<template>
  <div class="px-2">
    <v-row :class="`mt-2 ${$vuetify.breakpoint.xs ? '' : 'ml-10'}`">
      <v-col cols="12" sm="12" md="8">
        <v-toolbar dense rounded elevation="0">
          <v-toolbar-title v-if="!$vuetify.breakpoint.xs">Cart</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon class="mr-2"> mdi-truck-outline</v-icon>
          <span class="mr-4">Deliver to</span>
          <v-select
            v-model="e2"
            :items="states"
            menu-props="auto"
            hide-details
            label="Select"
            single-line
          ></v-select>
        </v-toolbar>
        <v-list three-line>
          <v-toolbar elevation="0">
            <v-toolbar-title>Cart Items</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn :loading="deleting_all" @click="DeleteAll" depressed outlined color="red" dark>
              <v-icon>mdi-delete-outline</v-icon>
              Delete all
            </v-btn>
          </v-toolbar>
          <v-container fluid>
            <v-row dense>
              <v-card class="mx-auto mt-4" v-for="i in 6" :key="i" elevation="0">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="item.title"
                    ></v-card-title>
                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn icon outlined>
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      <span class="ml-4 mr-4">5</span>
                      <v-btn icon outlined>
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon color="red">mdi-delete-outline</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </div>
                  <v-avatar class="ma-3" size="125" tile>
                    <v-img class="rounded" src="/feature4.jpg"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-row>
          </v-container>
        </v-list>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <!-- <v-card class="logo py-10 d-flex justify-center"> </v-card> -->
        <v-card :loading="loading" class="mx-auto my-7" max-width="400">
          <template slot="progress">
            <v-progress-linear
              color="primary"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-card-title>PRICE DETAILS</v-card-title>
          <v-divider></v-divider>
          <v-card-title>Price (2 items)</v-card-title>
          <v-card-title>Discount</v-card-title>
          <v-card-title>Delivery Charges</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Total Amount</v-card-title>
          <v-card-actions>
            <v-btn color="primary darken-1" block large @click="reserve">
              <v-icon class="mr-2">mdi-check</v-icon>
              Place Order
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <v-row align="center" class="pa-4">
              <div class="grey--text ms-4">
                Safe and Secure Payments.Easy returns.100% Authentic products.
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-2"> </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    deleting_all:false,
    e2: 'Texas',
    states: ['Churiwala Dhanna', 'Luxury PG'],
    cards: [
      {
        title: 'Pre-fab homes',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      },
      {
        title: 'Favorite road trips',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      },
      {
        title: 'Best airlines',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      },
    ],
    item: {
      src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      title: 'Halcyon Days',
      artist: 'Ellie Goulding',
    },
    loading: false,
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    DeleteAll(){
      this.deleting_all = true
      setTimeout(() => (this.deleting_all = false), 2000)
    }
  },
}
</script>
<style></style>
