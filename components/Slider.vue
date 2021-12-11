<template>
  <v-sheet class="mx-auto" elevation="0">
    <v-toolbar dense>
      <v-toolbar-title>Deals of the day </v-toolbar-title>
      <v-icon class="ml-2"> mdi-clock </v-icon>
      <span class="ml-2">{{ time }}</span>
      <v-spacer></v-spacer>
      <v-btn depressed> View All </v-btn>
    </v-toolbar>
    <v-slide-group v-model="model" class="pa-2" active-class="success">
      <v-slide-item v-for="n in 15" :key="n">
        <Product />
        <!-- <v-card class="ma-1" >
          
        </v-card> -->
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null,
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
