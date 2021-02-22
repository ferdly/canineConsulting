/**
 * @site: https://brad7390.wixsite.com/my-site-2/formstackcallbacklessonrequest
 * @source url: https://www.wix.com/velo/forum/community-discussion/how-to-create-a-webhook-endpoint-for-stripe-with-wix-http-functions
 * @descr: closest I've found to an Endpoint URL for Webhook by Google
 * @notes:[
 *     "this is the first note",
 *     "this is the second note"
 *     ]
 */

import {ok, badRequest, response} from 'wix-http-functions';
// import stripe from 'stripe';
import express from 'express';
//import {stripeWebhookHandler} from 'backend/StripeBackend';
import wixData from 'wix-data';
import bodyparser from 'body-parser';

// const key = require('stripe')('sk_test_XXXXX'); //replace with your own secret key from Stripe

const endpointSecret = 'f3d7f1cb-f153-4bff-849f-94f9881d0b95@email.webhook.site'; //replace with your own signing secret key from Stripe

const app = require('express')();

const bodyParser = require('body-parser');

let responseBody = {
//to send back to Stripe
 "status": 200,
        };

export function post_checkoutUpdate(request) {


  //stripeWebhookHandler('test'); // this one works

  app.post('/formstackcallbacklessonrequest', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  //THE PROBLEM: my code can never reach here
  stripeWebhookHandler('inside app.post');

  let event;

  try {
    event = key.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
  const session = event.data.object;

  //stripeWebhookHandler(session);

  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});
  });

  app.listen(8000, () => console.log('Running on port 8000'));
  /*
  let responseBody = {
  "status": 200,
  "body"  : 'test'
  };
  */
  //return response({"status": 200});
  return response(responseBody);

} //END export function post_checkoutUpdate(request)

//this function is for me to observe and handle data received from Stripe webhook
function stripeWebhookHandler (content) {
 let currentItem = {
   "webhookData": content
  };

    wixData.insert("MyCollection", currentItem)
    .then( (results) => {

  let item = results;

    responseBody = {
       "status": 200,
       "body"  : item
        };
    } )
    .catch( (err) => {
      let errorMsg = err;
    } );
}