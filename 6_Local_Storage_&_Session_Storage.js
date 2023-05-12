// Local and Session storage
// Web storage API is used by the Developers to store some data in side the web.
// data is like key value pairs of strings

//Session storage
// data is stored only for that pirtculr session if the session closed the data will be lost
// session
// can be stored 5MB of data Vs cookes of 400KB

//Local Storage
//Data has no expiry uncless the user clear the cache in browser
// Memory can be depends on device used.
// Due to security reasons storages follow same origin policies.
// same origin
// 1) Protocol
// 2) Host and flipkart.com
// 3) port
//To set Item
//Key, Value

//To set Item
localStorage.setItem("Hari", "Hello");

//To get Item
localStorage.getItem("Hari");

//To Remove Item
localStorage.removeItem("Hari");
const user = {
  name: "Hari",
};

//we cannout set object directly in value in localstorage
// we have to convert it to string using JSON.stringify

const user2 = JSON.stringify(user);
localStorage.setItem("user", user2);

//Similary we have to parse back from when we get object back
const userget = localStorage.getItem("user");
const actualUse = JSON.parse(userget);

//same methods like localstorege

sessionStorage.setItem("Key", "Value");
