/*
Instructions from your teacher:
method is a string that contains the name of a method on the object
Invoke this method using bracket notation.
Nothing needs to be returned.

Input Example:

{ foo: function() {} }, 'foo'
*/

let notes = {
    // notesAvailable : ['A','Bb','B','C','C#','D','Eb','E','F'],
    playNote: function(note) {
        return ('I just played a ' + note);
      }
  }

function invokeMethod(notes, playableNote) {
  //invokes method using dot notation
  console.log(notes.playNote(playableNote));
  //invokes method using bracket notation
  console.log(notes['playNote'](playableNote))
}

invokeMethod(notes, 'Bb');

//works in repl.it fails test.