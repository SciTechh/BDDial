const express = require('express')
const nunjucks = require('nunjucks')
const minifyHTML = require("express-minify-html-2");
const minify = require("express-minify");
const compression = require("compression");
const routes = require("./routes/index");



const app = express();
app.disable("x-powered-by");
app.use(express.static("public"));
app.use(compression());
app.use(
  minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      minifyJS: true,
    },
  })
);

app.use(
  minify({
    cache: false,
    uglifyJsModule: null,
    errorHandler: null,
    jsMatch: /js/,
    cssMatch: /css/,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to parse JSON
app.use(express.json());

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.set("view engine", "html");

// Dynamic route based on the timer value

app.use("/", routes);
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);

const PORT = process.env.port || 3000

// app.listen(PORT, ()=> { `App is running on port ${PORT}` })
app.listen(PORT, '0.0.0.0')