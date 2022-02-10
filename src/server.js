const http = require('http'); 
const url = require('url'); 

const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./JSONResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const handlePost = (request, response, parsedUrl) => {
    console.log('this is a POST request');
};

const parseBody = (request, response, handler) => {
  
  
};

const handleGet = (request, response, parsedUrl) => {
    //route to correct method based on url
    if (parsedUrl.pathname === '/style.css') {
      htmlHandler.getCSS(request, response);
    } else if (parsedUrl.pathname === '/getUsers') {
      jsonHandler.getUsers(request, response);
    } else {
      htmlHandler.getIndex(request, response);
    }
  };
  
  const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);

    if (request.method === 'POST') {
      handlePost(request, response, parsedUrl);
    } else {
      handleGet(request, response, parsedUrl);
    }
  };

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1: ${port}`);
});