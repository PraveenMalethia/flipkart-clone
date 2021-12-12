<template>
  <div class="px-16 py-4">
    <v-row>
      <v-col cols="12" sm="8" md="4">
        <v-card class="logo pa-4 d-flex justify-start hover">
        <v-avatar size="70px">
          <img
            v-if="message.avatar"
            alt="Avatar"
            src="/Avatar.png"
          />
          <v-icon v-else :color="message.color" v-text="message.icon"></v-icon>
        </v-avatar>
        <div class="ml-10 mt-2 flex justify-center ">
          <span >Hello,</span>
          <h4>Parveen Malethia</h4>
        </div>
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
  }),
}
</script>

<style></style>
