import "./App.css";
import Activity from "./pages/activities/Activity";
import { Switch, Route } from "react-router-dom";
import Customer from "./pages/customers/Customer";
import Dashboard from "./pages/dashboard/Dashboard";
import CustomerForm from "./pages/customers/CustomerForm";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/activities/list" component={Activity} />
      <Route path="/customers/list" component={Customer} />
      <Route path="/customers/:id/activities" component={Activity} />
      <Route path="/customers/details/:id?" component={CustomerForm} />
      <Route component={PageNotFound} />
    </Switch>
  );
}