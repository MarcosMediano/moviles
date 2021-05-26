import React from "react"
import Badge from "./components/Badge"
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/Main"

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Main title={"Welcome"}></Main>
      </Layout>
    </React.Fragment>
  );
}
export default App;
