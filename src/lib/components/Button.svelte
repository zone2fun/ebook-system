<script>
    import { loadStripe } from '@stripe/stripe-js';
    import { PUBLIC_STRIPE_KEY } from '$env/static/public';

    
    let { children,...props } = $props();


    async function onclick(){
      const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

    const respone = await fetch("/checkout",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        }
      });

       const { sessionId } = await respone.json();
       await stripe.redirectToCheckout({sessionId});


    }
    
</script>
<button {...props} {onclick}>{@render children()}</button>

<style>
    button{
        background: #000;
        color: white;
        padding: 20px 24px;
        font-weight: normal;
        font-size: 22px;
        text-transform: uppercase;
        transition: all 0.3s;
        border: 1px solid white;
    }
    button:hover{
        background-color: white;
        color: black;
    }
</style>