import { gql } from 'apollo-boost'
import { 
    addItemToCart, 
    removeItemFromCart,
    clearItemFromCart,
    getCartTotal,
    getCartItemsCount } from './cart.utils'


export const typeDefs = gql`
    extend type Item {
        quantity: Int
    }
    extend type DateTime {
        nanoseconds: Int!
        seconds: Int!
    }
    extend type User {
        id: ID!
        displayName: String!
        email: String!
        createAt: DateTime!
    }
    extend type Mutation {
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]!
        SetCurrentUser(user: User!): User!
        RemoveItemFromCart(item: Item!): [Item]!
        ClearItemFromCart(item: Item!): [Item]!
    }
`

const GET_CART_HIDDEN = gql`{ cartHidden @client }`
const GET_CART_ITEMS = gql`{ cartItems @client }`
const GET_CART_ITEMS_COUNT = gql`{ itemCount @client }`
const GET_CART_ITEMS_TOTAL = gql`{ cartTotal @client }`
const GET_CURRENT_USER = gql`{ currentUser @client }`

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN
            })
            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            })
            return !cartHidden
        },

        addItemToCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: GET_CART_ITEMS
            })
            const newCartItems = addItemToCart(cartItems, item)

            cache.writeQuery({
                query: GET_CART_ITEMS_COUNT,
                data: { itemCount: getCartItemsCount(newCartItems) }
            })

            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { cartItems: newCartItems }
            })
            return newCartItems
        }
    }
}