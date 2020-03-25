var mysql      = require('mysql');
var connection = mysql.createConnection({
	  host     : '192.168.235.23',
	  user     : 'root',
	  password : 'root'
});
 
connection.connect(function(err) {
	  if (err) {
		      console.error('error connecting: ' + err.stack);
		      return;
		    }
	 
	  console.log('connected as id ' + connection.threadId);
});
