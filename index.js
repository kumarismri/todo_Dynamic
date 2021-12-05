var list1=[];

function buttFun(){
   var namee= document.getElementById("txxt").value;
   var obj={
       Tname:namee
   }   
   list1.push(obj);
   onScreen();
}

function onScreen(){
    var element=document.createElement("div");
    element.setAttribute("id","child1");
    const border=document.createElement("div")
    border.setAttribute("id", "bor");
    element.innerText=list1[list1.length-1].Tname;
    document.getElementById("parent1").appendChild(element);
    element.appendChild(border);
    
    const iccon=`  <div class="butn">
    <button class="pls" onclick="addList()"><i class="fas fa-plus-circle"></i></button>
    <button class="dlt"><i class="fas fa-trash-alt"></i></button>
    </div>`
    element.insertAdjacentHTML("beforeend",iccon);
    
}

function addItems(){
    const boxx=document.getElementById("box");
    boxx.style.visibility="visible"
}

function closeFun(){
    const boxxx=document.getElementById("box");
    boxxx.style.visibility="hidden"
}

function addList(){
    const boxx1=document.getElementById("box1");
    boxx1.style.visibility="visible"      
}

function closeFun2(){
    const boxxx1=document.getElementById("box1");
    boxxx1.style.visibility="hidden"
}

var arr2=[]
function buttFun2(){

    const namee1=document.getElementById("txxt1").value;
    var obj2={
        tName1:namee1
    }
    
    arr2.push(obj2)
    showOnBox();

}

function showOnBox(){
    const element1=document.createElement("div");
    element1.setAttribute("id","child2");
    element1.innerText=arr2[arr2.length-1].tName1;
    const p=document.getElementById("child1");
    p.appendChild(element1)
}