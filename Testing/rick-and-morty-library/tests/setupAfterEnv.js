// This code will run also before each test 
// but after the testing framework gets executed

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

require('enzyme').configure({ adapter: new Adapter() });