<template>
  <div class="pa-2">
    <Categories />
    <Carousel />
    <!-- <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="12">
        <v-card class="logo py-4 d-flex justify-center"> </v-card>
      </v-col>
    </v-row> -->
    <Deals />
    <Clothing />
    <FastFood />
    <Kitchen />
    <template>
      <div class="text-center mt-7">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    page:1,
    loading: false,
    time: new Date().toLocaleTimeString(),
  }),
}
</script>
