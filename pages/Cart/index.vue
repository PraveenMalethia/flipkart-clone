<template>
  <div class="px-2">
    <v-row :class="`mt-2 ${$vuetify.breakpoint.xs ? '' : 'ml-10'}`">
      <v-col cols="12" sm="12" md="8">
        <v-toolbar dense rounded elevation="0">
          <v-toolbar-title>Cart</v-toolbar-title>
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
            <v-btn depressed outlined color="red" dark>
              <v-icon>mdi-delete-outline</v-icon>
              Delete all
            </v-btn>
          </v-toolbar>
          <v-container fluid>
            <v-row dense>
              <v-col v-for="card in cards" :key="card.title" cols="12">
                <v-card>
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                  </v-img>
                  <v-card-actions>
                    <span class="ml-4">Product Name {{ card.title }}</span>
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
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-list>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <!-- <v-card class="logo py-10 d-flex justify-center"> </v-card> -->
        <v-card :loading="loading" class="mx-auto my-7" max-width="400">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
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
            <v-btn color="deep-purple lighten-2" text @click="reserve">
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
    items: [
      { header: 'Today' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
    loading: false,
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
<style></style>
