console.log("Hello World"); 
//! Let understand how Javascript Code Executes - Behind the scence 
// - Above we write the javascript code which was console.log function and print Hello World 
// this js code "console.log("Hello World") will be going through some phases 

//* First Phase : Parsing 
// In this parsing our javascript engine start parsing our code means checking the syntax of our code and break down every code into small chunks which we say tokenization  
//* Second Phase : Syntax Tree 
//  After the parsing phase was complete the syntax tree was created let understand  or we say see overview of syntax tree 
//! console -----> log ----> "Hello World" 

//? Above all process are done before runtime of code 

//* Nowadays javascript used "JIT" Compiler which stands for "Just in Time" Compiler so in which javascript code was not compile in one go, instead it translated our code in intermediatory state but does not compile which make our code execute faster 
//* Basically JIT Compiler will convert our code into intermediatory level which was called "Byte Code" which makes our javascript language independent to machine than after js compiler convert our bytecode into machine code so computer can't understand programming language mainly high level programming language so compiler or interpreter converts into machine code so it become understandable for machine to perform task. 
//* Than machine code executed by javascript engine  