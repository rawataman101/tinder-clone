import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { Fragment } from "react";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </Fragment>
            }
          ></Route>
          {/* chat logic */}
          <Route
            path="/chat/:person"
            element={
              <Fragment>
                <Header backButton="/chat" />
                <ChatScreen />
              </Fragment>
            }
          ></Route>

          <Route
            path="/chat"
            element={
              <Fragment>
                <Header backButton="/" />
                <Chats />
              </Fragment>
            }
          ></Route>
        </Switch>
      </Router>
      {/* Tinder Cards */}
      {/* Footer - buttons below tinder card */}
      {/* Chat screen - when click on top right */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
