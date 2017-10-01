function Objects() {
  // var recipes = {};
  var recipes = new Object();

  return recipes;
}

function updateObjectWithKeyAndValue (objectVar, keyVar, valueVar) {


  objectVar[keyVar] = valueVar;
  return objectVar;

}
