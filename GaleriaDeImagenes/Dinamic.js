const fullimgbox = document.getElementById("fullimgbox");
fullimg = document.getElementById("fullimg")

function openFullimg(reference){
    fullimgbox.style.display="flex"
    fullimg.src = reference
    
}
function closeImg() {
    fullimgbox.style.display = "none"
}
