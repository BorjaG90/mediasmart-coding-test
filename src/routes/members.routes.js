const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
  
  axios.get('http://work.mediasmart.io',{
    headers: {
      Authorization: 'mediasmart2019'
    },
    params: {
      page: '1',
      page_size: '6'
    }
  })
  .then(function(data) {
    //console.log('data = ', data);
    res.json(data.data);
  })
  .catch(function(err) {
    console.error(err);
  });
});

module.exports = router;