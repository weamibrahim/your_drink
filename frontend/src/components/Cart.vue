<template>
   <div className="container-fluid">

      <table class="table table-striped">

        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">image</th>
            <th scope="col">name</th>

            <th scope="col">price </th>
            <th scope="col">quantity</th>
            <th scope="col">total price</th>
            <th scope="col" >+</th>
            <th scope="col">_</th>
            <th scope="col">remove</th>
          </tr>
        </thead>

       
            <tbody>
           <tr v-for="(cartItem, index) in cartItems" :key="index" class="text-center">
            <td>{{ index+1 }}</td>
               <td><img :src="'http://localhost:7000/images/'+ cartItem.productId.image" ></td>
             <td>{{ cartItem.productId.name }}</td>
          <td>{{ cartItem.productId.price }} LE</td>
          <td>{{ cartItem.quantity }}</td>
          <td>{{ cartItem.productId.price * cartItem.quantity }} LE</td>
             
             <td> <button
  @click="incrementCartItem(cartItem.productId._id)"
  class="btn btn-success px-2"
>
  +
</button>
</td>
<td>
<button
  @click="decrementCartItem(cartItem.productId._id)"
  class="btn btn-info px-2 mx-4"
>
  -
</button>
</td>
<td>
<button
  @click="removeCartItem(cartItem.productId._id)"
  class="btn text-danger px-2"
>
<i class="fa-solid fa-trash-can"></i>
</button>
</td>
              </tr>

            </tbody>
        
      </table>
      <div className="row d-flex justify-content-center" >
        <p className="text-center">Total Price: {{ calculateTotalPrice()}} LE</p>
        <button className="btn btn-info my-5  checkout"  > <router-link :to='"/payment"' class="text-decoration-none text-white">Checkout</router-link></button>
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "CartApp",
  setup() {
    const cartItems = ref([]);
 const userId = JSON.parse(localStorage.getItem("userData"))._id;
    const getCartItems = () => {
     
      axios.get(`http://localhost:7000/api/cart/${userId}`)
        .then((res) => {
          cartItems.value = res.data.items;
        })
        .catch((err) => {
          console.error(err);
        });
    };

 const calculateTotalPrice = () => {
  let totalPrice = 0;
  for (const cartItem of cartItems.value) {
    totalPrice += cartItem.productId.price * cartItem.quantity;
  }
  return totalPrice;
};



    // const incrementCartItem = (productId) => {
    //   axios.put(`http://localhost:7000/api/cart/increment-item/${userId}/${productId}`)
    //     .then((res) => {
    //       // Update the cartItems array with the updated data from the server
    //       cartItems.value = res.data.items;
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // };
  
const incrementCartItem = (productId) => {
  // Find the cart item in cartItems by productId
  const cartItem = cartItems.value.find((item) => item.productId._id === productId);

  if (cartItem) {
    // Increment the quantity of the cart item
    cartItem.quantity += 1;

    // Send a request to update the cart item on the server
    axios.put(`http://localhost:7000/api/cart/increment-item/${userId}/${productId}`)
      .then((res) => {
        // Handle the response as needed
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

const decrementCartItem = (productId) => {
  // Find the cart item in cartItems by productId
  const cartItem = cartItems.value.find((item) => item.productId._id === productId);

  if (cartItem) {
    // Decrement the quantity of the cart item, but not below 1
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } 

    // Send a request to update the cart item on the server
    axios.put(`http://localhost:7000/api/cart/decrement-item/${userId}/${productId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

const removeCartItem = (productId) => {
  // Find the index of the cart item in cartItems by productId
  const itemIndex = cartItems.value.findIndex((item) => item.productId._id === productId);

  if (itemIndex !== -1) {
    // Remove the item from cartItems
    cartItems.value.splice(itemIndex, 1);

    // Send a request to remove the item from the server
    axios.put(`http://localhost:7000/api/cart/remove-item/${userId}/${productId}`)
      .then((res) => {
        // Handle the response as needed
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};


    // ... (other functions remain unchanged) ...
  
    onMounted(() => {
      getCartItems();
    });

    return {
      cartItems,
      calculateTotalPrice,
      incrementCartItem,
      decrementCartItem,
      removeCartItem
     
    };
  },
};
</script>

<style scoped>
img{
  height: 100px;
  width: 100px;
}
.checkout{
  width: 150px;
}
i{
  color: red;
  font-size:30px ;
}
</style>