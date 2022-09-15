
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
           // console.log(data.objectURL)
    
        const selectedArtUrl = data.objectURL    
        const displayArt = document.querySelector('.displayArt')
        const displayMore = document.querySelector('.displayMore')
        let artImage = document.createElement('img')
        let anchor = document.createElement('a')

        displayArt.append(anchor)
        anchor.append(artImage)
        anchor.setAttribute('href', data.objectURL )
        anchor.setAttribute('target','_blank' )
        // let artLink = document.querySelector('.artLink')
        
        const iframe = document.createElement('iframe')
                             
        iframe.addEventListener(('click'), event => {
            iframe.src = data.objectURL
        //    document.body.append(iframe)
            // displayMore.append(iframe)
            displayMore.classList.remove('hidden')
            iframe.style.width = '500px'
            iframe.style.height = '500px'
            displayArt.classList.add('hidden')

    })
        

        // document.body.append(iframe)
        // if(iframe){iframe.remove}
  
        // displayArtDiv.append(iframe)
        // document.body.append(artImage)
        // })


        artImage.setAttribute('src', data.primaryImage)
        artImage.setAttribute('height', 530)
        artImage.setAttribute('width', 500)
        artImage.setAttribute('alt', "art piece")
        artImage.style.border = ('2px solid brown')
        // displayArt.append(artImage)
        
        const showArtInfoButton = document.querySelector('.showArtInfo')
      
        // artLink.setAttribute('href', data.objectURL )
        
        // anchor.appendChild(artImage)
        // artImage.addEventListener(('click'), (event) => {
        // event.preventDefault()

        // showArtInfo.addEventListener(('click'), (event) => {
        //     event.preventDefault()
        //hide first image, and make image with full info visible inside of displayMore div with hyperlink to data.objectURL website location
        // displayArt.classList.add('hidden')
        // displayMore.classList.remove('hidden')
        // displayMore.style.width = '530'
        // displayMore.style.height = '530'
        // artLink.setAttribute('src', data.objectURL)
        // displayMore.appendChild(artLink)
       
        // })




        formSelectArt.reset()

        })
        .catch((err) => {
            console.log(err)
        })
    })







//Notes - Modal - General Concept
// HTML - 
// 1. Open Button 
// 2. Overlay
// 3. Content
// 4. Close Button 

// JS -
// 1. event listener for open button, activate Overlay and content - make display visible
// 2. event listener for close button, made button, overlay and content hidden




