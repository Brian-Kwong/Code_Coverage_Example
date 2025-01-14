# Introduction to Code Coverage

---

## The following repository contains the slideshow and source code for a presentation given on code coverage in software engineering and development.

- Source code files can be found in the `./src` folder
- The presentation is hosted in `index.html` && `./assets` folder

---

To run the example program locally ensure you have the following prerequisites installed

- [NodeJS and npm](https://nodejs.org/en/download)  
- [Git](https://git-scm.com/downloads) w/ your [GitHub credentials linked](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)  
- A text editor (Suggested is [VS Code](https://code.visualstudio.com/download))  
- \[Reccomended\] [Prettier](https://prettier.io/docs/en/install.html)

1. Go to the directory where you would like to work on the application `cd <directory path>`  and clone the project `git clone https://github.com/Brian-Kwong/Code_Coverage_Example`  
2. Change to that directory `cd ./Code_Coverage_Example`  
3. Run `npm i` to install all necessary node packages   
4. To run the unit tests run `npm test`
5. Depending on which coverage library you would like to use you will run two different commands 
	- Jest : `npm test -- --coverage`
	- NYC/Istanbul[^1] : `npm run coverage`

[^1]: You will need to switch/clone the `nyc` branch to run istanbul/nyc

