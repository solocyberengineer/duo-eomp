<template>
   <div class="container-fluid  p-0">
      
         <div class="row">
  <h2 class="display-2">About</h2>
</div>
       <div class="row g-0 my-4 d-flex align-items-center justify-content-center">
           <div class="col-10 d-flex align-items-center justify-content-center">
               <button class="btn btn-danger fs-6 mx-1 text-white rounded-5 shadow" data-bs-target="#userTable"
                   data-bs-toggle="modal" @click="setUserModal">
                   <i class="bi bi-plus-circle"></i>
                   Add User
               </button>
               <button class="btn btn-danger fs-6 mx-1 text-white rounded-5 shadow" data-bs-target="#productTable"
                   data-bs-toggle="modal" @click="setProductModal">
                   <i class="bi bi-plus-circle"></i>
                   Add Product
               </button>
           </div>
       </div>
       <div class="modal fade" id="userTable" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
           aria-labelledby="userTableHead" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered">
               <div class="modal-content bg-danger">
                   <div class="modal-header border-0">
                       <h3 class="modal-title fs-5 fw-bold text-white" id="userTableHead">{{ userModalFunc }} User</h3>
                       <button class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body border-0 px-5">
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="userTable.firstName" type="text" class="form-control bg-dark text-white" id="firstName"
                               placeholder="First Name">
                           <label for="firstName" class="text-white">First Name</label>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="userTable.lastName" type="" class="form-control bg-dark text-white" id="lastName" placeholder="Last Name">
                           <label for="lastName" class="text-white">Last Name</label>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="userTable.emailAdd" type="email" class="form-control bg-dark text-white" id="email" placeholder="Email Address">
                           <label for="email" class="text-white">Email Address</label>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="userTable.userPass" type="password" class="form-control bg-dark text-white" id="userPass" placeholder="Password">
                           <label for="userPass" class="text-white">Password</label>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="userTable.userAge" @input="parseValue" type="number" class="form-control bg-dark text-white" id="age" placeholder="Age">
                           <label for="age" class="text-white">Age</label>
                       </div>
                       <div class="dropdown mb-3" data-bs-theme="dark">
                           <button class="btn btn-danger shadow dropdown-toggle position-relative mx-auto"
                               data-bs-toggle="dropdown" aria-expanded="false">Gender
                               <span ref="genderBadge"
                                   class="badge position-absolute start-100 top-0 translate-middle shadow bg-secondary p-1">Male</span>
                           </button>
                           <ul class="dropdown-menu bg-dark">
                               <li><button value="male" class="dropdown-item" @click="setGender">Male</button></li>
                               <li><button value="female" class="dropdown-item" @click="setGender">Female</button></li>
                               <li><button value="other" class="dropdown-item" @click="setGender">Other</button></li>
                           </ul>
                       </div>
                       <div class="dropdown mb-3" data-bs-theme="dark">
                           <button class="btn btn-danger shadow dropdown-toggle position-relative mx-auto"
                               data-bs-toggle="dropdown" aria-expanded="false">Role
                               <span ref="roleBadge"
                                   class="badge position-absolute start-100 top-0 translate-middle shadow bg-secondary p-1">Admin</span>
                           </button>
                           <ul class="dropdown-menu">
                               <li><button value="user" class="dropdown-item" @click="setRole">User</button></li>
                               <li><button value="admin" class="dropdown-item" @click="setRole">Admin</button></li>
                           </ul>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="userTable.userProfile" type="text" class="form-control bg-dark text-white" id="profile" placeholder="Profile">
                           <label for="profile" class="text-white">Profile</label>
                       </div>
                   </div>
                   <div class="modal-footer border-0 px-5">
                       <button class="btn btn-secondary shadow">Reset</button>
                       <button @click="userModalSubmit" class="btn btn-warning shadow">Submit</button>
                   </div>
               </div>
           </div>
       </div>
       <div class="modal fade" id="productTable" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
           aria-labelledby="productTableHead" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered">
               <div class="modal-content bg-danger">
                   <div class="modal-header border-0">
                       <h3 class="modal-title fs-5 fw-bold text-white" id="productTableHead">{{ productModalFunc }} Product
                       </h3>
                       <button class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body border-0 px-5">
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="productTable.category" type="text" class="form-control bg-dark text-white" id="Category"
                               placeholder="Category">
                           <label for="Category" class="text-white">Category</label>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="productTable.name" type="" class="form-control bg-dark text-white" id="productName"
                               placeholder="Product Name">
                           <label for="productName" class="text-white">Product Name</label>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="productTable.quantity" @input="parseValue" type="number" class="form-control bg-dark text-white" id="quantity"
                               placeholder="Quantity">
                           <label for="quantity" class="text-white">Quantity</label>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="productTable.price" @input="parseValue" type="number" class="form-control bg-dark text-white" id="price"
                               placeholder="Price">
                           <label for="price" class="text-white">Price</label>
                       </div>
                       <div class="form-floating mb-3" data-bs-theme="dark">
                           <input v-model="productTable.image" type="text" class="form-control bg-dark text-white" id="price"
                               placeholder="Image">
                           <label for="price" class="text-white">Image</label>
                       </div>
                   </div>
                   <div class="modal-footer border-0 px-5">
                       <button class="btn btn-secondary shadow">Reset</button>
                       <button @click="productModalSubmit" class="btn btn-warning shadow">Submit</button>
                   </div>
               </div>
           </div>
       </div>
       <div class="container mt-5 p-3 shadow bg-dark rounded-3 overflow-auto">
           <h5 class="text-white fs-4">Products</h5>
           <table class="table table-dark">
               <thead>
                   <tr>
                       <th scope="col">ID</th>
                       <th scope="col">Category</th>
                       <th scope="col">Name</th>
                       <th scope="col">Quantity</th>
                       <th scope="col">Price</th>
                       <th scope="col">Image</th>
                       <th scope="col">Action</th>
                   </tr>
               </thead>
               <tbody v-if="products">
                   <tr v-for="product in products" :key="product">
                       <th scope="row">{{ product.prodID }}</th>
                       <td>{{ product.category }}</td>
                       <td>{{ product.prodName }}</td>
                       <td>{{ product.quantity }}</td>
                       <td>R&nbsp;{{ product.amount }}</td>
                       <td><a :href="product.prodUrl" target="_blank">{{ product.prodUrl }}</a></td>
                       <td class="d-flex">
                           <button class="btn btn-secondary m-1" data-bs-target="#productTable" data-bs-toggle="modal"
                               @click="editProduct" :value="product.prodID">Edit</button>
                           <button class="btn btn-danger m-1" @click="deleteProduct" :value="product.prodID">Delete</button>
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>
       <div class="container products mt-5 p-3 shadow bg-dark rounded-3 overflow-auto">
           <h5 class="text-white fs-4">Users</h5>
           <table class="table table-dark">
               <thead>
                   <tr>
                       <th scope="col">ID</th>
                       <th scope="col">First Name</th>
                       <th scope="col">Last Name</th>
                       <th scope="col">Age</th>
                       <th scope="col">Gender</th>
                       <th scope="col">Role</th>
                       <th scope="col">Email</th>
                       <th scope="col">Profile</th>
                       <th scope="col">Action</th>
                   </tr>
               </thead>
               <tbody v-if="users">
                   <!-- {{users[0]}} -->
                   <tr v-for="user in users" :key="user">
                       <th scope="row">{{ user.userID }}</th>
                       <td>{{ user.firstName }}</td>
                       <td>{{ user.lastName }}</td>
                       <td>{{ user.userAge }}</td>
                       <td>{{ user.Gender }}</td>
                       <td>{{ user.userRole }}</td>
                       <td>{{ user.emailAdd }}</td>
                       <td>{{ user.userProfile }}</td>
                       <td class="d-flex">
                           <button class="btn btn-secondary m-1" @click="editUser" data-bs-target="#userTable" data-bs-toggle="modal" :value="user.userID">Edit</button>
                           <button class="btn btn-danger m-1" @click="deleteUser" :value="user.userID">Delete</button>
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>
   </div>
</template>

<script>

export default {
   name: "AdminView",
   data() {
       return {
           productTable: {
               prodID: 0,
               category: "",
               name: "",
               quantity: 0,
               price: 0,
               image: ""
           },
           userTable: {
               firstName: "",
               lastName: "",
               Gender: "male",
               userRole: "admin",
               emailAdd: "",
               userAge: 0,
               userProfile: ""
           },
           userModalFunc: "Add",
           productModalFunc: "Add",
           modalStates: ['Add', 'Edit']

       }
   },
   mounted() {
       this.$store.dispatch('fetchProducts');
       this.$store.dispatch('fetchUsers');

       this.userModalFunc = this.modalStates[0];
       this.productModalFunc = this.modalStates[0];
   },
   computed: {
       products() {
           return this.$store.state.products;
       },
       users() {
           return this.$store.state.users;
       }
   },
   methods: {
       editProduct(event) {
           this.userModalFunc = this.modalStates[1];
           this.productModalFunc = this.modalStates[1];
           this.productTable.prodID = +event.target.getAttribute('value');
           let product = this.$store.state.products.find( (item) => item.prodID === this.productTable.prodID );

           this.productTable.category = product.category;
           this.productTable.name = product.prodName;
           this.productTable.quantity = product.quantity;
           this.productTable.price = product.amount;
           this.productTable.image = product.prodUrl;
       },
       deleteProduct(event){
           this.productTable.prodID = +event.target.getAttribute('value');
           console.log(this.productTable.prodID)
           this.$store.dispatch('deleteProduct', this.productTable.prodID);
       },
       editUser(event){
           this.userModalFunc = this.modalStates[1];
           this.productModalFunc = this.modalStates[1];
           this.userTable.userID = +event.target.getAttribute('value');
           let user = this.$store.state.users.find( (item) => item.userID === this.userTable.userID );

           this.userTable.firstName = user.firstName;
           this.userTable.lastName = user.lastName;
           this.userTable.Gender = user.Gender;
           this.userTable.userRole = user.userRole;
           this.userTable.emailAdd = user.emailAdd;
           this.userTable.userAge = user.userAge;
           this.userTable.userProfile = user.userProfile;
       },
       deleteUser(event){
           this.userTable.userID = +event.target.getAttribute('value');
           console.log(this.userTable.userID)
           this.$store.dispatch('deleteUser', this.userTable.userID);
       },
       setProductModal(){
           this.productModalFunc = this.modalStates[0];
           this.productTable = {
               prodID: "",
               category: "",
               name: "",
               quantity: "",
               price: "",
               image: ""
           }
       },
       parseValue(){
           if( this.productTable.quantity < 0 || this.productTable.price < 0 || this.userTable.userAge < 0 ){
               this.productTable.quantity = 0;
               this.productTable.price = 0;
               this.userTable.userAge = 0;
           }
       },
       setUserModal(){
           this.userModalFunc = this.modalStates[0];
           this.userTable = {
               firstName: "",
               lastName: "",
               Gender: "male",
               userRole: "admin",
               emailAdd: "",
               userAge: "",
               userProfile: ""
           }
       },
       setGender(event){
           let gender = event.target.getAttribute('value');
           let _gender = gender.split('')[0].toUpperCase();
           this.userTable.Gender = gender;
           this.$refs.genderBadge.textContent = _gender + gender.slice(1, gender.length);
       },
       setRole(event){
           let role = event.target.getAttribute('value');
           let _role = role.split('')[0].toUpperCase();
           this.userTable.userRole = role;
           this.$refs.roleBadge.textContent = _role + role.slice(1, role.length);
       },
       productModalSubmit(){
           switch( this.productModalFunc ){
               case "Add":
                   this.$store.dispatch('addProduct', {
                       category: this.productTable.category,
                       prodName: this.productTable.name,
                       quantity: this.productTable.quantity,
                       amount: this.productTable.price,
                       prodUrl: this.productTable.image
                   });
                   break;
               case "Edit":
                   this.$store.dispatch('editProduct', {
                       prodID: this.productTable.prodID,
                       category: this.productTable.category,
                       prodName: this.productTable.name,
                       quantity: this.productTable.quantity,
                       amount: this.productTable.price,
                       prodUrl: this.productTable.image
                   });
                   break;
               default:
                   break;
           }
       },
       userModalSubmit(){
           switch( this.userModalFunc ){
               case "Add":
                   console.log(this.userModalFunc);
                   this.$store.dispatch('addUser', {
                       firstName: this.userTable.firstName,
                       lastName: this.userTable.lastName,
                       emailAdd: this.userTable.emailAdd,
                       userPass: this.userTable.userPass,
                       Gender: this.userTable.Gender,
                       userRole: this.userTable.userRole,
                       userAge: this.userTable.userAge,
                       userProfile: this.userTable.userProfile
                   });
                   break;
               case "Edit":
                   this.$store.dispatch('updateUser', this.userTable);
                   break;
               default:
                   break;
           }
       }
   }
}
</script>
<style scoped></style>