<template>
  <div class="pa-2">
    <!-- <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="12">
        <v-card class="logo py-4 d-flex justify-center"> </v-card>
      </v-col>
    </v-row> -->
    <Categories />
    <Carousel />
    <Deals />
    <Clothing />
    <FastFood />
    <Smartphones />
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
    page: 1,
    loading: false,
    time: new Date().toLocaleTimeString(),
  }),
}
</script>
