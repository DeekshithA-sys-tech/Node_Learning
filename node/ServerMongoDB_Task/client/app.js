const handleForm= async(e)=>{
    e.preventDefault()
  
        title = e.target[0].value,
        description = e.target[1].value
    



    await fetch('http://localhost:5000/add',{
        method : "POST",
        headers : {'Content-Type':"application/json"},
        body : JSON.stringify({title,description})
    })
    
}



async function display(){
   try {
        const res = await fetch('http://localhost:5000/getdata')
        let data = await res.json()
        const displaydata = document.getElementById('tablebody')
        displaydata.innerHTML = ""
        data.map((ele)=>{
            displaydata.innerHTML += 
            `
            <tr>
            <td>${ele.title}</td>
            <td>${ele.description}</td>
            </tr>
            `
        })
    } catch (error) {
        console.log(error)
    }
}