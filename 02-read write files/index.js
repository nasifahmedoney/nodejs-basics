//file system
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try{
        //read file and display in console
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data);
        //write file, create a new file 'write.txt'
        await fsPromises.writeFile(path.join(__dirname,'files','write.txt'), data);
        await fsPromises.appendFile(path.join(__dirname,'files','write.txt'), '\n\nappended into this file');
        await fsPromises.rename(path.join(__dirname,'files','write.txt'), path.join(__dirname,'files','writeRenamed.txt'));
        const new_data = await fsPromises.readFile(path.join(__dirname,'files','writeRenamed.txt'),'utf8');
        console.log(new_data);

        //delete a file
        //await fsPromises.unlink(path.join(__dirname,'files','writeRenamed.txt'));
    } catch(err){
        console.error(err);
    }
}

fileOps();


