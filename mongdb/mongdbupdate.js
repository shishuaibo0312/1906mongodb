const MongoClient = require('mongodb').MongoClient;
const uri="mongodb://192.168.235.190";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	               const collection = client.db("yaoyao").collection("yaoyao");
		       collection.updateOne({name:'lisi'},{
			               $set:{name:'wangwu'}
			           },function(err,result){
					console.log(result);	      
				   });
});

