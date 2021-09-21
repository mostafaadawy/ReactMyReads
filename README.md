<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MyReads: A Book Lending App</h3>

  <p align="center">
    project_description
    
</p>


MyReads App is simple web site for practicing react js, it is simply act as classifier that can facilitate for reading lovers to plan their reading and this is done through designing shelfs that we can easily remove , move and add to it , the main objective of this project is to practice what we learn in react fundamentals on real application

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Implemented Project meets the rubric
Project MyReads is implemented according to the https://review.udacity.com/#!/rubrics/918/view
It is been designed according to the determination that is described and it is been tested to pass all requirements, where it includes two pages and it is decomposed into one task component where no two tasks are achieved by one component 
'/' main page shows all shelfs and we can move book from shelf to shelf locally using state or online on server using BookAPI, we can easily transferred from listing page '/' to search page '/search' and vise verse using { Link } from 'react-router-dom' 
we can go forward or backsword through pages using history nodes from {BrowserRoute}
all states are well handled where any change in state reflects new required rendering and for search if it blank it clears the search results
all known bugs are handled such as missing fields that gives null exceptions using try{}catch{} method
didmount method is used in its place to catch up the shelf books 
route is done using { Route } instead of using short-circuit environment 

### Built With
* Vcode
* Postman
* Json Viewer
* Gitbash Terminal

<!-- GETTING STARTED -->
## Getting Started

implementation according to Think React https://reactjs.org/docs/thinking-in-react.html where all next issues are followed
1-Start With learning Mock-digital draw and design https://app.moqups.com/
2-Break The UI Into A Component Hierarchy
3-Build A Static Version in React
4-Identify The Minimal (but complete) Representation Of UI State
5-Identify Where Your State Should Live
6-Add Inverse Data Flow

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* installing npm
* installing Vcode
### Installation

1. Clone the repo
   ```sh
   git clone [https://github.com/udacity/reactnd-project-myreads-starter.git
   ```
2. Install NPM packages
  ```sh
  npm install 
  npm install --save react-router-dom
  npm install --save prop-types
  npm start
  ```
<!-- CONTRIBUTING -->
## Contributing

### What was new for me

importing file includes separate method which have separate export should be included as follows
import * as import * as BooksAPI from './BooksAPI'

that select change onChange should be handled from its parent components and exactly i can use function handler to point to the function from parent to child as from child to parent  so it can be called through four generations for example while it can be handled in between there is no condition to be handled from parent only

### Challenges and pros i faced
i faced an error that differs from chrome browser to Firefox browser where in chrome the error message was cant read from undefined object while in firefox the error message was this.state is undefined
I solved this using runtime function not normal function i.e. functionname=argument=>{function body} instead of functioname(argument){}} where runtime can access local variable according to its scope and it is auto triggered function

second challenge was butting tick "right" symbol infornt of option but i just add it as string which i think it is still need stylling for for the project main issue i discard this

### useful external helping  site or apps that i used in debuging
`https://www.postman.com/`
`https://codebeautify.org/jsonviewer`
I used this external tools to get the right responce and to read the returned json to defined how to deal with its paramenters 
 **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

mostafa_adawy[@ymail.com](https://twitter.com/twitter_handle) - email

Project Link: [https://github.com/udacity/reactnd-project-myreads-starter.git](https://github.com/udacity/reactnd-project-myreads-starter.git)



