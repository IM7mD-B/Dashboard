import Dashboard from "./pages/DashboardPage";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
