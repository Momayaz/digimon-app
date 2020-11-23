# 401 Entrance Exam
​
### Instructions:
​
### Make sure before starting to:
​
- turn off any means of communication (phone, slack, email).
- start your screen recording.
- you are not allowed to use previous projects, notes or GitHub.
- you can use google search engine.
- use the console to debug.
​
# Create a new repository on your github and name it 'digimon-app'.
​
# Requirement
​
1. As a user I want to view all the digimons characters that are retrieved from the [api](https://digimon-api.herokuapp.com/) using this [end point](https://digimon-api.herokuapp.com/api/digimon) and displayed as cards (each digimon should have it's own card that will contain name,image,level and add-to-favorite button) when I click on the button I should be redirected to the **favorite** page.
​
1. In the favorite page I want to view all the favorite digimons characters retrieved from the database and displayed as cards (each digimon should have it's own card that will contain name,image,level and show-details button) when I click on button I should be redirected to the **details** page.
​
1. In the Details page I want to view the selected digimon character details (name, image,level) also I should be able to update any of the data or delete the selected digimon from the database.
​
1. As a user I should have a simple UI (flexbox) to view the deployed site on heroku.
​
## Stretched Goal
​
1. As a user I want to have the ability to search for digimons characters in **search** page based on (name OR level) and view the results in the **results** page.
​
1. As a user I want to view all the digimons characters that are retrieved from the api according to [name](https://digimon-api.herokuapp.com/api/digimon/name/agumon) or [level](https://digimon-api.herokuapp.com/api/digimon/level/rookie) and displayed as cards (each digimon should have it's own card that will contain name,image,level and add-to-favorite button) when I click on the button I should be redirected to the **favorite** page.
​
## Resources
​
- you can use **any technology** you've learned during code 301 to achieve the above requirement
- you can use this [sql cheat sheet](https://www.sqltutorial.org/sql-cheat-sheet/)
- for connecting to data base you can use
  - for MAC `postgres://localhost:5432/DBNAME`
  - for WIN `postgres://Uname:pass@localhost:5432/DBNAME`
- for connecting schema to your db `psql -d <database-name> -f <path/to/schemaFile>`
- for connecting schema to heroku `heroku pg:psql -f <path/to/schemaFile> -a <heroku-app-name>`
- if you are facing connection issues to the db dont forget to do the following
  - for MAC `brew services start postgresql`
  - for WIN `sudo services postgrresql start`
- if you are using `WSL` and having weird issues with your server don't forget to use this command `killall -s KILL node`
​
`//useful express codes`
`app.use(express.urlencoded({ extended: true }));`
`app.use(methodOverride('_method'));`
`app.use(express.static('./public'));`
`app.set('view engine', 'ejs');`
​
```
​
## libraries resources
​
1. [express](https://www.npmjs.com/package/express)
1. [dotenv](https://www.npmjs.com/package/dotenv)
1. [pg](https://node-postgres.com/)
1. [ejs](https://www.npmjs.com/package/ejs)
1. [method-override](https://www.npmjs.com/package/method-override)
1. [superagent](https://www.npmjs.com/package/superagent)
1. [jquery](https://code.jquery.com/)
​
## Submission Instructions:
​
- Submit the link of your GitHub repo for this project.
- Submit the heroku link for the project
- After completing the exam, do **NOT** commit or push anything to your repo.
