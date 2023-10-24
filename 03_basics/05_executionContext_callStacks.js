/*

**JS Execution Context** =>how js run a file =>executes on threads as JS is single thread

code => 
    1)Global Execution Context => this => browser GEC => window obj
    2)functional Execution Context
    3)Eval Execution Context => property of global

2 phase => 
    1)Memory creation phase (creation phase) => variables ki jagah allocate hoti hai
    2)Execution phase => execute


e.g
let val1 =10;
let val2 = 4
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result = addNum(num1,num2)
let result2 = addNum(5,50)

        How this code works
    1)Global Execution => this(allocates in)

    2)Memory creation phase => all variables are collected and emory is assigned
        val1 => undefined (as it is not defined yet)
        val2 => undefined
        addNum => defination of function
        result1 => undefined
        result2 => undefined
        (first cycle completed here)

    3)Execution Phase => Start executing the prog and values are given to the phase 2 varibales
        val1 <= 10
        val2 <= 4
        result1 <= addNum(num1,num2) => (create its own execution context) => deleted after execution
               1) new env + execution thread
               2) memory creation phase (from function defination)
                    val1 => undedined
                    val2 => undedined
                    total => undefined
               3) execution phase => data manipulation here
                    num1 => 10
                    num2 => 5
                    total => 15 (return to global execution context)
        result <= 15
        result2 <= addNum(num1,num2) => (create its own execution context) => deleted after execution
               1) new env + execution thread
               2) memory creation phase (from function defination)
                    val1 => undedined
                    val2 => undedined
                    total => undefined
               3) execution phase => data manipulation here
                    num1 => 10
                    num2 => 5
                    total => 15 (return to global execution context)
        result2 <= 15


** Call Stacks **
its like a stack

1) GLobal execution
2) To execute a function bring that into call stack when finished function is removed
    what if there is a function within function?
    A: LIFO => inside function remove first
e.g Go to inspect > source > create snippet


*/
