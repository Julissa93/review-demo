# Express & Sequelize Rounding Out 

## Agenda: 
* Express Error Handling
    * 404 Handler
    * Customer Error Handler (other than 404)
* Sequelize
    - Eager Loading
    - Class Methods & Instance Methods
    - Many-Many Relationships

To run this on your machine clone down this repo and run `npm install` then `npm start` to run the program. 

* **Note:** I added a git ignore file after the demo. 
* The steps I took were: 
    1. Run `git init` in the terminal (in the root directory of the project.)
    2. Run `touch .gitignore` in the terminal to create a .gitignore file and added this inside: 
    ```
    node_modules
    package-lock.json
    ```
    (This will tell git to not add the node_modules and package-lock.json when adding and pushing your commits to github)