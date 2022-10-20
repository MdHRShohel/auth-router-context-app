/*
-------------------------------------
Basic Context API Steps :
-------------------------------------
1. context api: Share auth information with other components(across the application).
2. create an UserContext
3. ContextProvider with passed children
4. set the UserContext in the index.js
5. Now to consume the context : export UserContext for share the authInfo with others components need
6. now at Header or home or anywhere else: use useContext hook to get the context

*/

/*
-------------------------------------
Auth Integration Steps
-------------------------------------
1. Use getAuth by passing the app from firebase.config.js
*/