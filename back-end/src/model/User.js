const connection = require('../config/mysql')

const User = connection.query(
    'CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY,code VARCHAR(255) NOT NULL,name VARCHAR(255) NOT NULL, birthday VARCHAR(255) NOT NULL,photo VARCHAR(255)NOT NULL)',(err,results)=>{
       
    }
)

module.exports = User