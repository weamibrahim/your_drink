<template>
  <button className="btn btn-info my-5 checkout"  @click="handleSubmit">
  Checkout
  </button>
</template>

<script>
export default {
  name: "PaymentApp",
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const handleSubmit = async () => {
      const token = localStorage.getItem('accessToken');
        const userId = JSON.parse(localStorage.getItem('userData'))._id
       const formData = {
        items: props.cartItems,
        userId: userId // Include userId in the request body
      };
      console.log(formData);

      try {
        const response = await fetch('https://your-drink.onrender.com/api/stripe/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
            window.location.href = data.url;
          console.log(data.message);
      
        } else {
          console.error('Failed to process payment');
        }
      } catch (error) {
        console.error(error);
      }
    };

    return {
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.ground {
  background-image: url("https://img.freepik.com/free-psd/coffee-cup-collection_53876-84520.jpg?size=626&ext=jpg&uid=R50739859&ga=GA1.2.1532466403.1676939380&semt=sph");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
form {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
