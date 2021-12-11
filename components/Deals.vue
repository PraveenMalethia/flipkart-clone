<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense>
      <v-toolbar-title>Deals of the day </v-toolbar-title>
      <v-icon class="ml-2"> mdi-clock </v-icon>
      <span class="ml-2">{{ time }}</span>
      <v-spacer></v-spacer>
      <v-btn depressed> View All </v-btn>
    </v-toolbar>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="3" v-for="i in 10" :key="i">
        <Product />
      </v-col>
    </v-row>
    <template>
      <div class="text-center mt-7">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      page:1,
      
    }
  },
  
}
</script>
