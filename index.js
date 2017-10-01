function Objects() {
  // var recipes = {};
  var recipes = new Object();

  // return recipes;
}

function updateObjectWithKeyAndValue (objectVar, keyVar, valueVar) {

  var cloneObject = Object.assign({}, objectVar)

  cloneObject[keyVar] = valueVar;
  return cloneObject;

}
