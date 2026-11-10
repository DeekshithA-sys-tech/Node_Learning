const handleForm = async(e)=>{
   e.preventDefault()

    let data = {
        name : e.target[0].value,
        id : e.target[1].value,
        department : e.target[2].value,
        role : e.target[3].value
    }

    try {
        await fetch('http://localhost:5000/add',{
            method : 'POST',
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(data)
        })
        alert('Successfully data is inserted')
        e.target.reset()
    } catch (error) {
        alert('failed to insert data')
    }
}

const deleteAllData = async()=>{
    try {
        const data=await fetch('http://localhost:5000/deleteAll',{
            method : 'DELETE',
            headers : {"Content-Type":"application/json"},
            
        })
        alert(`Successfully data's are deleted`)
         
    } catch (error) {
        alert('failed to delete data')
    }
}

async function display(){
    try {
        const res = await fetch('http://localhost:5000/getdata')

        

        const data = await res.json()
        console.log(data)
        const tableBody = document.getElementById("tableBody")
        tableBody.innerHTML = ""

        data.forEach(item => {
            tableBody.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.id}</td>
                    <td>${item.department}</td>
                    <td>${item.role}</td>
                </tr>
            `
        })

    } catch (error) {
        console.log("Error:", error)
    }
}



