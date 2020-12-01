const fs = require('fs');
//Day 1 
//Part 1
//Find the two entries that sum to 2020, what do you get if you multiply them together?

function twoEntriesSum() {

    fs.readFile('./expenses.txt', (err, data) => {
        console.time("report-expenses");
        const values = data.toString();
        const arr = values.split('\n');
        //console.log(arr);

        for(let i=0; i<arr.length; i++){
            for(let j=i; j<arr.length; j++){
              if(Number(arr[i])+ Number(arr[j])===2020){
                console.log("Part 1 *******************************");
                console.log("In this list, the two entries that sum to 2020 are "+ Number(arr[i])+ " and " + Number(arr[j]) + ".");
                let product = Number(arr[i])*Number(arr[j]);
                console.log("Multiplying them together produces " +Number(arr[i]) + " * " + Number(arr[j]) +" = " + product+", so the correct answer is " + product + ".");
              }
            } 
        }
        console.timeEnd("report-expenses");
    });
  
}
  
twoEntriesSum();




//Part 2

function threeEntriesSum() {

    fs.readFile('./expenses.txt', (err, data) => {
        console.time("report-expenses");
        const values = data.toString();
        const arr = values.split('\n');
        //console.log(arr);

        for(let i=0; i<arr.length; i++){
            for(let j=i; j<arr.length; j++){
                for(let k=j; k<arr.length; k++){
                    if(Number(arr[i])+ Number(arr[j]) + Number(arr[k])===2020){
                        console.log("Part 2 *******************************");
                        console.log("In this list, the three entries that sum to 2020 are "+ Number(arr[i])+ ", " + Number(arr[j]) + " and "+ Number(arr[k])+ ".");
                        let product = Number(arr[i])*Number(arr[j])*Number(arr[k]);
                        console.log("Multiplying them together produces " +Number(arr[i]) + " * " + Number(arr[j]) + " * " + Number(arr[k]) +" = " + product+", so the correct answer is " + product + ".");
                    }
                }
            } 
        }
        console.timeEnd("report-expenses");
    });
  
}

threeEntriesSum();