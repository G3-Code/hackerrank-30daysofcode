function testException(string) {
  try {
    let n = eval(string);

    console.log(n);
  } catch (error) {
    console.log("Bad String");
  }
}

testException("za");
testException("3");
testException("20.5");
testException("zaasf");
