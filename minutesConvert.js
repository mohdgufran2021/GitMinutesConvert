<<<<<<< HEAD
document.getElementById("res").hidden = true
function getSecond() {
    let val = document.getElementById("num").value
    let sec = val * 60
    console.log(sec)
    if (sec) {
        document.getElementById("res").hidden = false
        document.getElementById("min").innerHTML = val
        document.getElementById("sec").innerHTML = sec
    }
=======
document.getElementById("res").hidden = true
function getSecond() {
    let val = document.getElementById("num").value
    let sec = val * 60
    console.log(sec)
    if (sec) {
        document.getElementById("res").hidden = false
        document.getElementById("min").innerHTML = val
        document.getElementById("sec").innerHTML = sec
    }
>>>>>>> af5d0ba5883be5d215b0bdfd3d721f56bcbebd98
}