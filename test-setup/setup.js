import { matcher, serializer } from 'jest-glamor-react'

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

jest.mock('../js/state/actions/firebase/database')
jest.mock('../js/components/common/header/UserImage.helper')
