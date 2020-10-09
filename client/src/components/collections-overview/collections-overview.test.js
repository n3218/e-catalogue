import { shallow, mount, render } from "enzyme"
import React from "react"
import { CollectionsOverview } from "./collections-overview.component"

const mockCollections = [{ id: 1 }, { id: 2 }, { id: 3 }]

it("expect to render CollectionsOverview component", () => {
  expect(shallow(<CollectionsOverview collections={mockCollections} />)).toMatchSnapshot()
})
