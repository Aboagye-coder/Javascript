let count= 0
let CountEl= document.getElementById("count")
let SaveEl= document.getElementById("save-el")

function increment(){
    count +=1
    CountEl.innerHTML= count

}


function save(){
    let str= count +"-"
    SaveEl.innerHTML+=str
    count+=0
}
