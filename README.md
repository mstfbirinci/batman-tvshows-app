# AWESOME BATMAN TV SHOWS SITE

If you want to see application, you can visit below link;

[batman-tvshows-app](http://40.117.63.141)

Built with docker-compose and hosted in Google Cloud.

### Frontend

create-react-app boilerplate is used to develop React single page application.
Regarding to requirements, Redux is used to manage application state.

Redux-Observable is used for Redux middleware. 
Why I choose redux-observable?
It manages async actions like redux-saga or redux-thunk but power of the redux-observable come from Observables.
It is easy to handle more complex scenarios and using rxjs operators are really helpful.
[Reactive Extensions](http://reactivex.io/)

Next.js is used for rendering on server side.

### Backend

No boilerplate is used.

Restify is used to manage http request.

### Installation

Only one step is required to start up backend and frontend. 

At the root path of repository:
* sudo docker-compose up -d --build

Make sure that 80 and 8080 port is open by the firewall.
