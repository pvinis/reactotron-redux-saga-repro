import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

const reactotron = Reactotron
  .configure({
    onConnect: () => {
        Reactotron.clear();
        console.log = Reactotron.log
    },
  })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()

export default reactotron
