import ReactDOM from "react-dom";
import { App } from "./desktop/components/App";
(() => {
  garoon.events.on("schedule.calendar.dayIndex.show", (event) => {
    const $el = document.createElement("div");
    $el.setAttribute("id", "js-plugin-container");
    document.body.appendChild($el);
    ReactDOM.render(<App />, $el);
  });
})();
