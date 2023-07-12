const express = require('express');
const next = require('next');
const fetch = require('isomorphic-fetch');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Allow requests from your Next.js application
  server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your Next.js application URL
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  // Proxy the font request to the desired origin
  server.get('/fonts/:fontFile', async (req, res) => {
    try {
      const { fontFile } = req.params;
      const fontUrl = `http://122.160.48.132/dev/html/reseller-dashboard/fonts/${fontFile}`;
      const response = await fetch(fontUrl);
      const fontData = await response.buffer();

      res.setHeader('Content-Type', 'application/octet-stream');
      res.send(fontData);
    } catch (error) {
      console.error('Error proxying font request:', error);
      res.sendStatus(500);
    }
  });

  // Handle Next.js requests
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
