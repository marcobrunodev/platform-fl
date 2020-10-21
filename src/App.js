import React from "react";
import FormSignupLogin from "./components/FormSignupLogin";
import Main from "./components/Main";
import Title from "./components/Title";

function App() {
  return (
    <Main>
      <Title>Signup/Login</Title>

      <FormSignupLogin />
    </Main>
  );
}

export default App;
