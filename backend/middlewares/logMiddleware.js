export const reqLog = (req, res, next) => {
  console.log(`New request From :`);
  console.log(`Endpoint: ${req.url} `);
  console.log(`Method: ${req.method}`);
  next();
};
