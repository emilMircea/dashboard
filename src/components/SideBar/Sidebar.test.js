import React from "react";
import renderer from "react-test-renderer";
import Sidebar from './Sidebar'

test('Sidebar renders correctly', () => {
  const tree = renderer.create(
    <Sidebar />
  ).toJSON()
  expect(tree).toMatchSnapshot();
})
