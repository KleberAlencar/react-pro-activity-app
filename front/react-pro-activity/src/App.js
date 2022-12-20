import "./App.css";
import Activity from "./pages/activities/Activity";
import { Route, Routes } from "react-router-dom";
import Customer from "./pages/customers/Customer";
import CustomerForm from "./pages/customers/CustomerForm";
import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/activities/*" element={<Activity />} />
      <Route path="/customers/*" element={<Customer />} />
      <Route path="/customers/:id/activities" element={<Activity />} />
      <Route path="/customers/details" element={<CustomerForm />} />
      <Route path="/customers/details/:id" element={<CustomerForm />} />
      <Route component={PageNotFound} />
    </Routes>
  );
}