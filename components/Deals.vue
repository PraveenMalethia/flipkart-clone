<template>
  <div class="mt-2">
    <v-toolbar dense rounded elevation="0">
      <v-toolbar-title>Deals of the day </v-toolbar-title>
      <v-icon class="ml-2"> mdi-clock-outline</v-icon>
      <span class="ml-2">{{ time }}</span>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" outlined>View All</v-btn>
    </v-toolbar>
    <v-slide-group v-model="model" class="pa-2" active-class="success">
      <v-slide-item v-for="n in 15" :key="n">
        <Product />
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    page: 1,
    loading: false,
    time: new Date().toLocaleTimeString(),
  }),
  created() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString()
    }, 1000)
  },
}
</script>
