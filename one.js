function changeImage(i) {
    if (i === 1) {
        let random = Math.floor((Math.random() * 4) + 1)
        if (random === 1) {
            random = 3
        }
        document.getElementById('img1').src = `images/images (${random}).jpg`
    } else if (i === 2) {
        let random = Math.floor((Math.random() * 4) + 1)
        if (random === 2) {
            random = 4
        }
        document.getElementById('img2').src = `images/images (${random}).jpg`
    } else if (i === 3) {
        let random = Math.floor((Math.random() * 4) + 1)
        if (random === 3) {
            random = 1
        }
        document.getElementById('img3').src = `images/images (${random}).jpg`
    } else if (i === 4) {
        let random = Math.floor((Math.random() * 4) + 1)
        if (random === 4) {
            random = 2
        }
        document.getElementById('img4').src = `images/images (${random}).jpg`
    }
}
function realimage(i) {
    if (i === 1) {
        document.getElementById('img1').src = `images/images (1).jpg`
    } else if (i === 2) {
        document.getElementById('img2').src = `images/images (2).jpg`
    } else if (i === 3) {
        document.getElementById('img3').src = `images/images (3).jpg`
    } else if (i === 4) {
        document.getElementById('img4').src = `images/images (4).jpg`
    }
}
let num = 0
let num2 = 0
let num3 = 0
let num4 = 0

function calc(i) {

    if (i === 1) {
        num++
        if (document.getElementById('num1').innerText = '0') {
            document.getElementById('num1').innerText = num
        }
        else {
            document.getElementById('num1').innerText = num
        }
        console.log('num1');
    } else if (i === -1) {
        if (num > 0) {
            num--
            if (document.getElementById('num1').innerText = '0') {
                document.getElementById('num1').innerText = num
            }
            else {
                document.getElementById('num1').innerText = num
            }
        }
    }

    if (i === 2) {
        num2++
        if (document.getElementById('num2').innerText = '0') {
            document.getElementById('num2').innerText = num2
        }
        else {
            document.getElementById('num2').innerText = num2
        }
    } else if (i === -2) {
        if (num2 > 0) {
            num2--
            if (document.getElementById('num2').innerText = '0') {
                document.getElementById('num2').innerText = num2
            }
            else {
                document.getElementById('num2').innerText = num2
            }
        }
    }

    if (i === 3) {
        num3++
        if (document.getElementById('num3').innerText = '0') {
            document.getElementById('num3').innerText = num3
        }
        else {
            document.getElementById('num3').innerText = num3
        }
    } else if (i === -3) {
        if (num3 > 0) {
            num3--
            if (document.getElementById('num3').innerText = '0') {
                document.getElementById('num3').innerText = num3
            }
            else {
                document.getElementById('num3').innerText = num3
            }
        }
    }

    if (i === 4) {
        num4++
        if (document.getElementById('num4').innerText = '0') {
            document.getElementById('num4').innerText = num4
        }
        else {
            document.getElementById('num4').innerText = num4
        }
    } else if (i === -4) {
        if (num4 > 0) {
            num4--
            if (document.getElementById('num4').innerText = '0') {
                document.getElementById('num4').innerText = num4
            }
            else {
                document.getElementById('num4').innerText = num4
            }
        }
    }
}

function num1() {
    let imgv1 = document.getElementById('num1').innerText

    if (imgv1 > 0) {
        alert(`Thanks for purchasing the ${imgv1}phone of VivoUltra from us`)
    } else {
        alert('Plz! Enter the Order Quantity')
    }
}

function numdetail2() {
    let imgv1 = document.getElementById('num2').innerText

    if (imgv1 > 0) {
        alert(`Thanks for purchasing the ${imgv1}phone of Iphone11 from us`)
    } else {
        alert('Plz! Enter the Order Quantity')
    }
}

function numdetail3() {
    let imgv1 = document.getElementById('num3').innerText

    if (imgv1 > 0) {
        alert(`Thanks for purchasing the ${imgv1}phone of VivoA10 from us`)
    } else {
        alert('Plz! Enter the Order Quantity')
    }
}

function numdetail4() {
    let imgv1 = document.getElementById('num4').innerText

    if (imgv1 > 0) {
        alert(`Thanks for purchasing the ${imgv1}phone of RedmiA3x from us`)
    } else {
        alert('Plz! Enter the Order Quantity')
    }
}