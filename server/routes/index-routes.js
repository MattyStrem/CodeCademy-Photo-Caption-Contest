const express = require('express');
const router = express.Router();

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {

    swaggerDefinition: { 
        openapi: "3.0.0",
        info: {
            title: "Photo Caption Contest",
            version: "1.0.0",
            description: "backend API to allow users to add captions to photos - Codecademy Tutorial",
        },   
    },

    apis: [
        './models/photo-model.js',
        './models/user-model.js',
        './models/captions-model.js',
        './routes/index-routes.js',
        './routes/photos.js',
        './routes/user.js',
        './routes/caption.js',
    ]
};

const specs = swaggerJSDoc(swaggerOptions);

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express'});
})

router.use("/api-docs", swaggerUi.serve);
router.get(
    "/api-docs",
    swaggerUi.setup(specs, {
        explorer: true
    })
);



module.exports = router;