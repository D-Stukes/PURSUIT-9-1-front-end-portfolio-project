
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
        // artLink.setAttribute('href', data.objectURL )
        
        // anchor.appendChild(artImage)
        artImage.addEventListener(('click'), (event) => {
           event.preventDefault()
           displayArt.style.display = "none"
           const displayMore = document.querySelector('.displayMore')
           displayMore.style.width = 500
           displayMore.style.height = 530
           displayMore.appendChild(artLink)
        })


///testing a modal
const open_artModal_button = document.querySelectorAll('.open_artModal')
const close_artModal_button = document.querySelector('.close_artModal')
const artModalOverlay = document.querySelector('.artModal-overlay')

// Attach event listeners
open_artModal_button.addEventListener('click', open_artModal)
artModal_overlay.addEventListener('click', close_artModal)
document.addEventListener('keydown', close_artModal)

// Utility functions to open/close the modal
function open_artModal() {
  artModal_overlay.classList.remove('hidden')
}

function close_artModal(event) {
  if (
    event.target.classList.contains('close-modal') ||
    event.target.id === 'artModal-overlay' ||
    (event.type === 'keydown' && event.key === 'Escape')
  ) {
    artModal_overlay.classList.add('hidden');
  }
}




        
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











