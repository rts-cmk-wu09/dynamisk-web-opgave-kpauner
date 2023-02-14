document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body");

    let heroSection = document.querySelector('.hero');
    let servicesSection = document.querySelector('.services');
    // slå dig løs her... 
    

    heroSection.innerHTML = `
    <header><img src="${hero.image}"></header>
    <div class="herobox">
        <h1>${hero.headline}</h1>
        <p>${hero.copy}</p>
        <button><img src="${hero.icon}">hejsa</button>
    </div>
    `;

  
    services.forEach((service) => {
        let serviceslist = document.createElement('article');
        serviceslist.innerHTML += `
        <img src="${service.illustration}">
        <h2>${service.headline}</h2>
        `;
        serviceslist.classList.add('card');

        servicesSection.append(serviceslist);      
    });
 
    let footer = document.createElement('footer');
    body.append(footer);
    console.log(footer);

    console.log(servicesSection);


}) // DOMContentLoaded slut