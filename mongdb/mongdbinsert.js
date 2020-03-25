const MongoClient = require('mongodb').MongoClient;
const uri="mongodb://192.168.235.190";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	          const collection = client.db("yaoyao").collection("yaoyao");
		collection.insertOne(
			        {name:'zhangsan',sex:1,year:2}
			    ,function(err,result){
				console.log(result);	       
			    });

});

