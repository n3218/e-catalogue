import { shallow, mount, render } from "enzyme"
import React from "react"
import { CheckoutItem } from "./checkout-item.component"

describe("CheckoutItem tests", () => {
  let mockProps
  let wrap
  let mockClearItem = jest.fn()
  let mockAddItem = jest.fn()
  let mockRemoveItem = jest.fn()
  let mockCartItem
  let mockDispatch = jest.fn()

  beforeEach(() => {
    mockCartItem = {
      price: "$20",
      imageUrl: "http://imageurl.jpg",
      name: "name of Product",
      quantity: "2"
    }
    mockProps = {
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
      dispatch: mockDispatch
    }
    wrap = shallow(<CheckoutItem cartItem={mockCartItem} {...mockProps} />)
  })

  it("expect to render CheckoutItem component", () => {
    expect(wrap).toMatchSnapshot()
  })

  it("shold call removeItem when arrow is clicked", () => {
    wrap.find("[id='checkout-item-remove']").simulate("click")
    expect(mockRemoveItem).toHaveBeenCalled()
  })

  it("shold call addItem when arrow is clicked", () => {
    wrap.find("[id='checkout-item-add']").simulate("click")
    expect(mockAddItem).toHaveBeenCalled()
  })

  it("shold call clearItem when arrow is clicked", () => {
    wrap.find("[id='checkout-item-clear']").simulate("click")
    expect(mockClearItem).toHaveBeenCalled()
  })
})
