// add modules
const fs = require('fs');
const moment = require('moment');


const addLog = (pathToLogFile, log) => {
    try{
// add moment time
        let momentTime = moment().format('MM-DD-YYYY, hh:mm:ss');
// set log array
        let logTemplate = {
            time: momentTime,
            log: log
        }
// read and parse file
            let file = fs.readFileSync(pathToLogFile, 'utf8');
            let parsedFile = JSON.parse(file);
// push element
            parsedFile.push(logTemplate);
// write file
            let writeData = JSON.stringify(parsedFile, null, 4);
            fs.writeFileSync(pathToLogFile, writeData);
    }
    catch (err){
// add moment time
        let momentTime = moment().format('MM-DD-YYYY, hh:mm:ss');
// set log array
        let logTemplate = {
            time: momentTime,
            log: log
        }
// log message to console
        console.log({
            message: "Can not do log",
            error: err,
            mustbeinlog: logTemplate
        })
    }
}

module.exports = addLog;