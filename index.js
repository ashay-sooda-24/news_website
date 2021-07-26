console.log('hello');

// Grabbing the new container
let newsAccordian = document.getElementById("newsAccordion");


// initialising the api related stuff
const Key = "e62e9db2de9241508b84903c2f09a9a3";

// Creating ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${Key}`,
    true
);

// once response ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHtml = "";
        

        articles.forEach(function(element,index){
            let news = `<div class="accordion-item my-3">
            <h2 class="accordion-header" id="heading${index}">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse${index}"
                aria-expanded="false"
                aria-controls="collapse${index}"
              >
                <strong>${index+1}.</strong> ${element.title}
              </button>
            </h2>
            <div
              id="collapse${index}"
              class="accordion-collapse collapse"
              aria-labelledby="heading${index}"
              data-bs-parent="#newsAccordion"
            >
              <div class="accordion-body">
              <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${element.description}</h5>
                    <p class="card-text">${element.content}.<a href="${element.url}" target="_blank">Click here to read more</a></p>
                    <p class="card-text"><small class="text-muted">${element.publishedAt}</small></p>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>`
          newsHtml += news;
        });



        newsAccordian.innerHTML = newsHtml;
    } else {
        console.log("some error occured");
    }
};

xhr.send();

// theme changing
// const main = document.getElementById('main');
// const theme = document.getElementById('theme'); //button id
// const navtheme = document.getElementById('navtheme');

// theme.addEventListener('click',(e)=>{
//     e.preventDefault();
//     if(theme.innerHTML =='dark'){
//         main.classList.add('bg-dark');
//         main.classList.remove('bg-light');
//         navtheme.classList.remove('bg-light');
//         navtheme.classList.remove('navbar-light');
//         navtheme.classList.add('navbar-dark');
//         navtheme.classList.add('bg-dark');
//         theme.innerHTML = 'light';
//         main.style.color = 'white';
        
//     }else{
//         main.classList.add('bg-light');
//         main.classList.remove('bg-dark');
//         navtheme.classList.remove('bg-dark');
//         navtheme.classList.remove('navbar-dark');
//         navtheme.classList.add('navbar-light');
//         navtheme.classList.add('bg-light');
//         theme.innerHTML = 'dark';
//         main.style.color = 'black';
//     }

// })



