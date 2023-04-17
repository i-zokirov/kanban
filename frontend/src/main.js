"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
const react_redux_1 = require("react-redux");
const App_1 = require("./App");
require("./index.css");
const store_1 = require("./redux/store");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
//# sourceMappingURL=main.js.map