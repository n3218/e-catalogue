import { shallow, mount, render } from "enzyme"
import React from "react"
import CollectionPreview from "./collection-preview.component"

let wrap
let mockProps

mockProps = {
  title: "Test Title",
  items: [{ id: 1 }, { id: 2 }, { id: 3 }],
  history: "/history.url"
}
wrap = shallow(<CollectionPreview {...mockProps} />)

it("expect to render CheckoutItem component", () => {
  expect(wrap).toMatchSnapshot()
})
