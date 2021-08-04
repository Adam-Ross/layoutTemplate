const list = document.querySelector('#list')
const btn = document.querySelector('#btn')

const data = [
    {
        name: 'garrett ross',
        job: 'software guy',
        year: 1999
    },
    {
        name: 'garrett ross',
        job: 'software guy',
        year: 1999
    },
    {
        name: 'garrett ross',
        job: 'software guy',
        year: 1999
    },
    {
        name: 'garrett ross',
        job: 'software guy',
        year: 1999
    },
    {
        name: 'garrett ross',
        job: 'software guy',
        year: 1999
    },
    {
        name: 'garrett ross',
        job: 'software guy',
        year: 1999
    },
    {
        name: 'garrett ross',
        job: 'software guy',
        year: 1999
    }
]


loadEventListeners() 

function loadEventListeners() {
    btn.addEventListener('click', makeLis)
}

function makeLis() {
    for(let i = 0; i < data.length; i++) {
        let current = data[i]
        const listItem = document.createElement('li')
        listItem.className = "listItem"
        const h1 = document.createElement('h1')        
        h1.textContent = current.name
        const p = document.createElement('p')
        p.textContent = current.job
        const h2 = document.createElement('h2')
        h2.textContent = current.year
        listItem.appendChild(h1)
        listItem.appendChild(p)
        listItem.appendChild(h2)
        list.appendChild(listItem)
    }
}