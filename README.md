<p align="center">
  <img width="150" height="155" src="https://commudle.com/assets/images/commudle-logo152.png"><br>
  <h1 align="center"><b>COMMUDLE</b></h1><br>
  <h3 align="center"><a href="https://commudle.com"> www.commudle.com </a></h3>
</p>



Commudle is a community management platform for Tech Communities across the world. The inspiration behind this project lies in the personal experiences of Organizers in the Tech Community.


## How To setup:rocket:
- Install Node.js and npm (at least version 13 of Node.js and at least version 6 of npm)
- Install [@angular/cli](https://cli.angular.io/)
- Clone the project.
- Run `npm install`.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
- The development server directly interacts with the production APIs.


## Login/Sign Up for Development
- Go to `https://auther.commudle.com`.
- Sign in using your **Google Account** (Other options will be added soon).
- Navigate to `http://localhost:4200/` and you should get signed in automatically.
- If the above step does not sign you in, then:
  - Go to `https://commudle.com` where you should be signed in.
  - Open the developer tools of your respective browser.
  - Navigate to the *Application* Tab.
  - In the left side navigation bar, under *Storage* you can find *Cookies*.
  - By clicking on it, you can find a cookie named **commudle_user_auth** with its corresponding value.
  - Copy this particular cookie and its value to `http://localhost:4200`'s cookies and refresh the page to get signed in.
  - [Contribution Guidelines](CONTRIBUTING.md)

## Build for production
- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Design Framework / UI Kit
- We are using [Nebular](https://akveo.github.io/nebular/) which uses [Eva Design System](https://eva.design/) in commudle-admin
