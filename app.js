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
const ul = document.querySelector('ul');
const single = document.querySelector('.single');
const backToList = document.querySelector('#backToList a');

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
    <li>
    <a href='#${puppy.id !== hash ? puppy.id : ''}' class='${ puppy.id === hash ? 'selected': ''}'>
    ${puppy.name}<br>${puppy.breed}
    </a>
    </li>
    `;
  }).join('');
  ul.innerHTML = html;

  const puppy = puppies.players.find( puppy => {
    return puppy.id === hash;
  });

  let detailsHtml = 'Select Puppy to see Picture!';
  let pupPicHtml;
 if (puppy){
   detailsHtml = `${puppy.name} <br> ${puppy.breed}`;
   pupPicHtml = `<img src='${puppy.imageUrl}'/>`;
   ul.innerHTML = '';
   backToList.innerHTML = "Return to Player List";
}

 // details.innerHTML = detailsHtml;
  //pupPic.innerHTML = pupPicHtml;
  single.innerHTML = `${detailsHtml} <br> ${pupPicHtml}`;
  
};

window.addEventListener('hashchange', () => {
  render();
});
fetchPuppies();
