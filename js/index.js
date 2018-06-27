
// controls for changing the background
document.getElementById('background-btn').addEventListener('click', function() {
    document.getElementById('background').style.backgroundImage = "url('http://conceptartworld.com/wp-content/uploads/2016/03/Star_Wars_Art_Concept_Illustration_M01.jpg')";
});





// button controls

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the right button
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

