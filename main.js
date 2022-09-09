
const url = '  enter api address  '

fetch(url)
    .then(response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

//api key