
//  const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/101'



fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/101')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        const iframe = document.createElement('iframe')
        iframe.src = res.objectURL
        document.body.append(iframe)
        iframe.style.width = '500px'
        iframe.style.height = '500px'
    })

const url = "https://www.loc.gov/search/?dates=2000/2099&fo=json&q=civil+rights+leaders"

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.views.item)
    })
    .catch((err) => {
        console.log(err)
    })
     


// const url = 'https://www.loc.gov/search/?dates=2000/2099&fo=json&q=civil+rights+leaders'

// const url = 'https://www.loc.gov/search/?dates=2000/2099&fo=json&q=civil+rights+leaders'

// const url = 'https://rest.blackhistoryapi.io/facts/random/13?api_key(ZHN0dWtlczg4OEZyaSBTZXAgMDkgMj)'
