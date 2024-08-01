let footerrights = document.querySelector(".footer-rights")
footerrights.onclick=(evt)=>{
    console.log(evt)
alert("Sachin have all rights!!")
}

let url ="https://catfact.ninja/fact"
let getdata = async ()=>{
    let data = await fetch(url)
    console.log(data)
    let json = await data.json()
    console.log(json)
}
console.log(getdata())