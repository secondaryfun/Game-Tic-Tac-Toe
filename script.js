let boxes = Array.from(document.querySelectorAll('.box'))
let resultBox = document.querySelector('.results')
resultBox.addEventListener('click', () => {
    resultBox.classList.toggle('hidden')
    window.location.reload()
})
console.log(boxes)
let oTurn = true

boxesMapped = boxes.sort((a,b) => a.dataset.value < b.dataset.value)

boxesMapped.forEach(box => {
    box.addEventListener('click', e =>{
        //get box data
        let owner = e.target.dataset.owner
        console.log(e.target.dataset.index)
        if (owner === '-') {
            if (oTurn) {
                e.target.style.backgroundImage = `url('images/o-icon.png')`
                oTurn = false
                e.target.dataset.owner = 'o'
            } else {
                e.target.style.backgroundImage = `url('images/x-icon.png')`
                oTurn = true
                e.target.dataset.owner = 'x'
            }
            checkWin()
        }
    })
})

function checkWin() {
    let a,b,c
    for (let i=0; i<9; i++) 
        for (let j=0; j<9; j++) 
            for (let k=0; k<9; k++) 
                if (i + j + k === 12) 
                if (i != j && i != k && j != k) {
                    console.log(`${i}-${j}-${k} Values=${boxesMapped[i].dataset.value}-${boxesMapped[j].dataset.value}-${boxesMapped[k].dataset.value}`)
                    // // console.log(`<${boxesMapped[i].dataset.index}-${boxesMapped[j].dataset.index}-${boxesMapped[k].dataset.index}:${boxesMapped[i].dataset.owner}-${boxesMapped[j].dataset.owner}-${boxesMapped[k].dataset.owner}`)
                    // console.log(`${boxesMapped[i].dataset.index}-${boxesMapped[j].dataset.index}-${boxesMapped[k].dataset.index}:Values=${boxesMapped[i].dataset.value}-${boxesMapped[j].dataset.value}-${boxesMapped[k].dataset.value}:${boxesMapped[i].dataset.owner}.${boxesMapped[j].dataset.owner}.${boxesMapped[k].dataset.owner}`)
                    if (boxesMapped[i].dataset.owner != '-'
                        && boxesMapped[i].dataset.owner === boxesMapped[j].dataset.owner
                        && boxesMapped[i].dataset.owner === boxesMapped[k].dataset.owner) {
                        resultBox.textContent = `${boxesMapped[i].dataset.owner}'s WIN!`
                        resultBox.classList.remove('hidden')
                    }
                }
    
}
