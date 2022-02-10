const users = {};

const respondJSON = (request, response, status, object) => {
    response.writeHead(status, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(object));
    response.end();
};

const respondJSONMeta = (request, response, status) => {
    response.writeHead(status, { 'Content-Type': 'application/json' });
    response.end();
};

const getUsers = (request, response) => {
    const responseJSON = {
      users,
    };
  
    respondJSON(request, response, 200, responseJSON);
};

module.exports = {
    getUsers
}