var request = require("request");

module.exports = function setup(app) {
  // app.get('/api/stats', (req, res) => {
  //   console.log("hmm");
  // });
  //
  // app.post('/api/servers', (req, res) => {
  //   console.log("postin")
  // });

  // getWPPost(req, res){
  //   // Set the headers
  //   const headers = {
  //       'Content-Type':'application/x-www-form-urlencoded'
  //   }
  //
  //   // Configure the request
  //   const options = {
  //       url: 'http://localhost/wordpress/wp-json/wp/v2/posts',
  //       method: 'GET',
  //       headers: headers
  //   }
  //
  //   // Start the request
  //   request(options, function (err, res, body) {
  //     if (!err && res.statusCode == 200) {
  //       res.send({
  //         success: true,
  //         message: "Successfully fetched a list of post",
  //         posts: JSON.parse(body)
  //       });
  //     } else {
  //       console.log(err);
  //     }
  //   });
  // }
  //
  // app.get('/post', function(req, res){
  //      getWPPost(req, res);
  // }
};
