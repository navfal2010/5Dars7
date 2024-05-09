let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]

let Wrapper = document.querySelector('.wrapper')

let all = (data) => {
    return data.map((v) => {

        let p = document.createElement('p')
        p.style.textAlign = 'center'
        p.style.fontSize = '30px'
        p.style.color = 'white'
        p.innerHTML = v
        Wrapper.appendChild(p)
        if (v > 50) {
            p.style.backgroundColor = 'green';
        }

        else {
            p.style.backgroundColor = 'red';
        }

    })
}

all(data)





