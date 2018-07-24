var express = require('express');

const shell = require('shelljs');



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



function KShell(cmd)
{
	console.log("[cmd]:"+cmd);
	result=shell.exec(cmd);
	console.log("[result]:"+result);
	return result;
}
// downlaod

/*
 * youtube] Setting language
[youtube] 3JZ_D3ELwOQ: Downloading webpage
[youtube] 3JZ_D3ELwOQ: Downloading video info webpage
[youtube] 3JZ_D3ELwOQ: Extracting video information
[info] Available formats for 3JZ_D3ELwOQ:
format code extension resolution  note 
171         webm      audio only  DASH webm audio , audio@ 48k (worst)
140         m4a       audio only  DASH audio , audio@128k
160         mp4       192p        DASH video 
133         mp4       240p        DASH video 
134         mp4       360p        DASH video    --> only video
135         mp4       480p        DASH video 
136         mp4       720p        DASH video 
137         mp4       1080p       DASH video 
17          3gp       176x144     
36          3gp       320x240     
5           flv       400x240     
43          webm      640x360     
18          mp4       640x360     
22          mp4       1280x720    (best)
 */
app.post('/cc', function (req, res) {
	  
	console.log("kunhu:cc+++");
	console.log(req.body);
	myObject=req.body;
	query=myObject;
	
	var fileSystem = require('fs');
    var path = require('path');
	
	var cmd3=' rm ./youtubedownload/*';
	KShell(cmd3);
	
	//var cmd='ls -al';
	//KShell(cmd);
	//result=shell.exec('ls -al');
	//var cmd='youtube-dl -f 134 '+ myObject.url;
	//var cmd='youtube-dl -f 18 -o \'./youtubedownload/%(title)s.%(ext)s\''+ ' ' +myObject.url;
	var cmd='youtube-dl -f 18 -o \'./youtubedownload/%(id)s.%(ext)s\''+ ' ' +myObject.url;
	KShell(cmd);
	
	var cmd2='ls ./youtubedownload';
	var myfile=KShell(cmd2);
	myfile = myfile.replace(/(\r\n\t|\n|\r\t)/gm,"");
	
	var myfile1='./youtubedownload/'+myfile;
	//var myfile2='./youtubedownload/'+myfile;
	//var filePath = path.join(__dirname, myfile1);
	/*
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });
    */
	//myfile2='./query.json';
    //console.log('myfile222-c222:'+myfile2);
 
    //res.download(myfile1);
    var mylink={
    	urlToDownload:"http://localhost:4000/getMyFile"
    }
	
	
	res.send(JSON.stringify(mylink,null,4));
});


app.get('/getMyFile', function (req, res) {
	
	console.log("get:getMyFile+++++++++++++++++");
	myjson={
		test:'hi, ths is template',
	}
	
	var cmd2='ls ./youtubedownload';
	var myfile=KShell(cmd2);
	
	//bug fixed,need remove it, or cannot find this file.
	myfile = myfile.replace(/(\r\n\t|\n|\r\t)/gm,"");
	
	var myfile1='./youtubedownload/'+myfile;

	res.download(myfile1);
	//res.send(JSON.stringify(myjson,null,4));
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

// 
app.get('/cctest', function (req, res) {
	
	console.log("get:cctest+++++++++++++++++");
	myjson={
		test:'hi, ths is template',
	}
	
	var cmd2='ls ./youtubedownload';
	var myfile=KShell(cmd2);
	
	//bug fixed,need remove it, or cannot find this file.
	myfile = myfile.replace(/(\r\n\t|\n|\r\t)/gm,"");
	
	var myfile1='./youtubedownload/'+myfile;
	var myfile2='./youtubedownload/'+myfile;
	
	console.log("get:cctest: filename:"+myfile2);
	console.log("get:cctest: filename.length:"+myfile2.length);
	
	var file = './item.json';
	var file = './Edsszob3DVc.mp4';
	var file = './temp/item.json';
	var file = './temp/Edsszob3DVc.mp4';
	console.log("get:cctest: file:"+file);
	console.log("get:cctest: file.length:"+file.length);
	res.download(file);
	//res.send(JSON.stringify(myjson,null,4));
});

// template 
app.get('/abc', function (req, res) {
	
	myjson={
		test:'hi, ths is template',
	}
	
	res.send(JSON.stringify(myjson,null,4));
});


//change to 4000, 3000 is for meteor database
app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});


