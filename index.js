var katzDeli = [];

function takeANumber ( arr, name) {
  arr.push(name);
  return arr.length;
}

function nowServing ( arr ) {
  if (arr.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  return arr.shift();
}

function currentLine ( arr ) {
  if (arr.length === 0) {
    return 'The line is currently empty.'
  }
  var str = 'Thie line is currently:';
  for (var i=0; i< arr.length; ++i) {
    str " " + i+1 ". " + arr[i] + ",";
  }
}