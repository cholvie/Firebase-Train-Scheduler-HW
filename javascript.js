  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZsI5HsR0h2ddDo1CtVxY963_NUcZTKH0",
    authDomain: "fir-train-scheduler-hw.firebaseapp.com",
    databaseURL: "https://fir-train-scheduler-hw.firebaseio.com",
    projectId: "fir-train-scheduler-hw",
    storageBucket: "fir-train-scheduler-hw.appspot.com",
    messagingSenderId: "814401219424"
  };
  firebase.initializeApp(config);

  //reference message collection
  var messagesRef = firebase.database().ref('messages');

//event listener for form submit
document.getElementById('trainForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  
  //get values
  var trainName = getInputVal('trainName');
  var destination = getInputVal('destination');
  var firstTrain = getInputVal('firstTrain');
  var frequency = getInputVal('frequency');

  //save message
  saveMessage(trainName, destination, firstTrain, frequency);

  //show alert
  document.querySelector('.alert').style.display = 'block';

  //hide alert after 3 seconds
  setTimeout(function() {

    //show alert
  document.querySelector('.alert').style.display = 'none';

  },3000);

  //reset form
  document.getElementById('trainForm').reset();

}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

 // Change the HTML to reflect
 /*
 $(".train").text(sv.trainName);
 $(".destined").text(sv.destination);
 $(".1stTrain").text(sv.firstTrain);
 $(".frequent").text(sv.frequency);
 */

//save the message to firebase
function saveMessage(trainName, destination, firstTrain, frequency){
  var newMessagesRef = messagesRef.push();
  newMessagesRef.set({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  });
}



