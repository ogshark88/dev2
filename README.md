# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal is to allow to showcase Anime shows and give useful information about each show to users. The users can then add shows to a watchlist and acertain the average perceived quality of these shows throught the average score value.

### Usability Principles Considered
I wanted the information to digestible and easy for users to read. The buttons are 

### Organization of Components
I have components for mapping json elements to the custom list. The component essentially styles each item in the anime list.

### How Data is Passed Down Through Components
The data is passed using the mapping function.

### How the User Triggers State Changes
The user can press the add to list or remove from list buttons to change the state. The shows are added/removed from the state which is reflected on the watchlist box in the website. The appropriate aggregated value (average score of shows in watchlist is also recomputed when a new show is added or removed from the list.
