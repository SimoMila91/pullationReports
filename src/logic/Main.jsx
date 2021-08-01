import Report from '../components/Report';
import Home from '../components/Home';
import ReportList from '../components/ReportList';
import {
  Route, 
  Switch
} from 'react-router-dom';


export default function Main() {
  return (
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/reports" component={ReportList} />
        <Route render= { () => {
          return <p>404 - page not found</p>
        }} />
      </Switch>
  )
};