const buttons = document.querySelectorAll('button')
const equations = document.querySelector('.equation') 
const answers = document.querySelector('.answer')

function compute(equation) {
    try {
        answers.textContent = eval(equation)   
    } catch (error) {
        alert('Invalid Equation')
    }
}

function percentage(equation) {
    answers.textContent = eval(equation+'/100')
}

buttons.forEach(item => {
    item.addEventListener('click', () => {
        if(item.textContent == '=') {
            compute(equations.textContent)
        } else if(item.textContent == 'CE') {
            equations.textContent = ''
            answers.textContent = ''
        } else if(item.textContent == 'C') {
            equations.textContent = equations.textContent.slice(0, -1)
        } else if(item.textContent == '%') {
            percentage(equations.textContent)
        } else {
            equations.textContent += item.textContent
        }
    })
})