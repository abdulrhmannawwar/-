let url = 'https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300';

let btn = document.getElementById('btn');
console.log(btn);
const hadith = document.getElementById('hadith');

function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

async function fetchUrl(url){
    try{
        let promise = await fetch(url);
        let data = await promise.json();
        console.log(data.items);
        let rand = getRandomInt(300);
        hadith.textContent = data.items[rand].arab;
        btn.addEventListener('click',()=>{
            rand = getRandomInt(300);
            hadith.textContent = data.items[rand].arab;
        });
    }
    catch(e){
        console.error('could not fetch',e);
    }
    
}
fetchUrl(url);
