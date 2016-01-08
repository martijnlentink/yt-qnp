/*
 * Extension 'n Play is an application developed by Circularify
 */

var circularify = circularify || {};

// Add move function to Javascript Array
// Taken from Stackoverflow.
// http://stackoverflow.com/a/5306832
// Credit: User: Reid
Array.prototype.move = function (old_index, new_index) {
    while (old_index < 0) {
        old_index += this.length;
    }
    while (new_index < 0) {
        new_index += this.length;
    }
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
};