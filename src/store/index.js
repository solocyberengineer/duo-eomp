import {
    createStore
} from 'vuex'
import sweet from 'sweetalert'
import {
    useCookies
} from 'vue3-cookies'
const cookies = useCookies()
import AuthenticateUser from '../service/Authentication.js'
import router from '@/router/index.js'
const liveUrl = 'https://duo-eomp-gs-ro.onrender.com'
// const liveUrl = 'http://192.168.11.149:8081'

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
        async register(context, payload) {
            try {
                let {
                    msg
                } = (await fetch(`${liveUrl}users/register`, payload)).data
                if (msg) {
                    context.dispatch('fetchUsers')
                    sweet({
                        title: 'Registration',
                        text: msg,
                        icon: "success",
                        timer: 2000
                    })
                    //  
                    router.push({
                        name: 'login'
                    })
                }
            } catch (e) {
                sweet({
                    title: 'Error',
                    text: 'Please try again later',
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
                } = (await fetch(`${liveUrl}users/${payload.id}`)).data
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
            try {
                let {
                    msg
                } = await fetch.patch(`${liveUrl}users/update/${payload.id}`)
                if (msg) {
                    context.dispatch('fetchUsers')
                    sweet({
                        title: 'Update user',
                        text: msg,
                        icon: "success",
                        timer: 2000
                    })
                }
            } catch (e) {
                sweet({
                    title: 'Error',
                    text: 'An error occurred when updating a user.',
                    icon: "success",
                    timer: 2000
                })
            }
        },
        async deleteUser(context, payload) {
            try {
                let {
                    msg
                } = await fetch.delete(`${liveUrl}users/${payload.id}`)
                if (msg) {
                    context.dispatch('fetchUsers')
                    sweet({
                        title: 'Delete user',
                        text: msg,
                        icon: "success",
                        timer: 2000
                    })
                }
            } catch (e) {
                sweet({
                    title: 'Error',
                    text: 'An error occurred when deleting a user.',
                    icon: "error",
                    timer: 2000
                })
            }
        },
        async login(context, payload) {
            try {
                const {
                    msg,
                    token,
                    result
                } = (await fetch.post(`${liveUrl}users/login`, payload)).data
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
                    AuthenticateUser.applyToken(token)
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
            } catch(e) {
                console.log(e)
            }
        },
        async fetchProduct(context, payload) {
            try {
                let {
                    result
                } = (await fetch(`${liveUrl}products/${payload.id}`)).data
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
        async addProduct(context, payload){
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
            } catch(e) {
                console.log(e)
                sweet({
                    title: 'Error',
                    text: 'Failed to add a product',
                    icon: 'error',
                    timer: 2000
                });
            }
        },
        async editProduct(context, payload){
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
            } catch(e) {
                sweet({})
            }
        }
    },
    modules: {}
})