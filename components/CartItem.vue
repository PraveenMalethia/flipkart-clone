<template>
  <v-card class="ml-7 mt-4" elevation="0">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5" v-text="item.title"></v-card-title>
        <v-card-subtitle
          class="green--text text-h6 font-weight-bold"
          v-text="`₹ ${price}00`"
        ></v-card-subtitle>
        <v-card-actions>
          <v-spacer />
          <v-btn :loading="remove" @click="Remove" icon outlined>
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span class="ml-4 mr-4">{{ quantity }}</span>
          <v-btn :loading="add" @click="Add" icon outlined>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="red">mdi-delete-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="125" tile>
        <v-img class="rounded" src="/feature4.jpg"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    add: false,
    remove: false,
    delete: false,
    quantity: 1,
  }),
  methods: {
    Add() {
      this.add = true
      setTimeout(() => {
        this.add = false
        this.quantity = this.quantity + 1
      }, 500)
    },
    Remove() {
      this.remove = true
      setTimeout(() => {
        this.quantity = this.quantity - 1
        this.remove = false
      }, 500)
    },
  },
}
</script>

<style></style>
