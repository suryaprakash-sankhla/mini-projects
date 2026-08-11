let btn = document.querySelector(".addBtn");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let div = document.querySelector(".taskss");

btn.addEventListener("click", function () {
 
    if(inp.value == ""){
        alert("Please enter a task. This field cannot be empty.");
    } else {
//  program to add items to list 
    let item = document.createElement('li');
    item.innerText= inp.value;
    div.appendChild(item);
    inp.value ="";

// program to add Done button to list 
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML='&#10003';
    doneBtn.classList.add("done");
    doneBtn.classList.add("doneBtn");

    item.appendChild(doneBtn);  
    
// program to done task from list
let doneBtns = document.querySelectorAll(".done");

for(doneBtn of doneBtns){
    doneBtn.addEventListener("click", function (){
        let par1 = this.parentElement;
        par1.classList.add('complete');
        doneBtn.remove();
        delBtn.remove();
    });
}    

// program to add delete button to list 
    let delBtn = document.createElement("button");
    delBtn.innerHTML="&#10008";
    delBtn.classList.add("delete");
    delBtn.classList.add("delBtn");

    item.appendChild(delBtn);
 

// program to delete task from list
    let delBtns = document.querySelectorAll(".delete");

for(delBtn of delBtns){
    delBtn.addEventListener("click", function (){
     let par = this.parentElement;
     par.remove();
    });
}


}

});


