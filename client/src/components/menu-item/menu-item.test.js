import { shallow, mount, render } from "enzyme"
import React from "react"
import { MenuItem } from "./menu-item.component"

let mockProps
let wrap

mockProps = {
  title: "",
  imageUrl: "http://imageurl.jpg",
  history: "http://historyurl.url",
  linkUrl: "http://linkurl.url",
  match: {
    url: "http://matchurl.url"
  }
}
wrap = shallow(<MenuItem {...mockProps} />)

it("expect to render MenuItem component", () => {
  expect(wrap).toMatchSnapshot()
})
