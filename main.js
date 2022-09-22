
//Tasks - onload pic and overflow met description text
//clickable pic with appearing info or click to view more button or click image
//List of sample ID numbers  - extra: list of departments and matching numbers
//Extra - improve Nav bar and hover effect, make form buttton color diagonal


const displayFirstArt = document.querySelector('.displayFirstArt')
const displayFirstInfo = document.querySelector('.displayFirstInfo')

const firstFetch = () => {
        let url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/438815`
        fetch(url2)
        .then((response) => response.json())
        .then((data) => {
        console.log('data1 =',data)

        let artImageFirst = document.createElement('img')
        artImageFirst.setAttribute('id','first-art')
        artImageFirst.setAttribute('src', data.primaryImage)
        artImageFirst.setAttribute('alt', "art piece")
        artImageFirst.style.border = ('4px solid brown')
        
        displayFirstArt.append(artImageFirst)
       

        })  // end of 2nd .then promise statement for 2nd Fetch 
        .catch(error => console.log(error))
        // end of fetch
    }
    firstFetch()  // call function to activate
  

const formSelectArt= document.querySelector(".formSelectArt")
formSelectArt.addEventListener(('submit'), (event) => {
    event.preventDefault()

    let artIDInput = event.target.search.value
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
            console.log(data.creditLine)
            
            const artIDInput = event.target.search.value
            console.log("Art ID Input", artIDInput)

            const selectedArtUrl = data.objectURL    
            const displayArt = document.querySelector('.displayArt')
            const displayMore = document.querySelector('.displayMore')
     
        let anchor = document.createElement('a')
        // const showArtInfoButton = document.querySelector('.showArtInfo')

        displayFirstArt.classList.add('hidden')
        displayFirstInfo.classList.add('hidden')

        //check if an image (identified with id new-art) exists on the page. if so remove it, so art selections will not stack on page

        if(document.querySelector('#new-art')){document.querySelector('#new-art').remove()}
        if(document.querySelector('.noPic_Avail')){document.querySelector('.noPic_Avail').remove()}

        //create image element - artImage and give it id = new-art
        let artImage = document.createElement('img')
        artImage.setAttribute('id','new-art')
        

        displayArt.addEventListener(('click'), (event) => {
            displayMore.classList.remove('hidden') 
        })
 
        
        //display additional art information until input is entered
        // displayMore.classList.remove('hidden')

        let infoLine1 = document.querySelector('#infoLine1')
        let infoLine2 = document.querySelector('#infoLine2')
        let infoLine3 = document.querySelector('#infoLine3')
        let infoLine4 = document.querySelector('#infoLine4')
        let infoLine5 = document.querySelector('#infoLine5')
        let infoLine6 = document.querySelector('#infoLine6')
        let infoLine7 = document.querySelector('#infoLine7')
        let infoLine8 = document.querySelector('#infoLine8')

        infoLine1.textContent = "Title: " + data.title
        infoLine2.textContent = "Time Period: " +  data.objectDate
        infoLine3.textContent = "Culture: " + data.culture
        infoLine4.textContent = "Medium: " + data.medium
        infoLine5.textContent = "Gallery Number: " + data.GalleryNumber
        infoLine6.textContent = "Country: " + data.country
        infoLine7.textContent = "Credit: " + data.creditLine
        infoLine8.textContent = "Repository: " + data.repository
   
       
        // displayArt.append(anchor)
        // anchor.append(artImage)
        // anchor.setAttribute('href', data.objectURL )
        // anchor.setAttribute('target','_blank' )



        artImage.setAttribute('src', data.primaryImage)
        // artImage.setAttribute('height', 530)
        // artImage.setAttribute('width', 500)
        artImage.setAttribute('alt', "art piece")
        artImage.style.border = ('4px solid brown')
        displayArt.append(artImage)
    
        //if there is data points are undefined (art id does not exist) display message
        const msgNoPic = document.createElement('p')
        msgNoPic.classList.add(('noPic_Avail'))
      
        if(data.primaryImage ==="" || data.title === undefined ){
            artImage.classList.add('hidden')
            displayMore.classList.add('hidden')
            msgNoPic.textContent= "This Art ID number does not provide an image, or does not exist in this repository. Please try another number. Thank you."
            displayArt.prepend(msgNoPic)
            msgNoPic.style.height ="4vh"
            msgNoPic.style.width="61vw"
            msgNoPic.style.backgroundColor="white"
            msgNoPic.style.border="7px solid red"
            msgNoPic.style.padding="2vw"
            msgNoPic.style.color="maroon"
            msgNoPic.style.fontSize = "1.3em"
            msgNoPic.style.fontWeight ="bold"
            msgNoPic.style.textAlign="center"
        }

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



    // const url3 = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat`

    //fetch call for onload preselected image and data
    // const url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/438815`
    // fetch(url2)
    //     .then((response) => response.json())
    //     .then((data2) => {
    //         console.log(data2)
    //     })
    // //fetch call for department ids and names - for pending usage - once I figure out how to tie into selected data or produce data
    // fetch(url3)
    //     .then((response) => response.json())
    //     .then((data3) => {
    //         console.log(data3)
    //     })
    // main fetch call, which delivers images and data
