module.exports = {
  port: 4000, // Change this to any other port you like
  proxy: 'http://localhost:3000', // Point this to the ExpressJS server
  files: [
    'public/**/*' // Watch all files in the public folder recursively
  ],
  open: false, // Prevent BrowserSync from automatically opening a browser
};
