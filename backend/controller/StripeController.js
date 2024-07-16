const { request } = require("../server");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { clearCartItems } = require("./CartController");
const stripePayment  = async (req, res) => {
 

  console.log("body",req.body)
  const items = req.body.items.map((item) => {
  
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productId.name,
          images:[item.productId.image],
          metadata: {
            id: item._id,
          }
        },
        unit_amount: item.productId.price * 100,
      },
      quantity: item.quantity,
    };
  });
  

console.log(items)
 const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  shipping_address_collection: {
    allowed_countries: ["US", "CA", "KE"],
  },
  shipping_options: [
    {
      shipping_rate_data: {
        type: "fixed_amount",
        fixed_amount: {
          amount: 0,
          currency: "usd",
        },
        display_name: "Free shipping",
        // Delivers between 5-7 business days
        delivery_estimate: {
          minimum: {
            unit: "business_day",
            value: 5,
          },
          maximum: {
            unit: "business_day",
            value: 7,
          },
        },
      },
    },
    {
      shipping_rate_data: {
        type: "fixed_amount",
        fixed_amount: {
          amount: 1500,
          currency: "usd",
        },
        display_name: "Next day air",
        // Delivers in exactly 1 business day
        delivery_estimate: {
          minimum: {
            unit: "business_day",
            value: 1,
          },
          maximum: {
            unit: "business_day",
            value: 1,
          },
        },
      },
    },
  ],
  phone_number_collection: {
    enabled: true,
  },
   line_items: items,
   mode: "payment",
   success_url: `${process.env.CLIENT_URL}/home`,
   cancel_url: `${process.env.CLIENT_URL}/cart`,
  
   
 })

 res.send({url: session.url})

 await clearCartItems(req.body.userId);
 
};

module.exports = {
  stripePayment,
};
