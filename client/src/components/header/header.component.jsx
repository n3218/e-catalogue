import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink, CurrentUserName } from "./header.styles.jsx"
import { signOutStart } from "../../redux/user/user.actions"

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      {currentUser ? (
        <CurrentUserName>
          Hi, {currentUser.displayName}
          <br />
        </CurrentUserName>
      ) : null}
      <LogoContainer to="/">
        <img src="/logo192x192.png" title="E-Catalog Logo" width="80" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
