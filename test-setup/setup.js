import { matcher, serializer } from 'jest-glamor-react'

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

jest.mock('../js/state/middleware/database/database')
