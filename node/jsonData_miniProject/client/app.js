const form = document.getElementById("myForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userData = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        DOB: document.getElementById("dob").value,
        place: document.getElementById("place").value
    };

    const response = await fetch("http://localhost:5000/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const result = await response.text();
    alert(result);

    form.reset();
});