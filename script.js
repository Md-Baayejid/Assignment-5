

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


// copy button functionality

    document.getElementById('copy-btn-1').addEventListener(
        'click', function () {
            const copyNumber = parseInt(document.getElementById('copy-number').innerText);
            console.log(copyNumber);
            
            const newCopyNumber = copyNumber + 1;
            document.getElementById('copy-number').innerText = newCopyNumber;

            alert('Number Copied: 16445');
        }
    )


    document.getElementById('copy-btn-2').addEventListener(
        'click', function () {
            const copyNumber = parseInt(document.getElementById('copy-number').innerText);
            console.log(copyNumber);
            
            const newCopyNumber = copyNumber + 1;
            document.getElementById('copy-number').innerText = newCopyNumber;

            alert('Number Copied: 999');
        }
    )


    document.getElementById('copy-btn-3').addEventListener(
        'click', function () {
            const copyNumber = parseInt(document.getElementById('copy-number').innerText);
            console.log(copyNumber);
            
            const newCopyNumber = copyNumber + 1;
            document.getElementById('copy-number').innerText = newCopyNumber;

            alert('Number Copied: 999');
        }
    )


    document.getElementById('copy-btn-4').addEventListener(
        'click', function () {
            const copyNumber = parseInt(document.getElementById('copy-number').innerText);
            console.log(copyNumber);
            
            const newCopyNumber = copyNumber + 1;
            document.getElementById('copy-number').innerText = newCopyNumber;

            alert('Number Copied: 1994-999999');
        }
    )


    document.getElementById('copy-btn-5').addEventListener(
        'click', function () {
            const copyNumber = parseInt(document.getElementById('copy-number').innerText);
            console.log(copyNumber);
            
            const newCopyNumber = copyNumber + 1;
            document.getElementById('copy-number').innerText = newCopyNumber;

            alert('Number Copied: 109');
        }
    )

    document.getElementById('copy-btn-6').addEventListener(
        'click', function () {
            const copyNumber = parseInt(document.getElementById('copy-number').innerText);
            console.log(copyNumber);
            
            const newCopyNumber = copyNumber + 1;
            document.getElementById('copy-number').innerText = newCopyNumber;

            alert('Number Copied: 109');
        }
    )