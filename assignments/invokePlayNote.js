// let notes = {
//     // notesAvailable : ['A','Bb','B','C','C#','D','Eb','E','F'],
//     "playNote": function(noteToPlay) {
//         return ('I just played a ' + noteToPlay);
//       }
//   }



// function invokeMethod(notes, playableNote) {
//   //invokes method using dot notation
//   // console.log(notes.playNote(playableNote));
//   //     ---OR---
//   //invokes method using bracket notation
//   console.log(notes['playNote'](playableNote))
// }

// invokeMethod(notes, 'Bb');
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