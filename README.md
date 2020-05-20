# Home-Automation
A project to demonstrate simple home-automation using web console.<br/> Involves workflow of data from MySQL, Node and to React web console.

## `Project Setup`
Step 1. Setup database in the requied [MySQL configuration](#mysqlCongfig).</br>
Step 2. Unzip the homeautomation.zip</br>
Step 3. [Check for node and npm version required](#nodeConfig).</br>
Step 4. npm install.</br>
Step 5. node serve.js (In main folder - To establish Node server. Should be successfuly connected to Database).</br>
Step 6. npm start (In client folder - To start React server). </br>
Step 7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.</br>

## `Node Server Configuration`
Node Version used : v8.10.0<br/>
Npm Version used : 6.14.4

### <a name="nodeConfig"></a>`Recommended Configuration - react-create-app recomendation`
Node Version Supported : >=8.10.0 <br/>
Npm Version Supported : >=5.6.0

## <a name="mysqlCongfig"></a>`MySQL Configuration`
  host     : 'localhost',<br/>
  user     : 'root',<br/>
  password : 'root',<br/>
  database : 'signzyhomeautomation'

  ### `SQL FILE`
Please dump the attached sql file 'BackupDb.sql' using the following command.
mysqldump -u `DatabaseUser' -p `DatabaseName - signzyhomeautomation` > BackupDb.sql


## Available Scripts

In the CLIENT folder, you can run:

### `npm start`[In client Folder]

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build` 

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Now our app is ready to be deployed!



