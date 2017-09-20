function shout(string) {
  return string.toUpperCase();
};

function whisper(string) {
  return string.toLowerCase();
};

function logShout(string) {
  console.log(string.toUpperCase());
};

function logWhisper(string) {
  console.log(string.toLowerCase());
};

function sayHiToGrandma(string) {

<<<<<<< HEAD
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }


=======
  var lowercase = "hello!";

  lowercase.toLowerCase() === lowercase;

  var uppercase = "HELLO!";

  var mixedCase = "Hi there!";


  if (lowercase) {
    return "I can\'t hear you!"
  } else if (uppercase) {
    return "YES INDEED!";
  } else if (string == "I love you, Grandma.") {
    return "I love you, too."
  }

>>>>>>> 94f18e73c0d46e0d4bf1866ce85f8ad1034225fd
}

sayHiToGrandma("HELLO!");
