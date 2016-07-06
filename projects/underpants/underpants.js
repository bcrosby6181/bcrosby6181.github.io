// This is the proper way to start a javascript library 
// for the client side ; or browser side
(function() {

    // This makes the arguments variable behave the way we want it to and a few
    // other things. For more info: 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
    'use strict';

    // This allows us to use our "_" anywhere. In a web browser, properties of window
    // are available everywhere without having to type "window."
    /* global _ */
    window._ = {};

    /**
     * START OF OUR LIBRARY!
     * Implement each function below it's instructions
     */

    /** _.identity()
     * Arguments:
     *   1) Anything
     * Objectives:
     *   1) Returns <anything> unchanged
     * Examples:
     *   _.identity(5) === 5
     *   _.identity({a: "b"}) === {a: "b"}
     */
    _.identity = function(value) {
        return value;
    };


    /** _.typeOf()
     * Arguments:
     *   1) Anything
     * Objectives:
     *   1) Return the type of <anything> as a string
     *       Types are one of: 
     *          - "string"
     *          - "array"
     *          - "object"
     *          - "undefined"
     *          - "number"
     *          - "boolean"
     *          - "null"
     *          - "function"
     * Examples:
     * _.typeOf(134) -> "number"
     * _.typeOf("javascript") -> "string"
     * _.typeOf([1,2,3]) -> "array"
     */
    _.typeOf = function(value) {
        if (Array.isArray(value)) return 'array';
        if (value === null) return 'null';
        if (value instanceof Date) return 'date';
        return typeof value;

    };



    /** _.first()
     * Arguments:
     *   1) An array
     *   2) A number
     * Objectives:
     *   1) If <array> is not an array, return []
     *   2) If <number> is not given or not a number, return just the first element in <array>.
     *   3) Otherwise, return the first <number> items of <array>
     * Gotchas:
     *   1) What if <number> is negative?
     *   2) What if <number> is greater than <array>.length?
     * Examples:
     *   _.first(["a","b","c"], 1) -> "a"
     *   _.first(["a","b","c"], 2) -> ["a", "b"]
     *   _.first(["a", "b", "c"], "ponies") -> ["a"]
     */
    _.first = function(array, n) {
        if (!Array.isArray(array) || n < 0) return [];
        if (n === undefined) return array[0];

        if (n > 0) return array.slice(0, n);
        if (n < 0) {
            n = n > array.length ? array.length : n;
            return array.slice(0, n);
        }
    };
    /** _.last()
     * Arguments:
     *   1) An array
     *   2) A number
     * Objectives:
     *   1) If <array> is not an array, return []
     *   2) If <number> is not given or not a number, return just the last element in <array>.
     *   3) Otherwise, return the last <number> items of <array>
     * Gotchas:
     *   1) What if <nubmer> is negative?
     *   2) What if <number> is greater than <array>.length?
     * Examples:
     *   _.last(["a","b","c"], 2) -> ["b","c"]
     *   _.last(["a", "b", "c"], "ponies") -> ["c"]
     */
    _.last = function(array, n) {
        if (!Array.isArray(array) || n < 0) return [];
        if (n === undefined) return array.pop();
        if (n < 0) return [];
        if (array.length > n > 0) return array.slice(-2);
        if (n >= array.length) return array;
    };

    /** _.each()
     * Arguments:
     *   1) A collection
     *   2) A function
     * Objectives:
     *   1) if <collection> is an array, call <function> once for each element
     *      with the arguments: 
     *         the element, it's index, <collection>
     *   2) if <collection> is an object, call <function> once for each property
     *      with the arguments:
     *         the property's value, it's key, <collection>
     * Examples:
     *   _.each(["a","b","c"], function(e,i,a){ console.log(e)}); 
     *      -> should log "a" "b" "c" to the console
     */
    _.each = function(collection, action) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                action(collection[i], i, collection);
            }
        }
        else {
            for (var key in collection) {
                action(collection[key], key, collection);
            }
        }
    };
    /** _.indexOf()
     * Arguments:
     *   1) An array
     *   2) A value
     * Objectives:
     *   1) Return the index of <array> that is the first occurrance of <value>
     *   2) Return -1 if <value> is not in <array>
     *   3) Do not use [].indexOf()!
     * Gotchas:
     *   1) What if <array> has multiple occurances of val?
     *   2) What if <val> isn't in <array>?
     * Examples:
     *   _.indexOf(["a","b","c"], "c") -> 2
     *   _.indexOf(["a","b","c"], "d") -> -1
     */
    _.indexOf = function(array, value) {
        for (var i = 0; i < array.length; i++) return array.indexOf(value);
    };

    /** _.filter()
     * Arguments:
     *   1) An array
     *   2) A function
     * Objectives:
     *   1) call <function> for each element in <array> passing the arguments:
     *      the element, it's index, <array>
     *   2) return a new array of elements for which calling <function> returned true
     * Gotchas:
     *   1) What if <function> returns something other than true or false?
     * Examples:
     *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
     * Extra Credit:
     *   use _.each in your implementation
     *
     */
    _.filter = function(obj, predicate) {
        var results = [];
        _.each(obj, function(value, index, list) {
            if (predicate(value, index, list)) results.push(value);
        });
        return results;
    };
    /** _.reject()
     * Arguments:
     *   1) An array
     *   2) A function
     * Objectives:
     *   1) call <function> for each element in <array> passing the arguments:
     *      the element, it's index, <array>
     *   2) return a new array of elements for which calling <function> returned false
     *   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
     * Examples:
     *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
     */
    _.reject = function(obj, predicat, context) {
        var results = [];
        _.filter(obj, function(value, index, list) {
            if (!predicat(value, index, list)) results.push(value);
        });
        return results;
    };

    /** _.partition()
    * Arguments:
    *   1) An array
    *   2) A function
    * Objectives:
    *   1) Call <function> for each element in <array> passing it the arguments:
    *       element, key, <array>
    *   2) Return an array that is made up of 2 sub arrays:
    *       0) An array that contains all the values for which <function> returned something truthy
    *       1) An array that contains all the values for which <function> returned something falsy
    * Gotchas:
    *   1) This is going to return an array of arrays.
    * Examples:
    *   _.partition([1,2,3,4,5], function(element,index,arr){
    *     return element % 2 === 0;
    *   }); -> [[2,4],[1,3,5]]
    }
    */
    _.partition = function(obj, predicate, context) {
        predicate = _.identity(predicate, context);
        var pass = [],
            fail = [];
        _.each(obj, function(value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value);
        });
        return [pass, fail];
    };


    /** _.unique()
     * Arguments:
     *   1) An array
     * Objectives:
     *   1) Return a new array of all elements from <array> with duplicates removed
     *   2) Use _.indexOf() from above
     * Examples:
     *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
     */
    _.unique = function(a) {
        var prims = {
                "boolean": {},
                "number": {},
                "string": {}
            },
            objs = [];
        return a.filter(function(item) {
            var type = typeof item;
            if (type in prims)
                return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
            else
                return objs.indexOf(item) >= 0 ? false : objs.push(item);
        });
    };
    /** _.map()
     * Arguments:
     *   1) A collection
     *   2) a function
     * Objectives:
     *   1) call <function> for each element in <collection> passing the arguments:
     *        if <collection> is an array:
     *            the element, it's index, <collection>
     *        if <collection> is an object:
     *            the value, it's key, <collection>
     *   2) save the return value of each <function> call in a new array
     *   3) return the new array
     * Examples:
     *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
     */

    _.map = function(obj, iteratee, context) {
        iteratee = _.identity(iteratee, context);
        var keys = !Array.isArray(obj) && Object.keys(obj),
            length = (keys || obj).length,
            results = Array(length);
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    };


    /** _.pluck()
     * Arguments:
     *   1) An array of objects
     *   2) A property
     * Objectives:
     *   1) Return an array containing the value of <property> for every element in <array>
     *   2) You must use _.map() in your implementation.
     * Examples:
     *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
     *

    _.pluck = function(obj, key) {
        return _.map(obj, _.each(key));
    };*/



    /** _.contains()
     * Arguments:
     *   1) An array
     *   2) A value
     * Objectives:
     *   1) Return true if <array> contains <value>
     *   2) Return false otherwise
     *   3) You must use the ternary operator in your implementation.
     * Gotchas:
     *   1) did you use === ?
     *   2) what if no <value> is given?
     * Examples:
     *   _.contains([1,"two", 3.14], "two") -> true
     *http://jsbin.com/hejoru/edit?js,console*/

    _.contains = function(obj, item) {
        return (obj).includes(item);
    };

    /** _.every()
     * Arguments:
     *   1) A collection
     *   2) A function
     * Objectives:
     *   1) Call <function> for every element of <collection> with the paramaters:
     *      if <collection> is an array:
     *          current element, it's index, <collection>
     *      if <collection> is an object:
     *          current value, current key, <collection>
     *   2) If the return value of calling <function> for every element is true, return true
     *   3) If even one of them returns false, return false
     *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
     * Gotchas:
     *   1) what if <function> doesn't return a boolean
     *   2) What if <function> is not given?
     * Examples:
     *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
     *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
     * 
     */
    _.every = function(obj, predicate) {
        predicate = predicate || _.identity;
        var keys = !Array.isArray(obj) && Object.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;

            if (predicate === !true || false) return true;
            if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }
        return true;
    };
    /** _.some()
     * Arguments:
     *   1) A collection
     *   2) A function
     * Objectives:
     *   1) Call <function> for every element of <collection> with the paramaters:
     *       if <collection> is an array:
     *        current element, it's index, <collection>
     *       if <collection> is an object:
     *        current value, current key, <collection>
     *   2) If the return value of calling <function> is true for at least one element, return true
     *   3) If it is false for all elements, return false
     *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
     * Gotchas:
     *   1) what if <function> doesn't return a boolean
     *   2) What if <function> is not given?
     * Examples:
     *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
     *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
     * */
    _.some = function(obj, predicate) {
        predicate = predicate || _.identity;
        var keys = !Array.isArray(obj) && Object.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            if (predicate === "") return false;
            if (predicate(obj[currentKey], currentKey, obj)) return true;
        }
        return false;

    };
    /** _.reduce()
    * Arguments:
    *   1) An array
    *   2) A function
    *   3) A seed
    * Objectives:
    *   1) Call <function> for every element in <collection> passing the arguments:
    *         previous result, element, index
    *   2) Use the return value of <function> as the "previous result"
    *      for the next iteration
    *   3) On the very first iteration, use <seed> as the "previous result"
    *   4) If no <seed> was given, use the first element/value of <collection> as <seed>
    *   5) After the last iteration, return the return value of the final <function> call
    * Gotchas:
    *   1) What if <seed> is not given?
    * Examples:
    *   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6

    _.reduce = function(array, combine, start) {
        for (var i = 0; i < array.length; i++)
        var current = start;
        if (current === undefined){
            current === array[0];
        }
        current = combine(current, array[i]);
      return current;
    };


    /** _.extend()
    * Arguments:
    *   1) An Object
    *   2) An Object
    *   ...Possibly more objects
    * Objectives:
    *   1) Copy properties from <object 2> to <object 1>
    *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
    *   3) Return the update <object 1>
    * Examples:
    *   var data = {a:"one"};
    *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
    *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
    *

     http://jsbin.com/bezeve/edit?js,console  USE EACH
    .... 

    
       

    };*/

    // This is the proper way to end a javascript library
}());
