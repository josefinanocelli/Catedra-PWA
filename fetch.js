fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
    })

