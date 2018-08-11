function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(shout(string))
}

function logWhisper(string) {
  return console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (string === 'I love you, Grandma.') {
    return ''
  } else if (string.toUpperCase() === uppercase) {
    return ''
  } else if (string.toLowerCase() === lowercase) {
    return 'I can\'t hear you!'
  }
}