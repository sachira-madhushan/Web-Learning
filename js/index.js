function changeImage1(){
    const image=document.getElementById("image");
    image.setAttribute("src","../src/2.png")
}

function changeImage2(){
    const image=document.getElementById("image");
    image.setAttribute("src","../src/1.png")
}

async function getData(){
    try{    
        const res= await fetch('https://jsonplaceholder.typicode.com/posts/');
        const data= await res.json();

        for(var i=0;i<data.length;i++){
            var divTag=document.getElementById("data")
            var divBox=document.createElement("div")

            var script = document.createElement("h1");
            var h3tag = document.createElement("h3");
            var bod = document.createElement("p");

            divBox.classList.add("box");
            script.innerHTML="Post ID:"+data[i].id;
            h3tag.innerHTML="Title:"+data[i].title;
            bod.innerHTML="Body:"+data[i].body;

            divTag.appendChild(divBox);
            divBox.appendChild(script);
            divBox.appendChild(h3tag);
            divBox.appendChild(bod);
        }
        
    }catch(err){

    }
   


   
}


function fullName(){
    var input=document.getElementById("input").value;
    var display=document.getElementById("display");
    var fullName='';
    switch(input){
        case "intern":
            fullName="Intern Software Engineer";
            break;
        case "ase":
            fullName="Associate Software Engineer";
            break;
        case "se":
            fullName="Software Engineer";
            break;
        case "sse":
            fullName="Senior Software Engineer";
            break;
        case "atl":
            fullName="Assistant Tech Lead";
            break;
        case "tl":
            fullName="Tech Lead";
            break;
        default:
            fullName="Error Key Word";
    }
    display.innerHTML=fullName;  
}

var number_array=[];
function generateArray(){
    

    for(var i=0;i<100;i++){
        var number=Math.floor(Math.random()*100)+1;
        number_array.push(number);
    }

    document.getElementById("array").innerHTML="["+number_array+"]";
}

generateArray();

function check(){
    var inputBox=document.getElementById("input");
    var display_array=[];
    number_array.forEach(element => {
        if(element%inputBox.value==0){
            display_array.push(element);
        }
    });
    inputBox.value="";
    document.getElementById("display").innerHTML="["+display_array+"]";
}