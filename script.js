
function addnewwefield(){
    console.log("adding newfield");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",4);
    newNode.setAttribute('placeholder','enter here');
    let weOb=document.getElementById("we");
    let weaddbuttonob=document.getElementById("weaddbutton");
    weOb.insertBefore(newNode,weaddbuttonOb);
}
function addnewaqfield(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAtrribute('placeholder','enter here');
    let aqOb=document.getElementById("aq");
    let aqaddbuttonob=document.getElementById("aqaddbutton");
    aqOb.insertBefore(newnode,aqaddbuttonOb);
}
function addnewacffield(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','enter here');
    let acfOb=document.getElementById("acf");
    let acfaddbuttonob=document.getElementById("acfaddbutton");
    acfOb.insertBefore(newNode,acfaddbuttonOb);

}
function generatecv(){

}


function printcv(){
    window.print();
}

