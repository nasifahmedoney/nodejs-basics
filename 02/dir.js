//creating new dirs
const fs = require('fs');


//create new dir
if(!fs.existsSync('./new')){
    fs.mkdir('./new', (err) => {
        if(err) throw err;
        console.log('directory created');
    })
}

// delete new dir
if(fs.existsSync('./new')){
    fs.rmdir('./new', (err) => {
        if(err) throw err;
        console.log('directory removed');
    })
}