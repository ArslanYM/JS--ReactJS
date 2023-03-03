## Hoisting
- Hoisting refers to the process whereby the interpreter appears top move the declarations to the top of the code before execution

- Variables can thus be referenced before they are declared in JS , Refer to Examp le1 in Script 
 
- In case of initialisations like in example2 , the value will stay undefind until  an initialisation is reached!

# Hoistng with let, const & var 

- If we use the let varible before initialization it wont work.
- It will be in a temp deadzone
- Refer to example3 in script
- Same happens with const 
- But there is no error with var

# Function Expressions 
- Function expression and class expressions are not hoisted!
- Refer to example 4