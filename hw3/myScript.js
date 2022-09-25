function reverse(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log("reversed number: " + (reverse(12345)));


function checkpal(str)
{
     let orig = str; //assign original 
     let pal = str.split("").reverse().join(""); //reverse string

     if(orig === pal)
     {
       console.log("passed string is palindrome ");
     }
     else
     {
       console.log("passed string is not palindrome")
     }
   }

let test = "racecar";
let test1 = "pollo";
checkpal(test);
checkpal(test1);

function possibleCombinations(str){
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}

console.log(possibleCombinations('Rosay'));

function alphabet(str){
   let string = str.split("");
   let result = string.sort().join("");
   return result;
}

console.log(alphabet("rickyrosay"));

function capitalize(str){

    let sentence = str.split(" ");
    
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
    }

    sentence.join("");
    return sentence;
}

console.log(capitalize("jonny jon johnson"));

function longest(str){
    
    let words = str.split(" ");
    let longest = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i].length > longest){ // If strSplit[i].length is greater than the word it is compared with...
        longest = words[i].length; // ...then longestWord takes this new value
         }
    }
    return longest;
}

console.log(longest("Johnny jon Johnson"));

function countVowels(str){
    
    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

console.log(countVowels("A B C E O"));

function checkPrime(str){
    let num = parseInt(str);
    let flag = true;

    for(i = 2; i <= num - 1; i++)
                if (num % i == 0) {
                    flag = false;
                    break;
                }
                 
                // Check and display alert message
            if (flag == true)
                console.log(num + " is prime");
            else
                console.log(num + " is not prime");
}

checkPrime("5");


function checkType(args){
   return typeof(args);
}

console.log(checkType("yuh"));
console.log(checkType(1));
console.log(checkType(null));

function matrix(n) {

    var i;
    var j;

    for (i=0; i < n; i++)
    {
      for (j=0; j < n; j++)
      {
           if (i === j)
           {
            
             console.log(' 1 ');
           }
                  
           else 
            {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }

matrix(4);

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));


function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(28); 

function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(15));  // [1,3,5,15] 

function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));

function raisePower(num, power){
    let a = Math.pow(num,power);
    return a;
}

console.log(raisePower(7,2));

function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));


// function that count character occurrences in string
function count_occur( str )
{
  // checking string is valid or not
  if( str.length == 0 )
  {
    console.log("Invalid string")
    return;
  }
  //cor loop to iterate over string
  for( let i = 0 ;i < str.length ;i++)
  {
    //variable counting occurrence
    let count = 0;
    for( let j = 0 ;j < str.length ;j++)
    {
      if( str[i] == str[j] && i > j  )
      {
       break;
      }
      if( str[i] == str[j]  )
      {
        count++;
      }
    }
    if( count > 0)
    console.log(`${str[i]} occurs ${count} times`);
     
  }
 
}
 
// test string
let test_str = "gfghello";
count_occur( test_str);


const arr = [3, 5, 7, 9, 11, 13, 15, 16, 18, 21, 24, 25, 28];
const target = 13;
const binarySearch = (arr = [], target) => {
   const helper = (low, high) => {
      if (low > high) {
         return -1
      }
      const middle = Math.floor((low + high) / 2)
      if (arr[middle] === target) {
         return middle
      } if (arr[middle] < target) {
         return helper(middle + 1, high)
      }
      return helper(low, middle - 1)
   }
   return helper(0, arr.length - 1)
};
console.log(binarySearch(arr, target));


function returnLarger(arr, num){
    let newArr = []
      
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > num){
        newArr.push(arr[i])
      }
    }
     
    return newArr
  }
   

  console.log(returnLarger([1,2,3,4,5,6,7,8,9],4));


function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));

function countLetter( str, char )
{
    let count = 0;
  // checking string is valid or not
  if( str.length == 0 )
  {
    console.log("Invalid string")
    return;
  }
  //cor loop to iterate over string
  for( let i = 0 ;i < str.length ;i++)
  {
    //variable counting occurrence

      if(str[i] ==  char)
      {
       count++;
      }
      if(str[i] !==  char)
      {
        continue;
      }
    }
    if( count > 0)
    console.log(`${char} occurs ${count} times`);
     
  }

countLetter("countcharsss", "s");

function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log(find_FirstNotRepeatedChar('abacddbec'));
  

  function bblSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
      // Last i elements are already in place 
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
           
          // If the condition is true then swap them
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    // Print the sorted array
    console.log(arr);
   }
    
    
   // This is our unsorted array
   var array = [234, 43, 55, 63,  5, 6, 235, 547];
    
    
   // Now pass this array to the bblSort() function
   bblSort(array);

   function Longest_Country_Name(country_name)
   {
   return country_name.reduce(function(lname, country) 
   {
     return lname.length > country.length ? lname : country;
   }, 
 "");
 }
 console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
 
 function abc() {
    console.log( arguments.callee.name );
}

abc();
