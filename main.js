
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
        let artImage = document.createElement('img')
        let artLink = document.querySelector('.artLink')
        // const iframe = document.createElement('iframe')
        // iframe.src = selectedArtUrl
        // console.log(selectedArtUrl)
        // iframe.style.width = '400px'
        // iframe.style.height = '400px'

        // document.body.append(iframe)
        // if(iframe){iframe.remove}
  
        // displayArtDiv.append(iframe)
        // document.body.append(artImage)



        artImage.setAttribute('src', data.primaryImage)
        artImage.setAttribute('height', 530)
        artImage.setAttribute('width', 500)
        artImage.setAttribute('alt', "art piece")
        artImage.style.border = ('2px solid brown')
        displayArt.append(artImage)
        
        const showArtInfoButton = document.querySelector('.showArtInfo')
        const displayMore = document.querySelector('.displayMore')
        // artLink.setAttribute('href', data.objectURL )
        
        // anchor.appendChild(artImage)
        // artImage.addEventListener(('click'), (event) => {
        // event.preventDefault()
        showArtInfo.addEventListener(('click'), (event) => {
            event.preventDefault()
        //hide first image, and make image with full info visible inside of displayMore div with hyperlink to data.objectURL website location
        displayArt.style.display = "none"
        displayMore.classList.add('visible')
        displayMore.style.width = '530'
        displayMore.style.height = '530'
        artLink.setAttribute('src', data.objectURL)
        displayMore.appendChild(artLink)
       
        })


//testing a modal
// const open_artModal_button = document.querySelectorAll('.open_artModal_btn')
// const close_artModal_button = document.querySelector('.close_artModal_btn')
// const artModalOverlay = document.querySelector('.artModal-overlay')


// // Attach event listeners to modal buttons
// open_artModal_button.addEventListener('click', open_artModal)
// artModal_overlay.addEventListener('click', close_artModal)


// // make modal and overlay visible
// function open_artModal() {
//   artModal_overlay.classList.remove('hidden')
//   artModal_info.classList.remove('hidden')
// }

// function close_artModal_btn(event) {
//   if ( event.target.classList.contains('close-Artmodal_btn') ||
//     event.target.class === 'artModal-overlay' ||
//     // if the clos_artModel button or overlay is clicked, set set the event.type = to a key pressed or the event.key = ESC is pressed
//    ) 
//    (event.type === 'keydown' && event.key === 'Escape')
//   } 
//   //hide the overlay
//     artModal_overlay.classList.add('hidden');
//   }
// }

//Notes - Modal - General Concept
// HTML - 
// 1. Open Button 
// 2. Overlay
// 3. Content
// 4. Close Button 

// JS -
// 1. event listener for open button, activate Overlay and content - make display visible
// 2. event listener for close button, made button, overlay and content hidden

        
        // function showArtInfo(){
        //    // var image = document.getElementById('image');
        //     let source = artPic.src;
        //     window.open(source);
        // }
        // artImage.addEventListener(('click'), (event) => {
        //     event.preventDefault()
        //     artImage.setAttribute('src', `${selectedArtUrl}`)
    //    anchor.setAttribute('href', data.objectURL)
    //    anchor.setAttribute('target', '_blank')
        // artImage.onclick = () => {
        //     // window.location = `${selectedArtUrl}`;
        //     anchor.setAttribute('href', `${selectedArtUrl}`);
        //     // a.target = "_blank"
        // };
        // artImage.onclick = showArtInfo()
        // })
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











