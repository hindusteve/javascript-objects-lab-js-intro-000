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

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {

  object[key] = value
  return object

}

function deleteFromObjectByKey (object, key) {

  var cloneObject = Object.assign({}, objectVar)

  delete cloneObject[key];
  return cloneObject;

}
