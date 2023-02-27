  
 const loadCountry = (region) =>{
     const url = `https://restcountries.com/v3.1/region/${region}`;
     fetch(url)
     .then(res => res.json())
     .then(data => showCountryName(data))
 }
     const showCountryName = (data) => {
          const countryName = document.getElementById('name-Of-Country');
          countryName.innerHTML = '';
          data.forEach(element => {
               // console.log(element.cca2)
               const li = document.createElement('li')
               li.innerHTML = `${element.name.common}`
               li.addEventListener('click',function(){
                    displayCountry(element)
               })
                
               countryName.appendChild(li)
            });   
     }
     const displayCountry = (element) => {
          const card = document.getElementById('show-card');
          card.innerHTML = '';
          const div = document.createElement('div')
          div.classList.add('col')
          div.innerHTML = `
          <div class="card" style="width: 18rem;">
            <img src="${element.flags.png}" class="card-img-top shadow-lg" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${element.name.common}</h5>
                <p class="card-text">Population: ${element.population}</p>
                 <button class="btn btn-primary" onclick="showmodal('${element.cca2}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
          
            </div>
        </div>
          `;
          card.appendChild(div)
     }
     const showmodal= (code) => {
          const url2 = `https://restcountries.com/v3.1/alpha/${code}`
           fetch(url2)
           .then(res =>res.json())
           .then(data => modalDisplay(data))
     }

     const modalDisplay = (data)=>{
          data.forEach(mod =>{
               console.log(mod.maps.googleMaps)
               console.log(mod)
               const title = document.getElementById('exampleModalLabel');
               title.innerText = mod.name.common;
               const body = document.getElementById('modal-body');
               body.innerHTML=`
                    <h3>Time-Zone :> ${mod.timezones[0]}</h3>
                    <h3>weckend :${mod.startOfWeek}</h3>
                    <h3>Capital:${mod.capital}</h3>
               `;
          })
     };
 const africa = ()=>{
      loadCountry('africa');
 }
 const america = ()=>{
      loadCountry('north america');
 }
 const asia = ()=>{
      loadCountry('asia');
 }
 const Oceania = ()=>{
      loadCountry('Oceania');
 }
 
  