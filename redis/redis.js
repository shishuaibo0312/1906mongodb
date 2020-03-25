var redis = require('redis'),  
	            RDS_PORT = 6379,                //端口号  
	            RDS_HOST = '192.168.235.133',    //服务器IP  要连接的A服务器redis  
	            RDS_PWD = '123456wyy',     //密码  
	            RDS_OPTS = {},                  //设置项  
	            client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);  
client.auth(RDS_PWD,function(){  
			console.log('通过认证');  
});  
client.on('connect',function(){  
			client.set('520', 'yaoyao',redis.print);  
			client.get('520', redis.print);  
			console.log('connect');  
});  
client.on('ready',function(err){  
			console.log('ready');  
});
