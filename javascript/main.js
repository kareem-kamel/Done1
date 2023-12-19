let counter = 1;
let counterarray = [];
let tasksDiv = document.querySelector(".tasks-container");
let tasksnumbersDiv = document.querySelector(".tasks-numbers");
let inputbox = document.querySelector(".input");
let inputboxValue = inputbox.value;
let inputbtn = document.querySelector(".add");
let idtentity = 0;
let list = [];
let menu_bars = document.querySelector("i.fa-solid.fa-bars")
let optionsul = document.querySelector(".nav .navigation ul")
let navdiv = document.querySelector(".nav")
let checki = document.querySelector("i.fa-regular.fa-square-check")

function createTaskDiv_NumberDiv() {
    if (inputbox.value != "") {
        let inputbox = document.querySelector(".input");
        let inputboxValue = inputbox.value;
        counterarray.push(counter);
        // craeting task divs 
        let taskDiv = document.createElement("div");
        taskDiv.className = "task";
        let i1 = document.createElement("i");
        i1.className = "fa-regular fa-square-check";
        let i2 = document.createElement("i");
        i2.className = "fa-solid fa-clock";
        let i3 = document.createElement("i");
        i3.className = "fa-regular fa-trash-can";
        i3.setAttribute("index", counterarray.length - 1);
        let tasktitle = document.createElement("h4");
        tasktitle.innerHTML = inputboxValue;
        // nesting all childs under each parent
        tasksDiv.appendChild(taskDiv);
        taskDiv.appendChild(i1);
        taskDiv.appendChild(i2);
        taskDiv.appendChild(i3);
        taskDiv.appendChild(tasktitle);
        //creating the numbering divs
        let repatedlinecircleDiv = document.createElement("div");
        repatedlinecircleDiv.className = "repated-line-circle";
        let linecirclediv = document.createElement("div");
        linecirclediv.className = "line-circle";
        let upperlinediv = document.createElement("div");
        upperlinediv.className = "upper-line";
        let circlediv = document.createElement("div");
        circlediv.className = "circle";
        let circleparacontent = document.createElement("p");
        circleparacontent.innerHTML = `${counterarray.length}`;
        let lowerlinediv = document.createElement("div");
        lowerlinediv.className = "lower-line";
        //nesting all childs under each parent
        tasksnumbersDiv.appendChild(repatedlinecircleDiv);
        repatedlinecircleDiv.appendChild(linecirclediv);
        linecirclediv.appendChild(upperlinediv);
        linecirclediv.appendChild(circlediv);
        circlediv.appendChild(circleparacontent);
        linecirclediv.appendChild(lowerlinediv);
        // after adjustments
        list.push({ "id": idtentity, "title": inputbox.value, });
        window.localStorage.setItem("tasks", JSON.stringify(list));
        inputbox.value = "";
        counter++;
        idtentity++;
        inputbox.focus();
    }
}

inputbtn.addEventListener("click", createTaskDiv_NumberDiv);

document.addEventListener("click", function (e) {
    if (e.target.className === "fa-regular fa-trash-can") {
        let n = 1;
        // deleting from BOM - local storage 
        let storedTasks = JSON.parse(window.localStorage.getItem("tasks"))
        storedTasks.filter(a => a.id != e.index);
        list = storedTasks;
        window.localStorage.clear()
        window.localStorage.setItem("tasks", JSON.stringify(storedTasks));
        // deleting from the DOM
        e.target.parentElement.parentElement.previousElementSibling.lastChild.remove();
        counterarray.pop();
        counter--;
        e.target.parentElement.remove();
        document.querySelectorAll(".circle p").forEach(element => {
            element.innerHTML = n;
            n++;
        });
    }
})

menu_bars.addEventListener("click", function () {
    if (optionsul.style.display == "block") {
        optionsul.style.display = "none"
    } else {
        optionsul.style.display = "block"
    }
});

document.addEventListener("click", function (e) {
    if (e.target.className === "fa-regular fa-square-check") {
        if (e.target.parentElement.lastChild.style.textDecoration == "line-through") {
            e.target.parentElement.lastChild.style.cssText = "text-decoration: none;color: black";
            e.target.parentElement.style.cssText = "opacity: 1"
        } else {
            e.target.parentElement.lastChild.style.cssText = "text-decoration: line-through;color: grey";
            e.target.parentElement.style.cssText = "opacity: 0.5"
        }
    }
})