const id = document.querySelector('.id')
const advice = document.querySelector('.advice')
const btn = document.querySelector('.btn')

const getData = async ()=>{
    const response = await  fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    return data.slip
}

btn.addEventListener('click', ()=>{
    

    getData().then(data => {
        id.textContent = '#' + data.id
        advice.textContent = data.advice
    })
})
