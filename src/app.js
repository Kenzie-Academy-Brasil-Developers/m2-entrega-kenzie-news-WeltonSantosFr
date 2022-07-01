class App {

    static requisicao() {
        
        fetch('https://kenzie-news-api.herokuapp.com/api/news')
            .then(res => res.json())
            .then((data) => {
                
                for (let i = 0; i < data.length; i++) {
                    if (i === 0) {
                        const li = document.createElement('li')
                        li.className = "primary"
                        const imgDiv = document.createElement('div')
                        const img = document.createElement('img')
                        img.src = data[i].imagem
                        const category = document.createElement('p')
                        category.className = "category"
                        category.innerText = data[i].categoria
                        const title = document.createElement('h3')
                        title.className = "title"
                        const a = document.createElement('a')
                        a.href = data[i].noticia_completa
                        a.innerText = data[i].titulo
                        title.append(a)
                        const resume = document.createElement('p')

                        let texto = data[i].resumo.slice(0, 50)
                        resume.className = "resume"
                        resume.innerText = texto + '...'
                        const font = document.createElement('p')
                        font.className = "font"
                        font.innerText = data[i].fonte
                        const primary = document.querySelector('.principal')
                        imgDiv.append(img)
                        primary.append(imgDiv)
                        li.append(category, title, resume, font)
                        primary.append(li)
                    }
                    else {

                        const li = document.createElement('li')
                        li.className = "secondary"
                        const img = document.createElement('img')
                        img.src = data[i].imagem
                        const category = document.createElement('p')
                        category.className = "category"
                        category.innerText = data[i].categoria
                        const title = document.createElement('h3')
                        title.className = "title"
                        const a = document.createElement('a')
                        a.innerText = data[i].titulo
                        a.href = data[i].noticia_completa
                        title.appendChild(a)
                        const resume = document.createElement('p')

                        let texto = data[i].resumo.slice(0, 50)
                        resume.className = "resume"
                        resume.innerText = texto + '...'
                        const font = document.createElement('p')
                        font.className = "font"
                        font.innerText = data[i].fonte
                        const secondary = document.querySelector('.secundarias')
                        const imgDiv = document.createElement('div')
                        const infoDiv = document.createElement('div')
                        infoDiv.append(category, title, resume, font)
                        imgDiv.append(img)
                        li.append(imgDiv, infoDiv)
                        secondary.append(li)
                    }

                }
            })
    }
}

console.log(App.requisicao())