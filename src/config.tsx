import ReactDOM from "react-dom";

(() => {
  console.log("config");

  const App = () => {
    return <div>config</div>;
  };

  ReactDOM.render(<App />, document.querySelector("#config"));
})();
