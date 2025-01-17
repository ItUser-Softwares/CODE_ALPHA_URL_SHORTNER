const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const shortid = require('shortid');
const URL = require('../models/url');

var latestShortId = "";
var latestLongId = "";

router.get('/', (req, res) => {
  res.render('index.ejs', { latestShortId, latestLongId });
});
// Shorten URL
router.post('/', async (req, res, next) => {
  const regex = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/;

  const { originalUrl } = req.body;



  // Generate a unique short URL ID
  var shortUrl = shortid.generate().substring(0, 6);

  const url = await URL.findOne({ shortUrl });
  while (url)
    shortid.generate().substring(0, 6);
  // Save to database
  if (regex.test(originalUrl) && originalUrl != "") {
    latestLongId = originalUrl;
    const url = new URL({ originalUrl, shortUrl });
    await url.save();
    latestShortId = await `http://localhost:3000/${shortUrl}`;
  } else {
    return res.render('error.ejs',{error: 'Invalid URL'});
  }

  return res.redirect('/');

});


// Redirect to Original URL
router.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await URL.findOne({ shortUrl });

    if (!url) {
      return res.render('error.ejs',{error: "URL Not found"});
    }

    res.redirect(`https://${url.originalUrl}`);
  } catch (error) {
    res.render('error.ejs',{error: error});
  }
});

module.exports = router;
