import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Login";
import Signin from "../templates/signin.template";
// import Verify from "./Verify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
