import { shallow, mount, render } from "enzyme"
import React from "react"
import StripeCheckoutButton from "./strip-button.component"

describe("CheckoutItem tests", () => {
  let mockPrice
  let wrap

  beforeEach(() => {
    mockPrice = "20"
    wrap = shallow(<StripeCheckoutButton price={mockPrice} />)
  })

  it("expect to render StripeCheckoutButton component", () => {
    expect(wrap).toMatchSnapshot()
  })
})
