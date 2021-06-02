import fs from 'fs';

export function read(){
    try {
        const jsonString = fs.readFileSync("./db.json");
        return JSON.parse(jsonString);
    } catch (err) {
        console.log(err);
        return;
    }
}

export function write(jsonData, res, smsg, fmsg)  // data to be written, response, success message, failure message
{
  fs.writeFile("./db.json",JSON.stringify(jsonData, null, 2), err => {
    if (err) {
      console.log(fmsg+' Error writing file', err)
      res.status(500).send(fmsg)
    } 
    else {
        console.log(smsg+' Successfully wrote file')
        res.status(200).send(smsg)
    }
  })
}