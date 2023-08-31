//build initial html file
//assign variables to html elements
//source API
//configure html navigation
//make html adjustments as needed
//make sure script is updated and correlated to html
//make sure API data is sourced correctly and displayed to reflect such
//give it some style

const details = document.querySelector('#details');
const pupPic = document.querySelector('.pupPic');
const nav = document.querySelector('nav');

let puppies;

const fetchPuppies = async() => {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players');
  const json = await response.json();
  puppies = json.data;
  render();
  
}; 
  
const render = () => {
  const hash = window.location.hash.slice(1)*1;

  const html = puppies.players.map( puppy => {
    return `
    <a href='#${puppy.id !== hash ? puppy.id : ''}' class='${ puppy.id === hash ? 'selected': ''}'>
    ${puppy.name}
    </a>
    `;
  }).join('');
  nav.innerHTML = html;

  const puppy = puppies.players.find( puppy => {
    return puppy.id === hash;
  });

  let detailsHtml = 'Select Puppy to see Breed and Picture!';
  let pupPicHtml;
 if (puppy){
   detailsHtml = `${puppy.breed}`;
   pupPicHtml = (imageUrl) => {
    return `<a href='${puppy.imageUrl}'></a>`;
    
 };
}
  console.log(pupPicHtml());

  details.innerHTML = detailsHtml;
  pupPic.innerHTML = pupPicHtml();
  
};

window.addEventListener('hashchange', () => {
  render();
});
fetchPuppies();
