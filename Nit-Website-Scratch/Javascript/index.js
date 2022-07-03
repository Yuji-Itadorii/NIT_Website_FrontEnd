document.getElementById('institute-dropdown').style.display = "none";
function institutedropdown(){
    var dis = document.getElementById('institute-dropdown');
    if(dis.style.display == "none"){
        dis.style.display = "block";
    }
    else{
        dis.style.display = "none";
    }
}

document.getElementById('acadmics-dropdown').style.display = "none";
function acadmicsdropdown(){
    var dis = document.getElementById('acadmics-dropdown');
    if(dis.style.display == "none"){
        dis.style.display = "block";
    }
    else{
        dis.style.display = "none";
    }
}

document.getElementById('departments-dropdown').style.display = "none";
function departmentdropdown(){
    var dis = document.getElementById('departments-dropdown');
    if(dis.style.display == "none"){
        dis.style.display = "block";
    }
    else{
        dis.style.display = "none";
    }
}

document.getElementById('student-dropdown').style.display = "none";
function Activitesdropdown(){
    var dis = document.getElementById('student-dropdown');
    if(dis.style.display == "none"){
        dis.style.display = "block";
    }
    else{
        dis.style.display = "none";
    }
}

document.getElementById('slider').style.backgroundImage = "url('/image/slide1.jpeg')";
setInterval(() => {
    
    setTimeout(() => {
        document.getElementById('slider').style.backgroundImage = "url('/image/slide2.jpg')";
    }, 3000);

    setTimeout(() => {
        document.getElementById('slider').style.backgroundImage = "url('/image/slide3.jpeg')";
    }, 6000);

    setTimeout(() => {
        document.getElementById('slider').style.backgroundImage = "url('/image/slide1.jpeg')";
    }, 9000);

}, 9000);