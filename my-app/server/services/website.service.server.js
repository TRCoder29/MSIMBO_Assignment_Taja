module.exports = function(app){
	websites = [
	 {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
	 {_id: "234", name: "Tweeter",  developerId: "456", description: "Lorem"},
	 {_id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem"},
	 {_id: "890", name: "Go", developerId: "123", description: "Lorem" },
	 {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
	 {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
	 {_id: "789", name: "Chess", developerId: "234", description: "Lorem"},
 ];

	app.post('/api/user/:uid/website', createWebsite);
 	app.get('/api/user/:uid/website', findAllWebsitesForUser);
	app.get('/api/website/:wid', findWebsiteById);
	app.put('/api/website/:wid', updateWebsite);
	app.delete('/api/website/:wid', deleteWebsite);

	function createWebsite(req, res) {
	var website = req.body;
    website._id = Math.floor(Math.random() * 10000).toString();
    website.developerId = userId;
    websites.push(website);
    res.json(website);
  }

  function findAllWebsitesForUser(){
  	var uid = req.params['uid'];
  	var result = [];
    for (let i = 0; i < websites.length; i++) {
     	 if (websites[i].developerId === userId) {
      		result.push(websites[i]);
      	}
  	}
  	res.json(result);
  }


  function findWebsiteById(req, res) {
  	var wid = req.params['wid'];
  	var website = selectWebsiteById(wid);
  	res.json(website);
  }


  function updateWebsite(req, res) {
  	var wid = req.params['wid'];
  	var website = req.body;
    var oldWeb = selectWebsiteById(wid);
    var index = websites.indexOf(oldWeb);
    websites[index].name = website.name;
    websites[index].description = website.description;
    res.json(website);
  }


  function deleteWebsite(req, res) {
  	var wid = req.params['wid'];
    var web = selectWebsiteById(wid);
    var index = websites.indexOf(web);
    websites.splice(index, 1);
    res,json(websites);
  }
}





