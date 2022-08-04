//context API
//When you are creating a context varible, if you wanna access whichove component that state is in, you need to create that context state a the highest level cotext, which we have at App.js

import { createContext } from "react";

export const AuthContext = createContext("");