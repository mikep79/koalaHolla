Base mode;
- [x] Create database with a few koalas.
- [x] Create needed files: index.html in views folder, styles - css, routes -      .js route files. Database file and folder?
- [x] Add routes/modules.
- [x] Client: Get input vals. Add GET request for koala array.
- [x] Client: Add POST request to add koala to array.
- [x] Connect to database.
- [x] Display on DOM.
- [ ] Add logo.

Get input values from client using jQuery. Use POST request to add new koala to server, which will update database. Use GET request to retrieve 'koala array' from database. Display on DOM. 
This must stop:
---------------
![Nevar again](https://i.makeagif.com/media/8-22-2014/GO_DT4.gif)


Koala Holla
===========

Our client, Koala Holla (1976 Llama Comma Drive, Walla Walla WA) is a non-profit dedicated to the ethical transitioning of koalas from the outdoors (whereupon they may be rained) to urban areas where roofs exist. Your team has been hired build a web app to handle their terrarium residents.

Technologies
------------
* JQuery
* Node
* Express
* SQL

Client needs
------------
Koala Holla has provided a TSV (tab separated values) spreadsheet of their current inventory. They want a database table that houses this information and can be viewed at any time. You should add this table to your existing **antares** database. After importing the data, create a web app to display the Koalas. Users should be able to add new Koalas to the database through the provided HTML form.

They have also provided their logo and the source code from when Lou (a KH employee) tried to spin up a JEN stack project to support this, but had to leave for foraging school in Finland before he could finally finish. (JEN is short for jQuery, Express & Node).

Hard Mode
---
1. Ability for mark Koala ready for transfer. Add a button to each row that reads 'Ready for Transfer'. When the user clicks on the button, it should update the database for the specific Koala. The 'Ready for Transfer' button should only appear for Koalas that haven't yet been marked ready for transfer.

2. Ability to delete Koalas from the database.

3. Add some styling.

Pro Mode
---
1. Ability to edit information for existing Koalas in the db.
2. Add form validation, additional styling and a README.md.

Delivery
--------
Upon completion of the project you'll need to provide not only the source (via GitHub url), but also instructions on how the database table should be set up. This can be in a simple databaseSetup.sql file in the repo.

Sample Output
--------
Your final product may look something like this:

![sample](sample.png)
