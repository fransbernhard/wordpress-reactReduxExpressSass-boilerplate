module.exports = function setup(app) {
  app.get('/api/stats', (req, res) => {
    console.log("hmm");
  });

  app.post('/api/servers', (req, res) => {
    console.log("postin")
  });
};
