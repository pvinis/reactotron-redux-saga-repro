import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron
  .configure({
    onConnect: () => {
        Reactotron.clear();
        console.log = Reactotron.log
    },
  })
  .useReactNative()
  .use(reactotronRedux())
  .connect()

export default reactotron
