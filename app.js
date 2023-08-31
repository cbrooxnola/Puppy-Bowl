//build initial html file
//assign variables to html elements
//source API
//configure html navigation
//make html adjustments as needed
//make sure script is updated and correlated to html
//make sure API data is sourced correctly and displayed to reflect such
//give it some style

const pupList = document.querySelector('pupList');
const singlePup = document.querySelector('singlePup');
const ul = document.querySelector('ul');

let puppies;

const fetchPuppies = async() => {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players');
  const json = await response.json();
  puppies = json.data;
  

  const hash = window.location.hash.slice(1)*1;

  const html = puppies.players.map( puppy => {
    return `
    <li>
    <a href='#${puppy.id}' class='${ puppy.id === hash ? 'selected': ''}'>
    ${puppy.name}
    </a>
    </li>
    `;
  }).join('');
  ul.innerHTML = html;
  
}

window.addEventListener('hashchange', () => {

});
fetchPuppies();
