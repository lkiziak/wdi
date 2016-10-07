+// classical method
 +
 +class Circle {
 +    constructor (radius) {
 +        this.radius = radius
 +    }
 +
 +    area () {
 +        return Math.PI * this.radius * this.radius
 +    }
 +
 +    perimeter () {
 +        return Math.PI * 2 * this.radius
 +    }
 +
 +}
 +
 +// // Alternate with JS Objects
 +var circle = {
 +    radius: 5,
 +    area: function () {
 +        return Math.PI * this.radius * this.radius
 +    }
 +}
 +
 +// Multiple instances
 +var circles = [new Circle(1), new Circle(2), new Circle(3)]
 +
 +
 +// Prototypal Method
 +// Constructor Method
 +function Circle (radius) {
 +    this.radius = radius
 +
 +    this.area = function () {
 +        return this.radius * this.radius * Math.PI
 +    }
 +}
 +
 +// Another Constructor method using prototypes
 +
 +function Circle (radius) {
 +    this.radius = radius
 +}
 +
 +Circle.prototype.area = function () {
 +    return this.radius * this.radius * Math.PI
 +}
 +
 +// Prototypes and Inheritance
 +var shape = { shape: true }
 +var rectangle = Object.create(shape)
 +rectangle.rectangle = true
 +var square = Object.create(rectangle)
 +square.square = true
 +
 +shape.side = 30
 +rectangle.side = 20
 +
 +
 +
