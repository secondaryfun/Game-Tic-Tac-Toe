let boxes = document.querySelectorAll('.box')
let resultBox = document.querySelector('.results')
console.log(boxes)
let oTurn = true


boxes.forEach(box => {
    box.addEventListener('click', e =>{
        //get box data
        let index = parseInt(e.target.dataset.index)
        let owner = e.target.dataset.owner

        if (!owner) {
            if (oTurn) {
                e.target.style.backgroundImage = `url('images/o-icon.png')`
                oTurn = false
                e.target.dataset.owner = 'o'
            } else {
                e.target.style.backgroundImage = `url('images/x-icon.png')`
                oTurn = true
                e.target.dataset.owner = 'x'
            }
        }
        checkWin()
    })
})

function checkWin() {
    for (let i=1; i<10; i++) 
    // console.log(boxes[i-1].dataset.index)
        for (let j=1; j<10; j++) 
            for (let k=1; k<10; k++) 
                if (i != j && i != k && j != k) 
                    if (i + j + k === 15) {
                        console.log(boxes[i-1].dataset.owner)
                        if (boxes[i-1].dataset.owner && boxes[i-1].dataset.owner === boxes[j-1].dataset.owner
                            && boxes[j-1].dataset.owner === boxes[k-1].dataset.owner) {
                            console.log(`Checking: ${i} - ${j} - ${k}`)
                            resultBox.textContent = boxes[i-1].dataset.owner
                            resultBox.classList.remove('hidden')
                        }
                                
                    }
    }
