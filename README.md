# gh-logger

This module logs errors that you give it to log.

##install 
To install this module use:
    
    npm i gh-logger
    
or (if you want to save module to package.json):

    npm i gh-logger -save        
    
##Usage
####Add to the project

    const logger = require('gh-logger');

Before using module, you have to connect with it:

    logger.connect(__dirname, './logs.json');  
    
####Add new log

    const myLog = {
        type: "error",
        error: "Something heppend"
    }       
    
You can lo everything what you want, not necessary array.

    logger.addLog(myLog);
    
####get full log list

    let logList = logger.getFullLog();
    
   
    