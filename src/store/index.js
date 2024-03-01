import {
  createStore
} from 'vuex'
import sweet from 'sweetalert'
import {
  useCookies
} from 'vue3-cookies'
const cookies = useCookies()

import router from '@/router/index.js'
const liveUrl = 'https://duo-eomp-gs-ro.onrender.com'
// const liveUrl = 'http://localhost:8081'

export default createStore({
  state: {
      users: null,
      user: null,
      products: null,
      product: null
  },
  getters: {},
  mutations: {
      setUsers(state, value) {
          state.users = value
      },
      setUser(state, value) {
          state.user = value
      },
      setProducts(state, value) {
          state.products = value
      },
      setProduct(state, value) {
          state.product = value
      }

  },
  actions: {
      async addUser(context, payload) {
          try {
              let result = await fetch(`${liveUrl}/user/signup`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(payload)
              });
              let data = await result.json()

              console.log(data)
              if( +data.status >= 400 ){
                  sweet({
                      title: "Error",
                      text: "Couldn't create user",
                      icon: "error",
                      timer: 2000
                  })
                  return;
              }
              sweet({
                  title: "User Added",
                  text: "User added successfully",
                  icon: "success",
                  timer: 2000
              })
              context.dispatch('fetchUsers');
          } catch (e) {
              console.log(e)
              sweet({
                  title: "Error",
                  text: "Couldn't create user",
                  icon: "error",
                  timer: 2000
              })
          }
      },
      async fetchUsers(context) {
          try {
              let result = await fetch(`${liveUrl}/user`)
              let data = await result.json();
              // console.log(data)
              if (data) {
                  context.commit('setUsers', data.result)
              }
          } catch (e) {
              sweet({
                  title: 'Error',
                  text: 'An error occurred when retrieving users.',
                  icon: "error",
                  timer: 2000
              })
          }
      },
      async fetchUser(context, payload) {
          try {
              let {
                  result
              } = (await fetch(`${liveUrl}/users/${payload.id}`)).data
              if (result) {
                  context.commit('setUser', result)
              } else {
                  sweet({
                      title: 'Retrieving a single user',
                      text: 'User was not found',
                      icon: "info",
                      timer: 2000
                  })
              }
          } catch (e) {
              sweet({
                  title: 'Error',
                  text: 'A user was not found.',
                  icon: "error",
                  timer: 2000
              })
          }
      },
      async updateUser(context, payload) {
          // console.log(context, payload);
          try {
            await fetch(`${liveUrl}/user/updateuser/${payload.userID}`, {
                  method: "PATCH",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(payload)
              });
           
              sweet({
                  title: "User Updated",
                  text: "User updated successfully",
                  icon: "success",
                  timer: 2000
              });
              context.dispatch('fetchUsers');
          } catch(e) {    
              console.log(e)
              sweet({
                  title: "Error",
                  text: "Could not update user",
                  icon: "error",
                  timer: 2000
              });
          }
      },
      async deleteUser(context, payload) {
          try {
           await fetch(`${liveUrl}/user/deleteuser/${payload}`, {
                  method: "DELETE"
              })
              sweet({
                  title: "User deleted",
                  text: "User deleted successfully",
                  icon: "success",
                  timer: 2000
              })
              context.dispatch('fetchUsers');
          } catch (e) {
              sweet({
                  title: "Error",
                  text: "Couldn't delete user",
                  icon: "error",
                  timer: 2000
              })
          }
      },
      async editUser(context, payload) {
          console.log(context, payload);
      },
      async login(context, payload) {
          try {
              const {
                  msg,
                  token,
                  result
              } = (await fetch.post(`${liveUrl}/users/login`, payload)).data
              if (result) {
                  context.commit('setUser', {
                      msg,
                      result
                  })
                  cookies.set('LegitUser', {
                      msg,
                      token,
                      result
                  })
                
                  sweet({
                      title: msg,
                      text: `Welcome back, 
        ${result?.firstName} ${result?.lastName}`,
                      icon: "success",
                      timer: 2000
                  })
                  router.push({
                      name: 'home'
                  })
              } else {
                  sweet({
                      title: 'info',
                      text: msg,
                      icon: "info",
                      timer: 2000
                  })
              }
          } catch (e) {
              sweet({
                  title: 'Error',
                  text: 'Failed to login.',
                  icon: "error",
                  timer: 2000
              })
          }


      },
      async fetchProducts(context) {
          try {
              let result = await fetch(`${liveUrl}/product`);
              let data = await result.json();
              context.commit("setProducts", data.result);
          } catch (e) {
              console.log(e)
          }
      },
      async fetchProduct(context, payload) {
          try {
              let {
                  result
              } = (await fetch(`${liveUrl}/products/${payload.id}`)).data
              if (result) {
                  context.commit('setProduct', result)
              } else {
                  sweet({
                      title: 'Retrieving a single product',
                      text: 'Product was not found',
                      icon: "info",
                      timer: 2000
                  })
              }
          } catch (e) {
              sweet({
                  title: 'Error',
                  text: 'A product was not found.',
                  icon: "error",
                  timer: 2000
              })
          }
      },
      async addProduct(context, payload) {
          try {
              let result = await fetch(`${liveUrl}/product/newProduct`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(payload)
              });
              let data = await result.json();
              console.log('ad', data);
              context.dispatch('fetchProducts');
          } catch (e) {
              console.log(e)
              sweet({
                  title: 'Error',
                  text: 'Failed to add a product',
                  icon: 'error',
                  timer: 2000
              });
          }
      },
      async editProduct(context, payload) {
          try {
              let result = await fetch(`${liveUrl}/product/editProduct/${payload.prodID}`, {
                  method: "PATCH",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(payload)
              });
              let data = await result.json();
              console.log(data);
              context.dispatch('fetchProducts');
              sweet({
                  title: 'Product Changed',
                  text: 'Product updated',
                  icon: 'success',
                  timer: 2000
              });
          } catch (e) {
              sweet({})
          }
      },
      async deleteProduct(context, payload) {
          try {
              // console.log("payload: ", payload.prodID)
              let result = await fetch(`${liveUrl}/product/delProduct/${payload}`, {
                  method: "DELETE"
              });
              let data = await result.json();
              console.log(data);
              context.dispatch('fetchProducts');
              sweet({
                  title: "Product Deleted",
                  text: "Product deleted successfully",
                  icon: "success",
                  timer: 2000
              })
          } catch (e) {
              sweet({
                  title: "Error",
                  text: "Error occurred while trying to delete product",
                  icon: "error",
                  timer: 2000
              })
          }
      },
      setProducts(context, payload){
        context.commit('setProducts', payload)
      }
  },
  modules: {}
})