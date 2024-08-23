<template>
  <div className="container my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
    <div className="row">
      <div className="col-md-6 mb-4">
        <img :src="'https://your-drink.onrender.com/images/'+ productData.image" alt="flower.name" className="img-fluid rounded-4" />
      </div>
      <div className="col-md-6">
        <p class="text-center fs-1">{{ productData.name }}</p>
        <p className="text-center my-3">{{ productData.price }}</p>
        <p className="text-center my-3">{{ productData.description }}</p>
        <div className="d-flex justify-content-center mt-1">
          <button class="btn btn-primary p-2 border-0" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

export default {
  name: 'DetailsProductApp',
  setup() {
    const id = ref('');
    const name = ref('');
    const category = ref('');
    const price = ref('');
    const description = ref('');
    const image = ref('');
    const token = localStorage.getItem('accessToken');
    const route = useRoute();
    const router = useRouter();

    const getproductByID = () => {
      const productId = route.params.id;
      
      axios.get(`https://your-drink.onrender.com/api/Product/${productId}`)
        .then((res) => {
          const responseData = res.data; // Store response data in a different variable
          id.value = responseData.id;
          name.value = responseData.name;
          category.value = responseData.category;
          price.value = responseData.price;
          description.value = responseData.des;
          image.value = responseData.image;
        })
        .catch((err) => console.error(err));
    };

    onMounted(() => {
      getproductByID();
    });

    const productData = computed(() => ({
      Id: id.value,
      name: name.value,
      category: category.value,
      price: price.value,
      description: description.value,
      image: image.value
    }));

    const back = () => {
      router.push('/products');
    };

    const addToCart = () => {
      const productId = route.params.id;
      const user_id = JSON.parse(localStorage.getItem('userData'))?._id;

      if (!user_id) {
       
        router.push('/login');
        return;
      }

      const requestData = {
        userId: user_id,
        productId: productId,
        quantity: 1, 
      };

      axios.post(`https://your-drink.onrender.com/api/cart/add-item`, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          
          router.push('/cart'); 
          console.log(res.data);
        })
        .catch((err) => {
          // Handle errors, e.g., display an error message
          console.error(err);
          alert("Error adding item to cart.");
        });
    };

    return {
      productData,
      back,
      addToCart
    };
  },
};
</script>

<style scoped>
button {
  margin-top: 200px;
}
img {
  width: 500px;
  height: 500px;
}
</style>
