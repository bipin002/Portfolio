// Values to keep track of the number of letters typed, which quote to use, etc.
var i = 0,
    a = 0,
    isBackspacing = false,
    isNewLine = false;

// Typing text content. Use a pipe '|' to indicate text in <p> tag and '</br>' for line breaks.
var textArray = [
  "Hi, </br>",
  "Hi, </br>I'm Bipin Mistry", 
  "Hi, </br>I'm Bipin Mistry </br>Software Developer",
  "Hi, </br>I'm Bipin Mistry </br>Software Developer | Dot Net Developer / SQL Developer / Frontend Developer"  
];

// Typing speeds (in milliseconds)
var speedForward = 100, // Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, // Wait between first and second lines
    speedBackspace = 25; // Backspace Speed

// Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h2"),
      eParagraph = element.children("p");

  if (!isBackspacing) {
    if (i < aString.length) {
      
      if (aString.substring(i, i + 5) === "</br>") {
        eHeader.append("<br>");
        i += 5;
      } else if (aString.charAt(i) === "|") {
        isNewLine = true;
        i++;
      } else {
        if (!isNewLine) {
          eHeader.append(aString.charAt(i));
        } else {
          eParagraph.append(aString.charAt(i));
        }
        i++;
      }
      
      setTimeout(function() { typeWriter(id, ar); }, speedForward);
    } else {
      isBackspacing = true;
      setTimeout(function() { typeWriter(id, ar); }, speedWait);
    }
  } else {
    if (eHeader.text().length > 0 || eParagraph.text().length > 0 || eHeader.find("br").length > 0) {
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.html().endsWith("<br>")) {
        eHeader.html(eHeader.html().slice(0, -4));
      } else {
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function() { typeWriter(id, ar); }, speedBackspace);
    } else {
      isBackspacing = false;
      isNewLine = false;
      i = 0;
      a = (a + 1) % ar.length;
      setTimeout(function() { typeWriter(id, ar); }, 50);
    }
  }
}
