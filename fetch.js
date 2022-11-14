/*fetch('https://reqres.in/api/user')
    .then(response => response.json())
    .then(respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
        console.log(respObj.total_pages);
    })

fetch('https://reqres.in/api/user/1000')
.then (response => {
    if (response.ok){
        return response.json();
    }else {
        throw new Error('No existe el usuario 1000');
    }
})
.then(console.log)
.catch(error =>{
    console.log('error en la petición')
    console.log(error);
})

fetch('no-encontrado.html')
.then(resp => resp.text())
.then(html => {
    let body = document.querySelector('body');
    body.innerHTML = html;
})
.catch(error => {
    console.log('archivo no encontrado')
    console.log(error); 
})


let postData =persona => {
    let data= {
        nombre: persona.name,
        genero: persona.gender,
    }
    return fetch ('https://reqres.in/api/user',{ 
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'

        }
    });
}

fetch('https://swapi.dev/api/people/1')
    .then(resp => resp.json())
    .then(postData)
    .then(resp => resp.json())
    .then(console.log)
    */