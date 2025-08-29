

// heart click functionality

function updateHeartNumber(id) {

    document.getElementById(id).addEventListener(
        'click', function () {
            const heartNumber = parseInt(document.getElementById('heart-number').innerText);
            console.log(heartNumber);
            const newHeartNumber = heartNumber + 1;
            document.getElementById('heart-number').innerText = newHeartNumber;
        }
    )
}

updateHeartNumber('heart-click-1');
updateHeartNumber('heart-click-2');
updateHeartNumber('heart-click-3');
updateHeartNumber('heart-click-4');
updateHeartNumber('heart-click-5');
updateHeartNumber('heart-click-6');
updateHeartNumber('heart-click-7');
updateHeartNumber("heart-click-9");
updateHeartNumber("heart-click-8");



