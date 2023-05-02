const memberImage = document.querySelector('#memberImage > img');
const memberName = document.getElementById('memberName');
const memberQuote = document.getElementById('memberQuote');
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
let counter = 0;

const Members = [
{
Mname: "Luca Poe", 
quote: "Developer Node.js. Gosto de café e filosofia, é isso.", 
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Twemoji2_1f602.svg/1200px-Twemoji2_1f602.svg.png"
},
{
    Mname: "Gustavo Gaque", 
    quote: "Literalmente eu.", 
    image: "https://resizing.flixster.com/owRimepv9PkOV5fk1MzCyK6i7dE=/300x300/v2/https://flxt.tmsimg.com/assets/p24116_i_v9_ac.jpg"
},
{
    Mname: "Vitor Zechini", 
    quote: "Amante do cosmos.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzeIYJ32_l_0iwnl0xW6iboZTRcOzZ7RdLQ&usqp=CAU"
},
{
    Mname: "Julia Bitencourt", 
    quote: "Gosto de ler.", 
    image: "https://i.pinimg.com/236x/2c/98/20/2c9820985989de2f7b94b9259289edd6.jpg"
},
{
    Mname: "Maria Victoria", 
    quote: "Gosto muito de hackathons e do meu grupo!", 
    image: "https://sociedadedospsicologos.files.wordpress.com/2018/06/11.jpg?resize=900%2C809"
},

{
    Mname: "Gustavo Rodrigues", 
    quote: "Alguém por aí.", 
    image: "https://i.pinimg.com/originals/27/54/aa/2754aa625c3b7b4b8074b4e55319e279.jpg"
},
{
    Mname: "Eduardo Lizzi", 
    quote: "Sou muito fã de Hackathons.", 
    image: "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png"
},
{
    Mname: "João Vitor", 
    quote: "Sou muito fã de Hackathons também!", 
    image: "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png"
},
{
    Mname: "Mateus Gustavo", 
    quote: "Sou muito fã de Hackathons também, mais ainda!", 
    image: "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png"
},
]


function ChangeMember(image, Mname, quote){
    memberName.innerText = Mname;
    memberQuote.innerText = `“`+ quote + `”`;
    memberImage.src = image;
}

function setMember(){
    const {Mname, quote, image} = Members[counter];
    ChangeMember(image, Mname, quote);
}

nextBtn.addEventListener('click', ()=>{
    if(counter == Members.length-1){
        counter = 0;
    }else{
        counter++;
    }
    setMember();
});

previousBtn.addEventListener('click', ()=>{
    if(counter == 0){
        counter = Members.length-1;
    }else{
        counter--;
    }
    setMember();
})

ChangeMember(Members[0].image, Members[0].Mname, Members[0].quote);