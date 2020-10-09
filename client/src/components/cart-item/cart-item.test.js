import { shallow, mount, render } from "enzyme"
import React from "react"
import CartItem from "./cart-item.component"

it("expect to render CartItem component", () => {
  const mockItem = {
    item: {
      imageUrl: "http://imageurl.jpg",
      price: "$20",
      name: "name of Product",
      quantity: "2"
    }
  }
  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot()
})
