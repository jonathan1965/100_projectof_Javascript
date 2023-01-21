
function displayName() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    

    var tasksDiv = document.getElementById("tasks");
    var newPara = document.createElement("p");
    var newparaTwo = document.createElement("p");

    var cardB = document.createElement("div");
        cardB.classList.add("card","mb-3")
    var cardBd = document.createElement("div")
        cardBd.classList.add("card-body")
    var row = document.createElement("div")
        row.classList.add("row")
    var col = document.createElement("div")
        col.classList.add("col-sm-3","text-left")

    var colTwo = document.createElement("div")
        colTwo.classList.add("col-sm-2","text-left")
        
       
    var butOn = document.createElement("div")
        butOn.classList.add("col-sm-4","text-right")     
     
    var aLink = document.createElement("a");
        aLink.classList.add("btn","btn-danger");
        aLink.classList.add("text-white")   
    //column
    tasksDiv.appendChild(cardB);
    cardB.appendChild(cardBd);
    cardBd.appendChild(row)
    //end cards
    
    //rows
    row.appendChild(col)
    row.appendChild(colTwo)
    row.appendChild(butOn)
    //end-rows

    //column
    col.appendChild(newPara);
    colTwo.appendChild(newparaTwo);
    aLink.textContent = "x";
    butOn.appendChild(aLink)
    // end-column


    newPara.innerHTML = name;
    newparaTwo.innerHTML = email;
   

}
