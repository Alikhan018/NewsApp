import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import { createBrowserRouter as routeLinks,RouterProvider as UseRoute} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {
  // router = routeLinks([
  //   {
  //     path: "/",
  //     element: <News category="general" />,
  //   },
  //   {
  //     path: "/sports",
  //     element: <News category="sports" />,
  //   },
  //   {
  //     path: "/business",
  //     element: <News category="business" />,
  //   },
  //   {
  //     path: "/entertainment",
  //     element: <News category="entertainment" />,
  //   }
  // ]);
  toggleDarkMode = () => {
    if (this.state.mode === "light") {
      console.log(this.state.mode);
      this.setState({ mode: "dark", modeText: "Dark Mode" });
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      console.log(this.state.mode);
    } else {
      this.setState({ mode: "light", modeText: "Light Mode" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      console.log(this.state.mode);
    }
  };
  constructor() {
    super();
    this.state = {
      mode: "light",
      modeText: "Light Mode",
      category: "general",
    };
  }
  render() {
    return (
      // <>
      //   <NavBar
      //     fun={this.toggleDarkMode}
      //     mode={this.state.mode}
      //     modeText={this.state.modeText}
      //     category={this.state.category}
      //   />
      //   <UseRoute router={this.router}/>

      // </>
      <>
        <NavBar
          fun={this.toggleDarkMode}
          mode={this.state.mode}
          modeText={this.state.modeText}
          category={this.state.category}
        />
        <Router>
          {/* <NavBar
            fun={this.toggleDarkMode}
            mode={this.state.mode}
            modeText={this.state.modeText}
            category={this.state.category}
          /> */}
          {/* <News
            mode={this.state.mode}
            modeText={this.state.modeText}
            category="general"
          /> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <News
                    mode={this.state.mode}
                    modeText={this.state.modeText}
                    category="general"
                  />
                </>
              }
            />
            <Route
              path="/sports"
              element={
                <>
                  <News
                    mode={this.state.mode}
                    modeText={this.state.modeText}
                    category="sports"
                  />
                </>
              }
            />
            <Route
              path="/business"
              element={
                <>
                  <News
                    mode={this.state.mode}
                    modeText={this.state.modeText}
                    category="business"
                  />
                </>
              }
            />
            <Route
              path="/entertainment"
              element={
                <>
                  <News
                    mode={this.state.mode}
                    modeText={this.state.modeText}
                    category="entertainment"
                  />
                </>
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

