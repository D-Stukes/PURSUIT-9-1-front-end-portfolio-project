
//const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/438815'
// const url = 'https://collectionapi.metmuseum.org/public/collection/search?q=african+&showOnly=withImage'
// const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir'

const formSelectArt= document.querySelector(".formSelectArt")
formSelectArt.addEventListener(('submit'), (event) => {
    event.preventDefault()
    const artIDInput = event.target.search.value
    console.log("Art ID Input", artIDInput)


    //good id numbers: objects/438815,
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artIDInput}`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.objectURL)
    
        const selectedArtUrl = data.objectURL    
        const displayArtDiv = document.querySelector('displayArt')
        const artImage = document.createElement('img')
        // const iframe = document.createElement('iframe')
        // iframe.src = selectedArtUrl
        // console.log(selectedArtUrl)
        // iframe.style.width = '400px'
        // iframe.style.height = '400px'

        // document.body.append(iframe)
        // if(iframe){iframe.remove}
        artImage.style.width = '500px'
        artImage.style.height = '500px'
        artImage.src = selectedArtUrl
        // displayArtDiv.append(iframe)
        // document.body.append(artImage)
        artImage.setAttribute('src', selectedArt)
        artImage.setAttribute('height', 300)
        artImage.setAttribute('width', 300)
        artImage.setAttribute('alt', "art image")
        displayArt.append(artImage)

        formSelectArt.reset()

        })
        .catch((err) => {
            console.log(err)
        })
    })
    // // place fetch statement in function getArtInfo
    // const getArtInfo = (selectArtParam) => {

    //     // fetch data from museum api
    //     fetch(url)
    //         .then(response => response.json())
    //         .then (data => {console.log(data)
            
    //  const displayArt = document.querySelectory('displayArt')
        // displayArt.innerHTML = data.

            // })
            // .catch((err) => console.log(err))

            // iframe to display selected art image
            // const iframe = document.createElement('iframe')
            // iframe.src = data.objectURL
            // document.body.append(iframe)
            // iframe.style.width = '500px'
            // iframe.style.height = '500px'       
    //}  // end of getArtInfo function


//const formSelectArt= document.querySelector(".formSelectArt")

//Create an event listener on the form that will use input to display data for input from fetched museum api data object

// formSelectArt.addEventListener(('submit'), (event) => {
//     event.preventDefault()
  
//      //assign input entered in Select Art form by user into a variable
//     const selectedArt = event.target.search.value
//      console.log("Selected Art", selectedArt)
//      //select form and sassign the form's input to a variable
//     getArtInfo(selectedArt)
 
// })











