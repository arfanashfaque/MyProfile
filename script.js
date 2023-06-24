function storeData(){
    //retrieving Data
    var fname = document.getElementById("firstname").value;
     var lname = document.getElementById("lastname").value;
     //var comm = document.getElementById("comments").value;
     var mail = document.getElementById("emailId").value;
    

     //storing data
     var first = localStorage.setItem("fname",fname);
     var last = localStorage.setItem("lname",lname);
     var em = localStorage.setItem("mail",mail);

     //getting stored data
     var first = localStorage.getItem("fname",fname);
     var last = localStorage.getItem("lname",lname);
     var em = localStorage.getItem("mail",mail);

     var a,b,c;

     a = first;
     b= last;
     c = em;

//      if(a== first && b== last && c==em){
// alert("login successful")
//      }else{
//         alert("invalid ")
//      } 
}

function color(col){
    document.getElementById("screen").style.background = col
    document.getElementById("screen").style.borderRadius = "25px";
   // document.getElementById("screen").style.borderRight = "thick solid #0000FF";
   }

   function color1(col){
    document.getElementById("screen-exp").style.background = col
    document.getElementById("screen-exp").style.borderRadius = "25px";
   // document.getElementById("screen").style.borderRight = "thick solid #0000FF";
   }

   function color2(col){
    document.getElementById("screen-cer").style.background = col
    document.getElementById("screen-cer").style.borderRadius = "25px";
   // document.getElementById("screen").style.borderRight = "thick solid #0000FF";
   }

   function color3(col){
    document.getElementById("screen-edu").style.background = col
    document.getElementById("screen-edu").style.borderRadius = "25px";
   // document.getElementById("screen").style.borderRight = "thick solid #0000FF";
   }

   function color4(col){
    document.getElementById("screen-con").style.background = col
    document.getElementById("screen-con").style.borderRadius = "25px";
   // document.getElementById("screen").style.borderRight = "thick solid #0000FF";
   }

