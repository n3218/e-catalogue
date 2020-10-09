import { shallow, mount, render } from "enzyme"
import React from "react"
import { Directory } from "./directory.component"

let mockSections = [{ id: 1 }, { id: 2 }, { id: 3 }]
let wrap = shallow(<Directory sections={mockSections} />)

it("expect to render Directory component", () => {
  expect(wrap).toMatchSnapshot()
})
