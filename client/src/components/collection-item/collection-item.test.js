import { shallow, mount, render } from "enzyme"
import React from "react"
import { CollectionItem } from "./collection-item.component"

const mockItem = {
  item: {
    imageUrl: "http://imageurl.html",
    price: "$20",
    name: "name of Product",
    quantity: "2"
  }
}

const mockAddItem = () => {}

const wrapper = shallow(<CollectionItem item={mockItem} addItem={mockAddItem} />)

it("expect to render CollectionItem component", () => {
  expect(wrapper).toMatchSnapshot()
})

it("Correctly increments the counter", () => {
  wrapper.find("CustomButton").simulate("click")
})
