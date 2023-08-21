let input = document.querySelector("#input");
let list1 = document.querySelector("#list");
let clg = document.querySelector("#clg");

input.addEventListener(
    "keyup",
    function (even) {
        if (even.key == "Enter" && this.value == "") {
            alert("You Must Write Something Here!")
        } else if (even.key == "Enter") {
            toDOList(this.value)
            input.value = ""
        }

    })
const toDOList = (input) => {
    let li = document.createElement("li")
    li.innerHTML = `
      ${input}
    
     <i class="fa-solid fa-xmark"></i>
     
    
    `;
    li.addEventListener("click", function () {
        this.classList.toggle("done")
    })
    li.querySelector("i").addEventListener("click", function () {
        li.remove()
    })

    list1.appendChild(li)
}

clg.addEventListener("click", () => {
    let aLL = document.querySelector("#list")
    aLL.innerHTML = ""
})
