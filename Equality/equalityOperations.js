//=== is strict comparison and does not perform type coercion
const age = 18;

if (age === 18) console.log(`you just became an adult with strict comparison `);

const newage = "18";
if (newage === 18) console.log(`you just became and adult`);

//== is lose comparision and does not compare the type of the data while comparing
if (newage == 18) console.log(`you became and adult but with lose comparison `);

//always use strict equality === while comparing for bug free code.
