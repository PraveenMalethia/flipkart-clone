<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list dense nav>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Basketiya
          </v-list-item-title>
          <v-list-item-subtitle>
            Your Nearby Store
          </v-list-item-subtitle>
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
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
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
        label="What state are you from?"
        solo-inverted
      ></v-autocomplete>
      <v-spacer />
      <v-btn depressed :icon="$vuetify.breakpoint.sm" class="mr-2">
        <v-icon>mdi-login</v-icon> <span class="hidden-sm-only hidden-xs-only">Login</span>
      </v-btn>
      <v-btn depressed :icon="$vuetify.breakpoint.sm" class="mr-2">
        <v-icon>mdi-account</v-icon><span class="hidden-sm-only hidden-xs-only">Account</span>
      </v-btn>
      <v-btn depressed :icon="$vuetify.breakpoint.sm" class="mr-2">
        <v-icon>mdi-cart</v-icon><span class="hidden-sm-only hidden-xs-only">Cart</span>
      </v-btn>
    </v-app-bar>
    <v-main>
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
      Menus: [
        {
          title: 'Home',
          icon: 'mdi-home',
          to: '/',
        },
        {
          title: 'About',
          icon: 'mdi-account',
          to: '/about',
        },
        {
          title: 'Contact',
          icon: 'mdi-email',
          to: '/contact',
        },
        {
          title: 'Cart',
          icon: 'mdi-cart',
          to: '/cart',
        },
      ],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
      ],
      miniVariant: false,
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
