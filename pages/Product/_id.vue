<template>
  <div class="container mt-10">
    <v-row>
      <v-col cols="12" sm="12" md="5">
        <v-card elevation="0">
          <template>
            <v-carousel hide-delimiter-background :show-arrows="false">
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="7">
        <v-breadcrumbs :items="breadCrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <div class="ms-7">
          <h2 class="black--text font-weight-regular">
            Apple iPhone 12 (Pacific Blue , 256 GB)
          </h2>
          <v-btn small elevation="0" class="black--text">
            4 <v-icon color="yellow darken-2">mdi-star</v-icon>
          </v-btn>
          <span>1,036 Ratings & 71 Reviews</span>
          <h1 class="mt-4 mb-4">₹ 1,19,900</h1>
          <div>
            <h3 class="gray--text">Highlights</h3>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'SmaprtPhones',
          disabled: false,
          href: '/Smartphones',
        },
        {
          text: 'Apple Iphone 12',
          disabled: true,
          href: '/Product2',
        },
      ],
      items: [
        {
          src: '/iphone1.jfif',
        },
        {
          src: '/iphone1.jfif',
        },
        {
          src: '/iphone1.jfif',
        },
        {
          src: '/iphone1.jfif',
        },
      ],
    }
  },
}
</script>

<style></style>
