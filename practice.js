// // // function holler(){

// // //     console.log("YO PARKER WAKE UP!");
// // // }

// // // function add(x,y){

// // //    return x+y;
// // // }

// // // function subtract(x,y){

// // //     return x-y;
// // // }

// // // //  setTimeout(holler, 3000);



// // //  function doMath(a,b,mathFunc){

// // //     return mathFunc(a,b)
// // //  }

// // // const animals = ["giraffe", "donkey","dog"];

// // // function findLetters(arr){

// // // for (let i =0; i<arr.length;i++){

// // //     console.log(arr[i].charAt(0));
// // //     console.log(arr[i].charAt(arr.length));
// // // }
// // // }


// // function addKeyAndValue(arr,key,value){

// // for (let i = 0; i<arr.length; i++){

// // arr.forEach(function(val)){

// // arr.val = "doctor"

// // console.log(arr[i])

// // };

// // function addKeyAndValue(arr, key, value) {
// //     arr.forEach(function(val) {
// //       val[key] = value;
// //     });
// //     return arr;
// //   }

//   function valTimesIndex(arr){

//     for (let i=0;i<=arr.length;i++){

//      return arr.map(function(val){
        
// return val* ;

//         // console.log(val);
//         // console.log(arr[i]);

//      }
    
    
//     )   
//     }
    
// }

function makeTable(){

const table = document.createElement("table");

table.id= "table";

const headerRow = table.insertRow(0);

const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);

for (let i=0 ; i< 6; i++){
    const row = document.createElement("tr");
    row.id = "row";
    table.appendChild(row);


for (let j=0; j<6; j++){

    const myCell = document.createElement("td");
    row.appendChild(myCell);

    document.body.appendChild(table);
    }
}
};

makeTable();

