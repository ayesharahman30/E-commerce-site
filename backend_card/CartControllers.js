/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 */

const Cart = require('../modals/cartModal');

/**
 * Middleware to create or update a user's cart.
 *
 * @param {Request} req - Express Request object
 * @param {Response} res - Express Response object
 * @param {NextFunction} next - Express Next function
 * @returns {Promise<void>} - Promise representing the asynchronous operation
 */
exports.createOrUpdateCart = async (req, res, next) => {
    try {
        let cart;
        cart = await Cart.findOne({ user: req.user._id });
        console.log(cart);

        if (cart) {
            // Update existing cart
            cart.orderItems = req.body.orderItems;
            cart.shippingInfo = req.body.shippingInfo;
            cart.itemsPrice = req.body.itemsPrice;
            cart.taxPrice = req.body.taxPrice;
            cart.shippingPrice = req.body.shippingPrice;
            cart.totalPrice = req.body.totalPrice;

            await cart.save();
        } else {
            // Create new cart
            cart = await Cart.create({
                ...req.body,
                user: req.user._id,
            });
        }

        req.cartId = cart._id;
        next();
    } catch (e) {
        console.error(e);
        return res.status(400).send({
            success: false,
            error: {
                message: 'Can not create cart for you. Please try again.',
            },
        });
    }
};

/**
 * Deletes a user's cart by user ID.
 *
 * @param {string} userId - User ID
 * @returns {Promise<void>} - Promise representing the asynchronous operation
 */
exports.deleteCart = async (userId) => {
    try {
        const cart = await Cart.deleteOne({ user: userId });
    } catch (error) {
        console.error(error);
        return res.status(400).send({
            success: false,
            error: {
                message: 'Can not delete cart.',
            },
        });
    }
};
