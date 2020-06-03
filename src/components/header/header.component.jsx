import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './header.styles.jsx';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';


const Header = () => {
    const currentUser = useContext(CurrentUserContext)
    const { hidden } = useContext(CartContext)

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser
                    ?
                    <OptionLink as="div" onClick={() => auth.signOut()}>Hi, {currentUser.displayName}<br /> SIGN OUT</OptionLink>
                    : <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionContainer>
            {hidden
                ? null
                : <CartDropdown />}
        </HeaderContainer>)
}


const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);
