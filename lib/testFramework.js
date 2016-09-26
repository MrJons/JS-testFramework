
function equal(a,b) {
  if (a === b) {
    console.log('PASS - '+ a + " equals " + b);
  }
  else {
    console.log('FAIL - '+ a + " doesn't equal " + b);
  }
}

function notEqual(a,b) {
  if (a !== b) {
    console.log('PASS - '+ a + " doesn't equal " + b);
  }
  else {
    console.log('FAIL - '+ a + " equals " + b);
  }
}

function contains(container, target) {
  if (container.indexOf(target) === -1) {
    console.log('FAIL - '+ container + " doesn't include " + target);
  }
  else {
    console.log('PASS - '+ container + " includes " + target);
  }
}

function notContains(container, target) {
  if (container.indexOf(target) !== -1) {
    console.log('FAIL - '+ container + " includes " + target);
  }
  else {
    console.log('PASS - '+ container + " doesn't include " + target);
  }
}
