const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

router.get('/', (req, res) => {
  var url = "http://work.mediasmart.io"
  var params = {page:1, page_size:1}
  url.search = new URLSearchParams(params)
  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'mediasmart2019'
    }
  })
  .then(function(response) {
    console.log('response =', response);
    return response.json();
  })
  .then(function(data) {
    console.log('data = ', data);
  })
  .catch(function(err) {
    console.error(err);
  });

  res.json({
    status: "API works"
  });
});

module.exports = router;