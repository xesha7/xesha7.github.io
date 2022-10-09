const imgFile = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg","img06.jpg","img07.jpg"]


function changeBackground () {
    const numImg = imgFile[Math.floor (Math.random()*imgFile.length)]
    document.body.style.backgroundImage = `url(img/${numImg})`
}

changeBackground()
setInterval (changeBackground , 3000)