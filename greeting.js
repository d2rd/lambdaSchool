// Return a greeting for three different languages:

// Input Example:

// 'German'
// 'Mandarin Chinese'
// 'Spanish'

// Output Example:

// 'Guten Tag!'
// 'Ni Hao!'
// 'Hola!'

// If language does not equal German, Mandarin Chinese, or Spanish then return 'Hello!'.

function greeting(language) {
  switch (language) {
    case language = "German":
     return ('Guten Tag!');

    case language = "Mandarin Chinese":
     return ('Ni Hao!');

    case language = "Spanish":
     return ('Hola!');

    default:
     return ('Hello!');

  }
}

greeting("German");