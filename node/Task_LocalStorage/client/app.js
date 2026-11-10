let handleFrom = (event)=>{
    event.preventDefault()
    let fname = event.target[0].value;
    let lname = event.target[1].value;
    let age = event.target[2].value;
    let place = event.target[3].value;

    let user = {
        fname : fname,
        lname:lname,
        age: age,
        place:place
    }
    let objJson = JSON.stringify(user)
    localStorage.setItem("data",objJson)
}


let display = ()=>{
    
   const data = localStorage.getItem("data")
   console.log(data) 
}