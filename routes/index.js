const express = require("express")
const router = express.Router();
const {getServices} = require("../controller/services")
const authController = require("../controller/authController");

// router.route("/").get(getIndex)
router.route("/services/:slug").get(getServices)

router.get('/', (req, res) => {
    res.render('index.html')
})

router.get('/about-us', (req, res) => {
  res.render('about-us.html')
})

router.get('/terms-of-service', (req, res) => {
  res.render('terms-of-service.html')
})

router.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy.html')
})


router.get('/login', (req, res) => {
  res.render('login', { message: null });
});

// Handle login form submission
router.post('/login', authController.login);

module.exports = router;