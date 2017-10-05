/*
Add the value of the property argument as a key on the object argument.
The value of the new property should be set to null.
Return object after adding the new property.

Input Example:

{}, 'hello'
{ x: 5 }, 'y'

Output Example:

{ hello: null }
{ x: 5, y: null }

note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
*/

let bassGuitars = {
    brand : "Fender",
    stringCount : 4,
    color : "Blue"
};
function addProperty(object, property) {
  bassGuitars["value"] = "";
}
addProperty(bassGuitars, "value");

/*Assign the anonymous object to it the way you would any other value.

people["4"] = { name: 'John' };*/