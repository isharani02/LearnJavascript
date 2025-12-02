// ***JavaScript Strings***

let myName = new String("Isha Rani");
let myRole = new String("Student");

// String Concatenation 
console.log("String Concatenation using + operator");
console.log("My name is" + myName + " and my job role is " + myRole + "." );

// Using String Interpolation
//String interpolation using backtics(``) and Embed expressions with dollar curly braces ${}.

console.log("String Interpolation using backtics(``) operator");
console.log(`My name is ${myName} and my job role is ${myRole}.`);

let newString = new String("I am a string");
let anotherString = new String("I am a string object.");
const regExp = /[a-c]/;

// HTML Wrapper Methods (Deprecated)
//-----------------------------------------------------
// big              :   Creates <big> HTML tag. Depricated.
console.log(newString.big());

// blink            :   Creates <blink> HTML tag. Depricated.
console.log(newString.blink());

// bold             :   Creates <bold> HTML tag. Depricated.
console.log(newString.bold());

// anchor           :   Creates <a name= ""> HTML tag with name. Depricated.
console.log(newString.anchor('thisIsName'));

// fontsize()       :   Sets the size attribute value of HTML <font> tag element. Depricated.
console.log(newString.fontsize("10"));

// fontcolor()      :   Sets the color attribute value of HTML <font> element. Depricated.
console.log(newString.fontcolor("red"));

// link()           :   Sets the <a href=""> attribute value of HTML a element. Depricated.
console.log(newString.link("www.abc.com"));


//----------------------------
// Methods of String
//----------------------------

// length   :   Gives length of the string.
console.log("Length of the string : ", newString.length);

// String()   :   Create/concert to a string object.
console.log("String() : ", String(newString));

// 1.Accessing Character
//-----------------------------

//charAt()  :   Returns the character of any index.
console.log("charAt(4) : ", newString.charAt(4));

//at()  :   Returns index of character including negative index. 
console.log("at(3) : ", newString.at(3));
console.log(newString.at(-3));             

//charCodeAt()  :   Returns character ascii value for the index.
console.log("charCodeAt(5) : ", newString.charCodeAt(5));

//codePointAt() :   Same as charCodeAt.
console.log("codePointAt(5) : ", newString.codePointAt(5));

//string[index]  :   Returns character like an array.
console.log("string[2] : ", newString[2]);

// 2.Searching or Checking
//-------------------------------
//includes()    :   Returns boolean value after checking, if given value is there in the string or not.
console.log("includes('i) : ", newString.includes('i'));

//indexOf() :  Returns index of first occurrence of the string. 
console.log(("indexOf('a') : ", newString.indexOf('a')));

//lastIndexOf() :   Returns index of last occurence of the string.
console.log("lastIndexOf('a') : ", newString.lastIndexOf('a'));

//startsWith()  :   Checks string starts with given text or not.
console.log("startsWith('s') : ", newString.startsWith('s'));


//endsWith()    :   Checks String end with given test or not.
console.log("endsWith('t') : ", newString.endsWith('t'));


//3. Extracting & Slicing
//------------------------------
//slice()   :   Returns slice between given indexes(start & end).
console.log("slice(0,2) : ", "JavaScript".slice(0,2));

//subString()   :   Similar to slice but does not allow negative indexes.
console.log("subString(-4,2) : ", "JavaScript".substring(-4,2));

//subStr()  

//4. Modifying Strings
//-------------------------------  
//concat()  :  Concatinate string(Join strings).
console.log("concat('object') : ", newString.concat('object.'));

//toUpperCase() :   Converts to UPPERCASE.
console.log("toUpperCse() : " , "hello".toUpperCase());

//toLowerCase() :   Convert to lowercase.
console.log("toLowerCase() : ", "HELLO".toLowerCase());


//repeat()  :   Repeat the string.
console.log("Repeat(3) : ", 'hi'.repeat(3));

//replace()  :  Replace the string part with given value.
console.log("replce('I am','ThIs is') : ", newString.replace('I am','This is'));

//replaceAll()    :   Replace all string parts with given value.
console.log("replaceAll('string','text') : ", newString.replaceAll('string ','text'));

//05.Padding
//-------------------------------
//padEnd()  :   Pads at end.
console.log("padEnd(15, '*') :", "Hi".padEnd(15, "*")); 

//padStart()    :   Pads at start.
console.log("padStart(15, '*') :", "Hi".padStart(15, "*"));  

//06.Trimming Whitespace

//trim()    :   Removes spaces from both ends.
console.log("trim() : ","  Hello Everyone  ".trim());

//trimEnd()/trimRight() :   Removes spaces only from end or right.
console.log("trimEnd()/trimRight() : ", "Welcome to  ".trimEnd());

//trimStart()/trimLeft()   :   Removes spaces from start or left.
console.log("trimStart()/trimLeft() : ", "  JavaScript Series".trimStart());


//07.Spliting 
//-----------------------------
//split()   :   Converts string into an array.
console.log("split(' ') : ", "HELLO".split(" "));

//08.Unicode Safety
//-----------------------------
//isWellFormed()  :   It checks whether the string’s characters are properly formed and not broken.   
console.log("isWellFormed() : ", newString.isWellFormed());


//toWellFormed()    :   Repairs malformed Unicode by replacing invalid parts.
console.log("toWellFormed() : ", newString.toWellFormed);

//09.Other Useful methods
//------------------------------
//localeCompare() : Compare strings alphabetically.
console.log("localeCompare() : ", "Apple".localeCompare('Banana'));

//match()   :   Returns index value after comparing string with given regex.
console.log("match(/[a-c]/g) :", newString.match(/[a-c]/g));


//matchAll()    :   Returns value of all indexes after comparing string with given regex.
console.log("matchAll(/[a-c]/g) :", [...newString.matchAll(/[a-c]/g)]);

//search()  :   Returns index of regex match.
console.log("search(/[s]/) :", newString.search(/s/));

//valueOf() :   Returns the premitives string value.
console.log("valueOf() :", newString.valueOf());

//toString()    :   Returns the string.   
console.log("toString() :", newString.toString());
