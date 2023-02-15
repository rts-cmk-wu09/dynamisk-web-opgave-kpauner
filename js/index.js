document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body");

    let heroSection = document.querySelector('.hero');
    let servicesSection = document.querySelector('.services');
    let facilitiesSection = document.querySelector('.facilities');
    let sitesSection = document.querySelector('.sites')
    let advantagesSection = document.querySelector('.advantages')

    // slå dig løs her... 
    

    heroSection.innerHTML = `
    <div class="herobox">
        <h1>${hero.headline}</h1>
        <p>${hero.copy}</p>
        <button><img src="${hero.icon}">Explore</button>
    </div>
    `;

    let heroImg = document.createElement('img');
    heroImg.setAttribute('src', hero.image);
    heroImg.classList.add('hero-img');
    heroSection.append(heroImg);
  
    services.forEach((service) => {
        let serviceslist = document.createElement('article');
        serviceslist.innerHTML += `
        <img src="${service.illustration}">
        <h2>${service.headline}</h2>
        <p>${service.text}</p>
        <a href="#">${service.linktext}</a>
        `;

        serviceslist.classList.add('card', 'just-center');
        servicesSection.append(serviceslist);      
    });

    // FACILITIES

    let facilitiesHeader = document.createElement('h2')
    facilitiesHeader.classList.add('section-header');
    facilitiesHeader.innerHTML = `${facilities.headline}`;
    facilitiesSection.appendChild(facilitiesHeader);

    facilities.options.forEach((facility) => {
        let facilitylist = document.createElement('article');
        facilitylist.innerHTML += `
            <img src="${facility.icon}">
            <h3>${facility.headline}</h3>
            <p>${facility.text}</p>
            <a href="${facility.link}">Show me more</a>           

        `;
        facilitylist.classList.add('card');
        facilitiesSection.append(facilitylist);

    });
    
    // SITES

    let sitesHeader = document.createElement('div')
    sitesHeader.innerHTML = `
        <h2>${sites.headline}</h2>
        <p>${sites.text}</p>
        <button><img src="${sites.btnicon}">Explore</button>
    `;

    let sitesList = document.createElement('ul')
    sites.places.forEach((site) => {
        sitesList.innerHTML += `
        <li>
            <img src="${site.img}">
            <h2>${site.name}</h2>
            <p>${site.city}</p>
            <a href="#">View the site</a>
        </li>`;
    });
    sitesSection.append(sitesHeader);
    sitesSection.append(sitesList);

    // ADVANTAGES

    let advantagesHeader = document.createElement('h2')
    advantagesHeader.classList.add('section-header');
    advantagesHeader.innerHTML = `Our Advantages`;
    advantagesSection.appendChild(advantagesHeader);

    advantages.forEach((advantage) => {
        let advantagelist = document.createElement('article');
        advantagelist.innerHTML += `
            <img src="${advantage.icon}">
            <h3>${advantage.headline}</h3>
            <p>${advantage.text}</p>
            <a href="${advantage.link}">Show me more</a>           

        `;
        advantagelist.classList.add('card');
        advantagesSection.append(advantagelist);

    });

    // FOOTER
 
    let footer = document.createElement('footer');
    body.append(footer);
    console.log(footer);

    console.log(sitesSection);


}) // DOMContentLoaded slut