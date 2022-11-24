
console.log("connected");
const add = document.querySelector("#add");
const todoWrapper = document.querySelector(".todoWrapper");


add.addEventListener ("click", () => {
    let userInput = document.querySelector("#userInput").value;

    if(userInput.length > 5)
    {
        let li = document.createElement('li');
        li.className = "form-check mb-2"
        li.id = "check"

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = "todo-list"

              

        todoWrapper.appendChild(li)
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(userInput));
        

        document.querySelector("#userInput").value="";
    }

    else
    {
        alert("You must enter more than 5 characters");
    }
});


const remove = document.querySelector("#delete");
remove.addEventListener ("click", () =>{
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]')
    let li = document.getElementById("check");
    for(let item of checkBoxes){
        if (item.checked) { 
            item.parentElement.remove(li)
        }
    } 
});

