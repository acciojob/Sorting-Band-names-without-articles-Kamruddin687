//your code here

// An array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Queen'];

// Function to remove articles from a band name and return the cleaned name
function removeArticles(name) {
  return name.replace(/^(The |A |An )/i, '').trim();
}

// Sort the band names in lexicographic order after removing articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element with id 'band' from your HTML
const bandList = document.getElementById('band');

// Create and append li elements to the ul element
bandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  bandList.appendChild(li);
});
