document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body");

    let heroSection = document.querySelector('.hero');
    let servicesSection = document.querySelector('.services');
    let facilitiesSection = document.querySelector('.facilities');

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

    let facilitiesHeader = document.createElement('h2')
    facilitiesHeader.classList.add('section-header');
    facilitiesHeader.innerHTML = `${facilities.headline}`;
    facilitiesSection.appendChild(facilitiesHeader);

    facilities.options.forEach((facility) => {
        let facilitylist = document.createElement('article');
        facilitylist.innerHTML += `
            <img src="${facility.icon}">
            <h2>${facility.headline}</h2>
            <p>${facility.text}</p>
            <a href="${facility.link}">Show me more</a>

        `;
        facilitiesSection.append(facilitylist);

    });
    


    // FOOTER
 
    let footer = document.createElement('footer');
    body.append(footer);
    console.log(footer);

    console.log(servicesSection);


}) // DOMContentLoaded slut