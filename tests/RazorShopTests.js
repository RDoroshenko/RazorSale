import assert from 'assert'
import { Order } from '../src/RazorShop'

suite ('When I order razor set', function () {
    test('When I order razor then razor is added to order', function () {
        let order = new Order;

        let razorOrdered = order.add('razor');

        assert.equal(razorOrdered, true);
    })
})