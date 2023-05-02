// Function triggered when WEBMIDI.js is ready
function onEnabled() {

  // Display available MIDI input devices
  if (WebMidi.inputs.length < 1) {
    document.body.innerHTML+= "No device detected.";
  } else {
    WebMidi.inputs.forEach((device, index) => {
      document.body.innerHTML+= `${index}: ${device.name} <br>`;
    });
  }

}




function setup() {
  //createCanvas(400, 400);
  console.log("Starting setup");

  navigator.requestMIDIAccess()
  .then(midiAccess => {
    // use the midiAccess object to access MIDI devices
    console.log("Ok requesting MIDI access:", midiAccess);
  })
  .catch(error => {
    console.log("Error requesting MIDI access:", error);
  });

  console.log("Auth ok");

  navigator.requestMIDIAccess()
  .then(midiAccess => {
    console.log("Available MIDI inputs:", midiAccess.inputs);
  })
  .catch(error => {
    console.log("Error requesting MIDI access:", error);
  });


//  WebMidi
//    .enable()
//    .then(onEnabled)
//    .catch(err => alert(err));
  // set the initial value of the variable
  //variableToControl = 5;
}

function draw() {
}

//function handleMidiMessage(event) {
//  // check if the message is a controller message on the specified channel and controller number
//  if (event.data[0] == 176 + midiChannel - 1 && event.data[1] == midiControllerNumber) {
//    // set the value of the variable based on the controller value
//    variableToControl = map(event.data[2], 0, 127, 0, 1);
//  }
//}

