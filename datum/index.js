// CJ table(.txt) parser; data taken from libcangjie-1.3.zip
// resulting file: cj.table.json
const readLine = require('readline');
const fs = require('fs');
const rStream = fs.createReadStream('table.txt');
rStream.setEncoding('utf8');
const wStream = fs.createWriteStream('cj.table.json');

const rl = readLine.createInterface({
  input: fs.createReadStream('table.txt'),
  output: process.stdout,
  terminal: false
});

rl
  .on('line', (line) => procLine(line))
  .on('error', (e)=>console.log(e))
  .on('close', () => {
    // console.log('HI: ', hi);
    wStream.write(JSON.stringify(hi, null, 2));
    wStream.write(JSON.stringify(cj, null, 2));
});

let hi = {}, cj = {};

function procLine(line) {
  if (!line.toString().startsWith('#') && line.toString().length) {
    const curLine = line.toString().split(/\s+/);
    if (parseInt(curLine[1]) === 1) {
      const cur10 = curLine[10].split(',');
      const cur11 = curLine[11].split(',');
      const curs = [...cur10, ...cur11];
      const codez = [...new Set( curs ) ];

      if( !hi.hasOwnProperty(curLine[0]) ){
        hi[curLine[0]] = codez;
      } else {
        hi[curLine[0]] = [ ...new Set( [...hi[curLine[0]], ...codez]) ];
      }

      for(let i = 0; i < codez.length; i++){
        if( !cj.hasOwnProperty(codez[i]) ){
          cj[codez[i]] = [curLine[0]];
        } else {
          cj[codez[i]].push(curLine[0]);
        }
      }
    }
  }
}


