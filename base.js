document.getElementById("videoip").addEventListener('change',function(e){
    const file=e.target.files[0]
    if(file){
        const videoplayer=document.getElementById("videoplayer")
        videoplayer.src=URL.createObjectURL(file)
        videoplayer.load()
        videoplayer.play()
    }
})

