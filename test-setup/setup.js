import { matcher, serializer } from 'jest-glamor-react'

// eslint-disable-next-line no-unused-vars
import { raf } from './tempPolyfills'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

jest.mock('../src/state/middleware/database/database')
