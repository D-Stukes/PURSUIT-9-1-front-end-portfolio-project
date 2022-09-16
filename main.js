

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
            console.log(data.objectDate)
            console.log(data.title)
            console.log(data.culture)
            console.log(data.medium)
            console.log(data.GalleryNumber)
            

           // console.log(data.objectURL)
    
        const selectedArtUrl = data.objectURL    
        const displayArt = document.querySelector('.displayArt')
        const displayMore = document.querySelector('.displayMore')
       
     
        let anchor = document.createElement('a')
        // const showArtInfoButton = document.querySelector('.showArtInfo')

        //check if an image (identified with id new-art) exists on the page. if so remove it, so art selections will not stack on page
        if(document.querySelector('#new-art')){document.querySelector('#new-art').remove()}

        //create image element - artImage and give it id = new-art
        let artImage = document.createElement('img')
        artImage.setAttribute('id','new-art')

        let infoLine1 = document.querySelector('#infoLine1')
        let infoLine2 = document.querySelector('#infoLine2')
        let infoLine3 = document.querySelector('#infoLine3')
        let infoLine4 = document.querySelector('#infoLine4')
        let infoLine5 = document.querySelector('#infoLine5')

        infoLine1.textContent = "Title: " + data.title
        infoLine2.textContent = "Time Period: " +  data.objectDate
        infoLine3.textContent = "Culture: " + data.culture
        infoLine4.textContent = "Medium: " + data.medium
        infoLine5.textContent = "Gallery Number: " + data.GalleryNumber
   
       
        // displayArt.append(anchor)
        // anchor.append(artImage)
        // anchor.setAttribute('href', data.objectURL )
        // anchor.setAttribute('target','_blank' )



        artImage.setAttribute('src', data.primaryImage)
        // artImage.setAttribute('height', 530)
        // artImage.setAttribute('width', 500)
        artImage.setAttribute('alt', "art piece")
        artImage.style.border = ('2px solid brown')
        displayArt.append(artImage)
        
   


        // let artLink = document.querySelector('.artLink')
        
        // const iframe = document.createElement('iframe')
                             
        // iframe.addEventListener(('click'), event => {
        //     iframe.src = data.objectURL
        // //    document.body.append(iframe)
        //     // displayMore.append(iframe)
        //     displayMore.classList.remove('hidden')
        //     iframe.style.width = '500px'
        //     iframe.style.height = '500px'
        //     displayArt.classList.add('hidden')

    // })
        

        // document.body.append(iframe)
        // if(iframe){iframe.remove}
  
        // displayArtDiv.append(iframe)
        // document.body.append(artImage)
        // })


      
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




