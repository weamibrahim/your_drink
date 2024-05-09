<template>
   <div className="container-fluid">

<div class="table-responsive" >
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
</div>
      <div className="row d-flex justify-content-center" >
        <p className="text-center">Total Price: {{ calculateTotalPrice()}} LE</p>
        <button className="btn btn-info my-5  checkout"  > <router-link :to='"/payment"' class="text-decoration-none text-white">Checkout</router-link></button>
      </div>
    </div>
</template>


<script>
import { ref, onMounted } from "vue";

export default {
  name: "CartApp",
  setup() {
    const cartItems = ref([]);
    const token = localStorage.getItem("accessToken");
    const userId = JSON.parse(localStorage.getItem("userData"))._id;

    const getCartItems = async () => {
      try {
        const response = await fetch(`http://localhost:7000/api/cart/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();
        cartItems.value = data.items;
      } catch (error) {
        console.error(error);
      }
    };

    const calculateTotalPrice = () => {
      let totalPrice = 0;
      for (const cartItem of cartItems.value) {
        totalPrice += cartItem.productId.price * cartItem.quantity;
      }
      return totalPrice;
    };

    const incrementCartItem = async (productId) => {
      const cartItem = cartItems.value.find((item) => item.productId._id === productId);

      if (cartItem) {
        try {
          const response = await fetch(`http://localhost:7000/api/cart/increment-item/${userId}/${productId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to increment cart item");
          }

          cartItem.quantity += 1;
        } catch (error) {
          console.error(error);
        }
      }
    };

    const decrementCartItem = async (productId) => {
      const cartItem = cartItems.value.find((item) => item.productId._id === productId);

      if (cartItem) {
        try {
          const response = await fetch(`http://localhost:7000/api/cart/decrement-item/${userId}/${productId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to decrement cart item");
          }

          if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    const removeCartItem = async (productId) => {
      const itemIndex = cartItems.value.findIndex((item) => item.productId._id === productId);

      if (itemIndex !== -1) {
        try {
          const response = await fetch(`http://localhost:7000/api/cart/remove-item/${userId}/${productId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to remove cart item");
          }

          cartItems.value.splice(itemIndex, 1);
        } catch (error) {
          console.error(error);
        }
      }
    };

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