const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const getServices = async (req, res) => {
    try {
        // Extract the slug from the URL parameter
        const { slug } = req.params;
        // Read data from data.json file
        const dataPath = path.join(__dirname, 'data.json');
        const data = JSON.parse(await fs.readFile(dataPath, 'utf8'));
    
        // Find relevant data based on slug
        const serviceData = data.Services.filter(service => service.type.toLowerCase() === slug.toLowerCase());
      
    
        // Render a view and pass the data to the template
        res.render('[slug]', { serviceData, slug });
    
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getServices
};