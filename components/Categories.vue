<template>
  <v-sheet class="mx-auto" elevation="0">
    <v-slide-group v-model="model" class="pa-2" active-class="success">
      <v-slide-item v-for="(item, i) in categories" :key="i">
        <v-card link class="justify-center ma-1">
          <v-img
            :src="item.image"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="100%"
            width="200px"
          >
            <v-card-title v-text="item.name"></v-card-title>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null,
    loading: false,
    categories: [
      {
        name: 'Grocery',
        image: '/grocery.png',
      },
      {
        name: 'Mobiles',
        image: '/mobiles.png',
      },
      {
        name: 'Fashion',
        image: '/clothes.png',
      },
      {
        name: 'Kitchen',
        image: '/grocery.png',
      },
      {
        name: 'Fast Food',
        image: '/grocery.png',
      },
    ],
    time: new Date().toLocaleTimeString(),
  }),
  created() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString()
    }, 1000)
  },
}
</script>

<style></style>
