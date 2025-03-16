// Student Name: Alexander Martinez
// Student ID: 1214728190
// Date: 03/15/25

const loggerMiddleware = (req, res, next) => {
    console.log("Logged");
    next();
  };
  
  module.exports = loggerMiddleware;
  