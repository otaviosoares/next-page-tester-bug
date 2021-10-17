/* eslint-disable react/display-name */
import {getPage} from 'next-page-tester'
import { TestHookProvider } from '../test-hook'

function myMockedFn() {
  console.log('mocked version')
}

test('should render', async() => {
  const { render } = await getPage({ route:'/', useApp: false, wrapper: {
    App: App => appProps => 
      <TestHookProvider value={{someFn: myMockedFn}}>
        <App {...appProps} />
      </TestHookProvider>
  } })
  render()
})