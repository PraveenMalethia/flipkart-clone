<template>
  <div class="px-7 py-4">
    <v-row>
      <v-col cols="12" sm="8" md="4">
        <v-card class="logo pa-4 d-flex justify-start hover">
          <v-avatar size="70px">
            <img v-if="message.avatar" alt="Avatar" src="/Avatar.png" />
            <v-icon
              v-else
              :color="message.color"
              v-text="message.icon"
            ></v-icon>
          </v-avatar>
          <div class="ml-10 mt-2 flex justify-center">
            <span>Hello,</span>
            <h4>Parveen Malethia</h4>
          </div>
        </v-card>
        <v-card class="mt-4" tile>
          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item link v-for="child in item.items" :key="child.title">
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: {
      avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
      name: 'John Leider',
      title: 'Welcome to Vuetify!',
      excerpt: 'Thank you for joining our community...',
    },
    items: [
      {
        action: 'mdi-bookmark-outline',
        items: [{ title: 'All Orders' }, { title: 'Pending Orders' }],
        title: 'MY ORDERS',
      },
      {
        action: 'mdi-account-outline',
        active: true,
        items: [
          { title: 'Profile Information' },
          { title: 'Manage Address' },
        ],
        title: 'ACCOUNT SETTINGS',
      },
      {
        action: 'mdi-currency-inr',
        items: [{ title: 'Saved UPI' },{title: 'Saved Cards'}],
        title: 'PAYMENTS',
      },
      {
        action: 'mdi-folder-account',
        items: [{ title: 'My Reviews and ratings' },{title: 'All Notifications'},{title: 'My Wishlist'}],
        title: 'MY STUFF',
      },
    ],
  }),
}
</script>

<style></style>
