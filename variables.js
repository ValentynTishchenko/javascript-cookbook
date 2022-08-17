// что будет резульетатов выполнения функции?
function ex1() {
  var b = 1;

  if (true) {
    var b = 1;
  }

  console.log(b)
}

// что будет резульетатов выполнения функции?
function ex2() {
  if (true) {
    var b = 1;
  }

  console.log(b)
}

// что будет резульетатов выполнения функции?
function ex3() {
  if (true) {
    const b = 1;
  }

  console.log(b)
}

// что будет резульетатов выполнения функции?
function ex4() {
  const b = 1;

  if (true) {
    let b = 1;
  }

  console.log(b)
}

// что будет резульетатов выполнения функции?
function ex5() {
  for (let i = 0; i < 5; i++) {

  }

  console.log(i)
}


// что будет резульетатов выполнения функции?
function ex6() {
  var b = 5

  function test() {
    b = 3
  }

  test()

  console.log(b)
}

// что будет резульетатов выполнения функции?
function ex7() {
  var b = 5

  function test() {
   var b = 3
  }

  test()

  console.log(b)
}

// что будет резульетатов выполнения функции?
function ex8() {
  var b = 5

  function test() {
    var b = 3
  }

  function test1() {
    var b = 5
  }

  test()
  test1()

  console.log(b)
}