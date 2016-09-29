import StartComponent from '../Misc/StartComponent';
import LoginComponent from '../Authorization/LoginComponent';
import RegistrationComponent from '../Authorization/RegistrationComponent';
import AuthorizationComponent from '../Authorization/AuthorizationComponent';
import TicketsComponent from '../Tickets/TicketsComponent';
import HomeComponent from '../Home/HomeComponent';
import MainComponent from '../Main/MainComponent';

export default Routes = {
  start: StartComponent,
  login: LoginComponent,
  registration: RegistrationComponent,
  authorization: AuthorizationComponent,
  tickets: TicketsComponent,
  home: HomeComponent,
  main: MainComponent
}

