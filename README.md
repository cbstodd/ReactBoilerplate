# ReactBoilerplate

Boilerplate ReactJS application.

To use:

`git clone https://github.com/cbstodd/ReactBoilerplate`

To change name of the file:

`mv ReactBoilerplate new_project_name`

Change/move into the new directory:

`cd new_project_name`

To rename the git repo to your own:

`git remote set-url origin https://github.com/YOUR_USERNAME/new_project_name.git`

Rename project name in the package.json file.

` "name": "new_project_name",`

Install dependencies:

`npm install`

Need to reinstall new version of webpack:

`npm uninstall webpack --save-dev` 

`npm install webpack@2.1.0-beta.22`

Run webpack:

`webpack`

Start server in new terminal window:

`npm start` 