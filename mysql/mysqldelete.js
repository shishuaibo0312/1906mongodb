var mysql = require('mysql');
var pool  = mysql.createPool({
	          host            : '192.168.235.23',
	          user            : 'root',
	          password        : 'root',
	          database        : '1906api'
});
var sql = "delete from p_users where user_name='ss'";
pool.query(sql, function (error, results, fields) {
				if (error) throw error;
				console.log('The solution is:', results);
			});
