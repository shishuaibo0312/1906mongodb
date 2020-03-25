var mysql = require('mysql');
var pool  = mysql.createPool({
	          host            : '192.168.235.23',
	          user            : 'root',
	          password        : 'root',
	          database        : '1906api'
});

sql = "INSERT INTO p_users(user_name,email,pass) VALUES('vv','vv@qq.com',123)";
pool.query(sql, function (error, results, fields) {
				if (error) throw error;
				console.log('The solution is:', results);
			});
