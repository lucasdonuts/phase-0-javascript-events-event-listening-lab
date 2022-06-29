const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  })

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  })
})

// The test originally tried to grab an element using the wrong ID so tests were failing with correct code.
// Had to change line 7 from getElementById('input') to getElementById('button') because my code
// was working as intended in the browser but tests were failing with an error of 
// 'TypeError: Cannot read properties of null (reading 'addEventListener')'