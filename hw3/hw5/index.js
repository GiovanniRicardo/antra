const data = [
    {region: 'US', model: 'A', sales: 150},
    {region: 'US', model: 'B', sales: 120},
    {region: 'US', model: 'C', sales: 350},
    {region: 'EU', model: 'A', sales: 200},
    {region: 'EU', model: 'B', sales: 100},
    {region: 'EU', model: 'C', sales: 250},
    {region: 'CA', model: 'A', sales: 200},
    {region: 'CA', model: 'B', sales: 100},
    {region: 'CA', model: 'C', sales: 230},
    {region: 'CA', model: 'D', sales: 400},
];

let myTable = document.querySelector('#table');
let headers = ['Region', 'Model', 'Sales'];

var result = [];


Array.from(new Set(data.map(x => x.region))).forEach(x => {
    result.push(data.filter(y => y.region === x).reduce((output,item) => {
        let val = output[x] === undefined?0:output[x];
        output[x] =  (item.sales +  val); 
       return output;
       
    },{}));

 })


 result.forEach(userObj => {
    userObj.model = 'sum';
    userObj.region= '';
});

result[0].region="US"
result[1].region="EU"
result[2].region="CA"


//nameh = result.split("").reverse().join("");




console.log(result)


// const obj1 = Object.assign({}, result);
// console.log(obj1);

// // Create an object which will serve as the order template
// const objectOrder = {
//     'region': null,
//     'model': null,
//   }
    
//   const obj2 = Object.assign(objectOrder, obj1);

//   console.log(obj2)
    

const merge = [...data, ...result];
console.log(merge);


  
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    merge.forEach(key => {
        let row = document.createElement('tr');

        Object.values(key).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);


