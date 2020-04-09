 //de o comando npm init -y no terminal, o node vai inciar o projeto
 //package.json será criado após o comando acima
//Após de o comando npm i express para criar node modules, apos faça o const express
//após de npm i nodemon para deixar servidor ligado, altere o star do packege.json para nodemon
const express =require("express")
const server = express()


const ideas = [
    {
        img: "coding.png",
        tittle: "Cursos de Programação",
        category:"Estudo",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde eaque in repelle",
        url:"https://rocketseat.com.br"
    },
    {
        img: "sport.png",
        tittle: "Excercício",
        category:"Saúde",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde eaque in repelle",
        url:"https://belezaesaude.com/exercicios-fisicos/"
    },
    {
        img: "coding.png",
        tittle: "Meditação",
        category:"Mentalidade",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde eaque in repelle",
        url:"https://belezaesaude.com/exercicios-fisicos/"
    },
    {
        img: "mascara.png",
        tittle: "Como usar Máscara",
        category:"Saúde",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde eaque in repelle",
        url:"http://multimedia.3m.com/mws/media/784789O/security-booklet.pdf"
    },

]




//configurar arquivos estáticos 
server.use(express.static("public"))

//config nunjucks, para poder adicionar variavies no frontend
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server, 
    noCache:true, //desabilita o cash
})

//rotas
server.get("/",function(req,res){ 

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
        for (let idea of reversedIdeas){
           if (lastIdeas.length<2){
             lastIdeas.push(idea)
           }
        }
    

    return res.render("index.html",{ideas: lastIdeas})
})

server.get("/ideias",function(req,res){ 

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html",{ideas: reversedIdeas})
})

//servidor ligado na porta 3000 do localhost
server.listen(3000)





