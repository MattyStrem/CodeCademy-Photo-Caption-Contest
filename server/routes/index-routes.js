const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const router = express.Router();

const swagger = require('swagger-jsdoc');
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
        './routes/index-routes.js',
        './routes/photo.js',
    ]
};

const specs = swaggerJSDoc(swaggerOptions);

router.use("/api-docs", swaggerUi.serve);

module.exports = router;