<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense nav>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Basketiya </v-list-item-title>
            <v-list-item-subtitle> Your Nearby Store </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-switch
              v-model="$vuetify.theme.dark"
              inset
              class="mt-5 ml-10"
              label="Dark Mode"
            ></v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action dense>
            <v-badge
              v-if="item.icon === 'mdi-cart-outline'"
              color="blue"
              content="6"
              class="ml-2 mt-1"
            >
            </v-badge>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="red" dark> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      elevate-on-scroll
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="searchItems"
        :search-input.sync="search"
        cache-items
        class="mx-4 hidden-sm-only hidden-xs-only"
        flat
        hide-no-data
        hide-details
        label="Search for Products , Brands and more"
        solo-inverted
      ></v-autocomplete>
      <v-spacer />
      <v-btn text :icon="$vuetify.breakpoint.xs" class="mr-2">
        <v-icon>mdi-login</v-icon>
        <span class="hidden-sm-only hidden-xs-only">Login</span>
      </v-btn>
      <v-btn
        link
        to="/Profile"
        text
        :icon="$vuetify.breakpoint.xs"
        class="mr-2"
      >
        <v-icon>mdi-account-outline</v-icon
        ><span class="hidden-sm-only hidden-xs-only">Account</span>
      </v-btn>
      <v-btn link to="/Cart" text :icon="$vuetify.breakpoint.xs" class="mr-2">
        <v-icon>mdi-cart-outline</v-icon
        ><span class="hidden-sm-only hidden-xs-only">Cart</span>
        <v-badge color="blue" content="6" class="ml-2"> </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-snackbar :timeout="-1" rounded="pill" top v-model="$nuxt.isOffline">
        You are Offline
      </v-snackbar>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      searchItems: [],
      selectedItem: 1,
      search: null,
      select: null,
      states: ['Apple', 'Samsung', 'Panasonic', 'Unilever', 'Nestle'],
      drawer: false,
      items: [
        {
          icon: 'mdi-home-outline',
          title: 'Home',
          to: '/',
        },
        {
          title: 'Cart',
          icon: 'mdi-cart-outline',
          to: '/Cart',
        },
        {
          title: 'My Orders',
          icon: 'mdi-bookmark-outline',
          to: '/MyOrders',
        },
        {
          title: 'Wish List',
          icon: 'mdi-heart-outline',
          to: '/Wishlist',
        },
        {
          title: 'Contact',
          icon: 'mdi-email-outline',
          to: '/Contact',
        },
        {
          title: 'About',
          icon: 'mdi-account-outline',
          to: '/About',
        },
      ],
      rightDrawer: false,
      title: 'Basketiya',
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.searchItems = this.states.filter((e) => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>
