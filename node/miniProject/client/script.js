
let handleform = (e)=>{
    e.preventDefault()
    let fname = e.target[0].value
    let lname = e.target[1].value
    let DOB = e.target[2].value
    let place = e.target[3].value
     
    let year = new Date(DOB).getFullYear();
    console.log(year)
    let age = new Date().getFullYear()-year;
    console.log(age)
    let user = {
        fname : fname,
        lname : lname,
        DOB : DOB,
        place : place,
        age : age
    }
    let jsonObj = JSON.stringify(user)
    localStorage.setItem("user",jsonObj)
}
let displayData = ()=>{
    let details = document.getElementById('details')
    let data = localStorage.getItem("user")
    
    let name = JSON.parse(data)
    
    
    let {fname,lname,place,DOB,age}=name
    
    console.log(`${fname} ${lname}  ${place} ${age}  ${DOB}`)
    details.innerHTML=`<h1>my name is ${fname} ${lname} ${place} ${age}  ${DOB}</h1>`
}