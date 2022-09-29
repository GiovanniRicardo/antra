const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: 'gold'
};
    
for(index in state) {
const select = document.getElementById("one"); //populate values 
select.options[select.options.length] = new Option(state[index]);
}

Object.keys(state).forEach(key => {  //populate property names 

const select = document.getElementById("two");
select.options[select.options.length] = new Option(key);

})

const droptwo = document.getElementById("two");
const dropone = document.getElementById("one");

droptwo.addEventListener("change",()=>{
    dropone.value = state[droptwo.value];
})

dropone.addEventListener("change",()=>{
    droptwo.value = Object.keys(state).find(
        key => state[key] === dropone.value
      );
})