import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { About } from "./screens/About";
import { Actions } from "./screens/Actions";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { NotFound } from "./screens/NotFound";
import { Signup } from "./screens/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="actions" element={<Actions />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
