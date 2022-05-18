<div align="center">
  <h1>Minerva McGonagall's Witch and Wizard Registry</h1>
  <p>Search through Minerva McGonnagall's list of past and present Hogwarts attendees by name or the house the witch or wizard belongs to.</p>
  <p><b>Live Website:</b> https://wizarding-registry.netlify.app/</p>
</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/77141303/168927600-546eba1a-b78c-4481-a4f3-48aee7ea0c75.gif">
</div>


## How It's Made:

**Tech used:** HTML, CSS, JavaScript

I used JavaScripts Fetch API to grab Harry Potter character info from http://hp-api.herokuapp.com/api/characters. While the page is initially loaded, the DOM is filled with an array of witches and wizard's. There is a search bar with an event listener that actively filters through the array that is represented on page load. As you search character names or houses, the characters rendered to the DOM will represent your input.

## Future Optimizations:

<ul>
  <li>Filter out witches and wizards who do not belong to a Hogwarts house.</li>
  <li>When a search is not found, prevent page from jumping upwards.</li>
</ul>

## Lessons Learned:

During my first implementations of this web application, I had been making requests to the Harry Potter API every keypress in the search bar. Doing so was costly/ineffecient! I later decided to store the inital response in an array that I would eventually filter through. This allowed me to make a singular request to the API and provided a valuable lesson for program efficiency.
