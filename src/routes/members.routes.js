const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
  const { page, page_size } = req.query;
  axios.get('http://work.mediasmart.io',{
    headers: {
      Authorization: 'mediasmart2019'
    },
    params: {
      page,
      page_size
    }
  })
  .then(data => res.json(data.data))
  .catch(err => console.error(err));
});

module.exports = router;