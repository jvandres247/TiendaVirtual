const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_sWV8CoN7Zcc7WsMmTvvVnato');

router.get('/',(req, res) =>{
    res.render('index');
})

router.post('/checkout', async(req, res) =>{
     console.log(req.body);
     const customer = await stripe.customers.create({
         email: req.body.stripeEmail,
         source: req.body.stripeToken
     });
     const charge = await stripe.charges.create({
         amount: '299999',
         currency: 'mxn',
         customer: customer.id,
         description: 'Audifonos earphods'
     });
     console.log(charge.id);
     //Respuesta final para el usuario
     res.render('download');

});

module.exports = router;