import assert from 'assert'
import { Order } from '../src/RazorShop'

suite ('When I order razor set', function () {
    test('When I order razor then razor is added to order', function () {
        let order = new Order;

        let razorOrdered = order.add('razor');

        assert.equal(razorOrdered, true);
    })
    test('When I order razor and gel set then razor and gel set is added to order', function () {
        let order = new Order;

        let razorAndGelOrdered = order.add('razorAndGelSet');

        assert.equal(razorAndGelOrdered, true);
    })
    test('When I order razor, gel and aftershave set then razor, gel and aftershave set is added to order', function () {
        let order = new Order;

        let razorGelAftershaveOrdered = order.add('razorGelAftershaveSet');

        assert.equal(razorGelAftershaveOrdered, true);
    })
})