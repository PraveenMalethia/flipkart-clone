<template>
  <v-row justify="center" class="my-1" align="center">
    <v-col v-for="i in 6" :key="i" cols="6" xs="1" sm="2" md="3" lg="2">
      <v-card elevation="10" link class="d-flex justify-center">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="150px"
          width="150px"
        >
          <v-card-title v-text="'Category'+i"></v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style></style>
