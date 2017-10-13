import { matcher, serializer } from 'jest-glamor-react'
import { raf } from './tempPolyfills'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

jest.mock('../js/state/middleware/database/database')
