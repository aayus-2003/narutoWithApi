let div = document.getElementById('card')

let ihtml = '';
let f = fetch('https://api.jikan.moe/v4/anime?q=narutp&sfw')

f.then((response)=>{
    return response.json()
}).then((value)=>{
    console.log(value);
    for(let key in value.data){
// console.log(value.data[key].images.jpg.image_url) 
// console.log(value.data[key].trailer.url) 

       ihtml += `
       <div class="card" style="width: 19rem;">
        <img src="${value.data[key].images.jpg.image_url}" class="card-img-top" alt="">
        <div class="card-body">
        <a href="${value.data[key].trailer.url}" class="">trailer</a>
          <h5 class="card-title">${value.data[key].title}</h5>
          <a href="${value.data[key].url}" class="btn btn-primary">movie link</a>
        </div>
      </div>
       `   
       div.innerHTML = ihtml
    }
})
