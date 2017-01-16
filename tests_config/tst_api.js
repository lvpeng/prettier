const prettier = require('../index');
const fs = require('fs');
var _source; //read source code from soucecode file

// Promise
const readSourceCode = new Promise(
    (resolve, reject) =>  {
        fs.readFile('./tst_sourcecode.js', 'utf-8', (err,data) => {
           if (err){
               reject(err);
           } else {
               resolve(data);
           }
        });
    }
);

readSourceCode
    .then((fulfilled) => {
        //console.log(fulfilled);
        _source = fulfilled;

        const source_pretty = prettier.format(_source, {
            // Fit code within this line limit
            printWidth: 80,

            // Number of spaces it should use per tab
            tabWidth: 2,

            // Use the flow parser instead of babylon
            useFlowParser: false,

            // If true, will use single instead of double quotes
            singleQuote: true,

            // Controls the printing of trailing commas wherever possible
            trailingComma: false,

            // Controls the printing of spaces inside array and objects
            bracketSpacing: true
        });

        //console.log(source_pretty);
    })
    .catch((error) => {
        console.log(error.message);
    });


