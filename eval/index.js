
const ul = document.getElementById('person1');
const list = document.createDocumentFragment();
const url = 'https://randomuser.me/api/?results=20&inc=phone,name,picture,email,dob';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let people = data;
      
       for(let i = 0;i<people.results.length;i++){

        let li = document.createElement('li');
        let name = document.createElement('h2');
        let email = document.createElement('span');
        let phone = document.createElement('span');
        let br = document.createElement('br');
        let img = document.createElement('img');
        let btn = document.createElement("BUTTON");
        let dob = document.createElement("dob");
        dob.id = "dob-id";
        btn.id = "btn-id";

        dob.classList.add("dob-class");


        img.setAttribute("src", people.results[i].picture.medium);
       
        name.innerHTML = `${people.results[i].name.first}`;
        email.innerHTML = `Email: ${people.results[i].email}`;
        br.innerHTML = ``;
        phone.innerHTML = `Phone: ${people.results[i].phone}`;
        btn.innerHTML = "Show DOB";
        dob.innerHTML = `DOB: ${people.results[i].dob.date}`;
       
        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(email);
        li.appendChild(br);
        li.appendChild(phone);
        li.appendChild(btn);
        li.appendChild(dob);
        list.appendChild(li);
      };

  ul.appendChild(list);

})


document.addEventListener('click', function(e){
    if(e.target && e.target.id== 'btn-id'){
         var myDiv = document.getElementById("dob-id");
         myDiv.setAttribute("style", "display: block;")
    }
});



    // but.onclick = callJavascriptFunction;


    // window.onload=function(){
    //     document.querySelector('.butn').addEventListener('click', showMore);
       
    //     function showMore(){
    //        document.querySelector('#dob-id').style.display ='block'
    //     }
       
    //    }