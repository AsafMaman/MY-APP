import Reactotron from 'reactotron-react-native'

Reactotron
.configure() // controls connection & communication settings
.useReactNative() // add all built-in react native plugins
.connect() // let's connect!


// import Reactotron, {
//     trackGlobalErrors,
//     openInEditor,
//     overlay,
//     asyncStorage,
//     networking
//   } from 'reactotron-react-native'
  
//     Reactotron
//       .configure({
//         name: 'React Native Demo'
//       })
//       .use(trackGlobalErrors())
//       .use(openInEditor())
//       .use(overlay())
//       .use(asyncStorage())
//       .use(networking())
//       .connect()