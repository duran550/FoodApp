import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcons";
import CartContext from "../store/ cart-context";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClases = `${classes.button} ${ btnIsHighlighted ? classes.bump : ""}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items]);

    return (
        <buttton className={btnClases} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}> {numberOfCartItems} </span>
        </buttton>
    )
}

export default HeaderCartButton;