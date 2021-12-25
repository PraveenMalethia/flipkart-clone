export const state = () => {
  return {
    categories: [],
    products: [],
    cart: [],
    brands: [],
  }
}

export const getters = {
  categories: (state) => state.categories,
  products: (state) => state.products,
  cart: (state) => state.cart,
  brands: (state) => state.brands,
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_CART(state, cart) {
    state.cart = cart
  },
  SET_BRANDS(state, brands) {
    state.brands = brands
  },
}

export const actions = {
  async fetchCategories({ commit }) {
    const categories = await this.$axios.$get('/categories')
    commit('SET_CATEGORIES', categories)
  },
  async fetchProducts({ commit }) {
    const products = await this.$axios.$get('/products')
    commit('SET_PRODUCTS', products)
  },
  async fetchCart({ commit }) {
    const cart = await this.$axios.$get('/cart')
    commit('SET_CART', cart)
  },
  async fetchBrands({ commit }) {
    const brands = await this.$axios.$get('/brands')
    commit('SET_BRANDS', brands)
  },
}
