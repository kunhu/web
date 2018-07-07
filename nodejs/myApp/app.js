var express = require('express');

//bug fix for cors
var cors = require('cors')
var app = express();
app.use(cors())


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var createUrl = "mongodb://localhost:27017/mydb";
var url="mongodb://localhost:27017/";


// post data
var bodyParser = require('body-parser');
app.use(bodyParser.json());

function db_create() {       
	console.log("db_create+++");
	MongoClient.connect(createUrl, function(err, db) {
		  if (err) throw err;
		  console.log("Database created!");
		  db.close();
		});
	}


function db_connect() { 
	console.log("db_connect+++");
	MongoClient.connect(url,function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("mydb");
		  dbo.createCollection("customers", function(err, res) {
		    if (err) throw err;
		    console.log("Collection created!");
		    db.close();
		  });
		});
}

function db_addItems() { 
	console.log("db_addItems+++");
	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("mydb");
		  var myobj = { name: "Company Inc", address: "Highway 37" };
		  dbo.collection("customers").insertOne(myobj, function(err, res) {
		    if (err) throw err;
		    console.log("1 document inserted");
		    db.close();
		  });
		});
}

function addItemsToDatabase(myobj) { 
	console.log("addItemsToDatabase+++");
	console.log("dump json:"+ JSON.stringify(myobj,null,4));
	
	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("mydb");
		  //var myobj = { name: "Company Inc", address: "Highway 37" };

		  
		  
		  //console.log("dump json2:"+ JSON.stringify(myobj,null,4));
		  
		  dbo.collection("customers").insertOne(myobj, function(err, res) {
		    if (err) throw err;
		    console.log("1 document inserted");
		    db.close();
		  });
		});
}


function deleteItemsToDatabase(myquery) { 
	console.log("deleteItemsToDatabase+++");
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  //var myquery = { name: name };
	  //var myquery = { _id: "5b3d7e8016cea404d593c483" };
	  console.log("dump json:"+ JSON.stringify(myquery,null,4));
	  //dbo.collection("customers").deleteOne(myquery, function(err, obj) {
	  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
	    if (err) throw err;
	    console.log("1 document deleted");
	    db.close();
	  });
	});
}

function dumpItems(result)
{
	console.log("debug: result size:"+result.length);
	for(i=0;i<result.length;i++){
		
		console.log("dump:result.name:"+result[i].name);
		console.log("dump:result.address:"+result[i].address);
	}
}
var resultDb;

function db_queryItems(res){
	console.log("db_addItems+++");
	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("mydb");
		  //var query = { address: "Highway 37" };
		  var query = {};  //query all
		  dbo.collection("customers").find(query).toArray(function(err, result) {
		    if (err) throw err;
		    
		    //console.log("debug: result name:"+result[0].name);
		    //console.log("debug: result name:"+result[0].address);
		    dumpItems(result);
		    resultDb = result;
		    
		    //kunhu
		    res.send(JSON.stringify(resultDb,null,4));
		    
		    db.close();
		    
		  });
		});
	
	}

function db_showAllLabels(res){
	console.log("db_showAllLabels+++");
	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("mydb");
		  //var query = { address: "Highway 37" };
		  var query = {};  //query all
		  dbo.collection("customers").find(query).toArray(function(err, result) {
		    if (err) throw err;
		    
		    //console.log("debug: result name:"+result[0].name);
		    //console.log("debug: result name:"+result[0].address);
		    dumpItems(result);
		    resultDb = result;
		    var labels=[];
		   
		    for(i=0;i<result.length;i++){
				
				//console.log("dump:result.name:"+result[i].name);
				//console.log("dump:result.address:"+result[i].address);
				console.log("dump:result.labels:"+result[i].label);
				if(result[i].label!=null){
					
					//put if array does not has it.
					if(labels.indexOf(result[i].label) <= (-1))
						labels.push(result[i].label);
				}
					
			}
		    //put to json
		    var jsonAllLabels={
		    		AllLabels:labels
		    }
		    
		    //kunhu
		    console.log(JSON.stringify(jsonAllLabels,null,4));
		    res.send(JSON.stringify(jsonAllLabels,null,4));
		    
		    db.close();
		    
		  });
		});
	
	}

function db_queryItemsByQueryType(res,query){
	console.log("db_queryItemsByQueryType+++");
	var label=[];
	
	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("mydb");
		  //var query = { address: "Highway 37" };
		  //var query = {};  //query all
		  dbo.collection("customers").find(query).toArray(function(err, result) {
		    if (err) throw err;
		    
		    //console.log("debug: result name:"+result[0].name);
		    //console.log("debug: result name:"+result[0].address);
		    //dumpItems(result);
		    
		    resultDb = result;
		    
		    //kunhu
		    res.send(JSON.stringify(resultDb,null,4));
		    
		    db.close();
		    
		  });
		});
	
}

//db_create();
db_connect();
//db_addItems();

app.get('/', function (req, res) {
  
	db_queryItems(res);
	 //console.log("result:???"+resultDb);
	//res.send(JSON.stringify(resultDb));
  
});

app.get('/showAllLabels', function (req, res) {

	db_showAllLabels(res);
});


app.post('/', function (req, res) {
	  
	var j={"name":"binchen"};
	console.log(req.body);
	
	var myObject=req.body;
	//var myobj = { name: "Company Inc", address: "123456", myId:"1212" };
	//myobj.name=myObject.name;
	//myobj.address=myObject.address;
	
	addItemsToDatabase(myObject);
	//db_addItems();
	
	res.send(JSON.stringify(myObject,null,4));
  
});

app.post('/delete', function (req, res) {
	  
	console.log(req.body);
	myObject=req.body;
	deleteItemsToDatabase(myObject);
	
	res.send(JSON.stringify(myObject,null,4));
  
});

app.post('/query', function (req, res) {
	  
	console.log("kunhu:query ????+++");
	console.log(req.body);
	myObject=req.body;
	query=myObject;
	db_queryItemsByQueryType(res,query);
	
});


app.delete('/', function (req, res) {
	
	console.log(req.body);
	var myObject={id:'1234'};
	var myObject={name:"myName"};
	var myObject={address:"myApp"};
	//var myObject={};   //delete all
	deleteItemsToDatabase(myObject);
	
	res.send(JSON.stringify(myObject,null,4));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


