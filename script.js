'use strict'

//create form and table
document.body.innerHTML=`<div class="container">
<form>
    <input type="text" name="name" class="name" placeholder="Enter Name">
    <button type="button" class="btn btn-dark" id="search">Search</button>
    <table class="table table-striped table-bordered" id="table">
    </table>
</form>
<p id="errormsg"></p>
</div>`;

//on click process starts
let searchbutton=document.querySelector("#search");
searchbutton.addEventListener('click',function(){
    let searchbox=document.querySelector(".name");
    let text=searchbox.value;
    console.log(text);
    document.getElementById("table").innerHTML="";
    document.getElementById("errormsg").innerHTML="";

//fetch url by async and await
async function getnationality(){    
        try {
        const response=await fetch("https://api.nationalize.io/?name="+text);
        const data=await response.json();
        console.log(data);
        displaydata(data);
           
        }catch(error){console.log(error);}
    }
getnationality();
    });


//Disply country Data
function displaydata(data){
    let country=data.country;
    console.log(country);
    if(country.length>=2){
    document.getElementById("table").innerHTML=`<thead class="table-dark">
    <th>Name</th>
    <th>Country 1</th>
    <th>Country 2</th>
    </thead>
    <tr>
    <td>${data.name}</td>
    <td>id:${country[0].country_id} probability:${country[0].probability}
    <td>id:${country[1].country_id} probability:${country[1].probability}
    </tr>`}
    else if(country.length==1){
        document.getElementById("table").innerHTML=`<thead class="table-dark">
        <th>Name</th>
        <th>Country 1</th>
        </thead>
        <tr>
        <td>${data.name}</td>
        <td>id:${country[0].country_id} probability:${country[0].probability}
        </tr>`}
    else if(country.length==0){
        document.getElementById("errormsg").innerHTML="Error: No country available"
    
    };
};
       
        
        
    


 
 
