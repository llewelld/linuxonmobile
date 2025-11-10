$(function() {
  // The number of items to shuffle
  const ELEMENT_NUM = 10;

  // Swap two elements in the DOM
  const swapElements = function (id1, id2) {
    const content1 = $(id1).html();
    const content2 = $(id2).html();
    $(id1).html(content2);
    $(id2).html(content1);
  }

  // Shuffle elements using Fisher-Yates, swapping DOM elements as we go
  const shuffle = (array) => {
    for (let count = array.length - 1; count > 0; count--) {
      const swap = Math.floor(Math.random() * (count + 1));
      swapElements(array[count], array[swap]);
    }
  };

  // Build an array of elements to shuffle
  var array = [];
  for (let count = 0; count < ELEMENT_NUM; ++count) {
    array.push("#project" + count);
  }

  // Perform the shuffle
  shuffle(array)
});
