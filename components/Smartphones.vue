<template>
  <v-sheet class="mx-auto" elevation="0">
    <v-toolbar dense rounded elevation="0">
      <v-toolbar-title>Smartphones </v-toolbar-title>
      <v-icon class="ml-2"> mdi-cellphone</v-icon>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" outlined> View All<v-icon>mdi-chevron-right</v-icon> </v-btn>
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
    page:1,
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
