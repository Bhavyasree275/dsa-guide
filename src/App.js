import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const chapters = [
  {
    id: 1,
    title: "Introduction to Programming & Java",
    emoji: "☕",
    color: "#FF6B35",
    sections: [
      {
        title: "What is a Programming Language?",
        theory: `A programming language is how humans talk to computers. Computers only understand 0s and 1s (machine code), but no human can write millions of 0s and 1s. So we created programming languages that look like English — and then a special program translates our human-readable code into machine code.

Think of it like this: you speak Telugu or Hindi, but the computer speaks "binary". Java is like a translator in between — you write in Java, and Java translates it for the computer.

There are two main types of languages:
• Low-Level Languages: Very close to machine language. Difficult for humans to read. Example: Assembly language.
• High-Level Languages: Easy to read, looks like English. Example: Java, Python, C++.

Languages are also categorized by HOW they run your code:
• Compiled: The entire code is translated to machine code BEFORE running. Like translating a whole book before reading it. Example: C, C++.
• Interpreted: Code is translated line-by-line WHILE running. Like having a live interpreter. Example: Python.
• Java is SPECIAL — it uses BOTH! Java first compiles to "bytecode" (a middle format), then the JVM (Java Virtual Machine) interprets that bytecode. This is why Java runs on ANY computer — "Write Once, Run Anywhere!"`,
        code: null
      },
      {
        title: "How Java Works — JDK, JRE, JVM",
        theory: `Before writing even one line of Java, you MUST understand these three terms. Many beginners skip this and then get confused forever. Let's fix that!

JDK (Java Development Kit):
This is what you install on your computer when you want to CODE in Java. It's the complete package that includes everything — the compiler, the JRE, and extra tools. If you're a developer writing Java code, you need the JDK. Think of it as a full carpenter's toolbox.

JRE (Java Runtime Environment):
This is what you need to RUN Java programs (not develop them). If your friend sends you a Java program and you just want to run it, you need the JRE. It includes the JVM and standard libraries. Think of it as just the tools to assemble furniture (not make it from scratch).

JVM (Java Virtual Machine):
This is the most important one! The JVM is a virtual computer inside your real computer. When you write Java code, it gets compiled into "bytecode" (.class files). The JVM reads this bytecode and executes it on YOUR specific computer. Since every computer (Windows, Mac, Linux) has its own JVM, the SAME bytecode runs everywhere — that's the magic!

The flow is:
Step 1: You write HelloWorld.java (your source code)
Step 2: javac (the compiler) converts it to HelloWorld.class (bytecode)
Step 3: JVM reads the .class file and runs it on your computer`,
        code: null
      },
      {
        title: "Memory — Stack vs Heap",
        theory: `When your Java program runs, the computer gives it two areas of memory. Understanding this prevents HUGE bugs.

THE STACK — Think of it like a stack of plates:
• Small but very fast
• Stores local variables (variables inside methods) and method call information
• When a method finishes, everything it put on the stack is automatically removed
• Operates in a strict "Last In, First Out" order
• Each method call creates a new "frame" on the stack

THE HEAP — Think of it like a giant warehouse:
• Much bigger but slightly slower
• Stores all OBJECTS (things created with the "new" keyword)
• Objects stay in the heap until nobody needs them anymore
• Java's Garbage Collector automatically cleans up objects nobody is using
• This is WHY you don't manually manage memory in Java (unlike C/C++ where memory leaks are common bugs!)

GARBAGE COLLECTOR — Java's cleanup robot:
Imagine you rent library books (objects). When you're done, Java's garbage collector automatically returns them. In C++, YOU have to return them manually — forget once and the library fills up (memory leak). Java saves you from this headache!`,
        code: `// Stack example — these variables live on the Stack
public static void calculate() {
    int x = 10;       // x is on the Stack
    int y = 20;       // y is on the Stack
    int sum = x + y;  // sum is on the Stack
    // When calculate() ends, x, y, sum are all automatically removed!
}

// Heap example — objects live on the Heap
public static void main(String[] args) {
    // "new" keyword = create object in HEAP
    String name = new String("Bhavya");
    // 'name' variable is on Stack, but the actual String object is in Heap
    // When no variable points to "Bhavya" anymore, Garbage Collector removes it
    
    int[] numbers = new int[5]; // array object is in Heap
    // numbers variable (on stack) points to the array in heap
}`
      },
      {
        title: "Your First Java Program — Line by Line",
        theory: `Let's write "Hello World" and understand EVERY single word. Nothing will be a mystery!

public class HelloWorld
• "public" means this class can be accessed from anywhere
• "class" — in Java, EVERYTHING lives inside a class. A class is a blueprint/container for your code
• "HelloWorld" is the name of the class — it MUST match the filename (HelloWorld.java)
• The { } curly braces define the beginning and end of the class

public static void main(String[] args)
• This is the MAIN METHOD — the entry point of your program. Java looks for this exact signature to know where to start running your code
• "public" — accessible from anywhere (Java needs to call it from outside)
• "static" — belongs to the class itself, not an object (Java can call it without creating an object)
• "void" — this method returns NOTHING (no output value)
• "main" — the special name Java looks for
• "String[] args" — allows passing command-line arguments (usually ignore for now)

System.out.println("Hello, World!")
• "System" is a built-in Java class that represents your computer system
• "out" is a stream that connects to your screen/console
• "println" means "print line" — prints text AND moves to next line
• "print" (without ln) prints WITHOUT moving to the next line
• "printf" allows formatted output like in C language`,
        code: `public class HelloWorld {
    public static void main(String[] args) {
        
        // println = print + go to next line
        System.out.println("Hello, World!");
        System.out.println("I am learning Java!");
        
        // print = just print, stay on same line
        System.out.print("Hello ");
        System.out.print("World");
        // Output: Hello World (on same line)
        
        System.out.println(); // just prints a blank new line
        
        // printf = formatted print (like filling in blanks)
        // %s = string placeholder, %d = integer placeholder, %f = float placeholder
        String name = "Bhavya";
        int age = 20;
        double marks = 95.5;
        System.out.printf("Name: %s, Age: %d, Marks: %.1f%n", name, age, marks);
        // Output: Name: Bhavya, Age: 20, Marks: 95.5
        // %n = new line (use this instead of \n in printf)
    }
}`
      },
      {
        title: "Data Types — What Kind of Data?",
        theory: `A data type tells Java WHAT KIND of data a variable will hold. Why does this matter? Because different data takes different amounts of memory!

Think of data types like different sized boxes:
• A tiny box for small numbers (byte)
• A medium box for regular numbers (int)
• A huge box for decimal numbers (double)
• A tiny box that holds just one letter (char)
• A light switch — only on/off (boolean)

PRIMITIVE TYPES (the 8 basic building blocks):

byte — 1 byte — Whole numbers from -128 to 127. Use when saving memory matters.
short — 2 bytes — Whole numbers from -32,768 to 32,767.
int — 4 bytes — The most commonly used! Whole numbers from about -2 billion to +2 billion.
long — 8 bytes — Very large whole numbers. Add 'L' at the end: 9999999999L
float — 4 bytes — Decimal numbers with ~7 significant digits. Add 'f' at end: 3.14f
double — 8 bytes — Decimal numbers with ~15 significant digits. DEFAULT for decimals.
char — 2 bytes — A SINGLE character. Use single quotes: 'A', '5', '@'
boolean — 1 bit — Only two values: true or false. Used for conditions.

IMPORTANT: Java also has WRAPPER CLASSES — Integer, Double, Character, Boolean, etc.
These are the "object" versions of primitive types. You'll need them when using Collections (ArrayList, HashMap, etc.) since those don't work with primitives directly.`,
        code: `public class DataTypes {
    public static void main(String[] args) {
        
        // INTEGER TYPES
        byte smallNum = 100;          // -128 to 127
        short medNum = 30000;         // -32768 to 32767
        int regularNum = 1000000;     // most commonly used
        long bigNum = 9876543210L;    // must add 'L' at end!
        
        // DECIMAL TYPES
        float approx = 3.14f;         // must add 'f' at end!
        double precise = 3.14159265;  // default for decimals
        
        // OTHER
        char letter = 'A';            // single quotes for char
        char digit = '5';             // '5' is different from int 5!
        boolean isStudent = true;     // only true or false
        
        // PRINTING
        System.out.println("int: " + regularNum);    // + joins values with string
        System.out.println("char: " + letter);
        System.out.println("boolean: " + isStudent);
        
        // TYPE CASTING — converting between types
        int x = 9;
        double y = x;          // WIDENING (safe, automatic) — int fits in double
        System.out.println(y); // 9.0
        
        double pi = 3.99;
        int truncated = (int) pi;  // NARROWING (must cast manually) — loses decimal
        System.out.println(truncated); // 3 (NOT rounded, just cut off!)
        
        // WRAPPER CLASSES (object versions)
        Integer wrappedInt = 42;           // auto-boxing
        int unwrapped = wrappedInt;        // auto-unboxing
        String s = Integer.toString(42);   // convert int to String
        int n = Integer.parseInt("42");    // convert String to int
        System.out.println(Integer.MAX_VALUE); // 2147483647
        System.out.println(Integer.MIN_VALUE); // -2147483648
    }
}`
      },
      {
        title: "Taking Input from User — Scanner",
        theory: `So far our programs just print things. To make INTERACTIVE programs, we need to read input from the keyboard. Java provides the Scanner class for this.

Why do we need to "import" Scanner?
Java has thousands of built-in classes organized into "packages" (like folders). Scanner lives in the java.util package. The import statement tells Java "I want to use Scanner from java.util".

Why do we write "new Scanner(System.in)"?
• "new" creates an object (an instance of Scanner)
• "System.in" is the keyboard input stream (just like System.out is the screen output)
• So we're creating a Scanner that reads from the keyboard

Different methods for different data types:
• sc.nextLine() — reads the WHOLE line including spaces
• sc.next() — reads ONE word (stops at space)
• sc.nextInt() — reads an integer
• sc.nextDouble() — reads a decimal number
• sc.nextBoolean() — reads true or false

COMMON MISTAKE — The "newline character" bug:
When you use nextInt() and then nextLine(), there's a leftover newline character (\n) from pressing Enter. The nextLine() reads this empty line instead of your actual input! Fix: add an extra sc.nextLine() to consume the leftover newline.`,
        code: `import java.util.Scanner; // MUST import before using Scanner

public class InputDemo {
    public static void main(String[] args) {
        
        // Create a Scanner connected to keyboard (System.in)
        Scanner sc = new Scanner(System.in);
        
        // Reading different types
        System.out.print("Enter your name: ");
        String name = sc.nextLine(); // reads whole line (supports spaces)
        
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        
        System.out.print("Enter your GPA: ");
        double gpa = sc.nextDouble();
        
        System.out.print("Are you a student? (true/false): ");
        boolean isStudent = sc.nextBoolean();
        
        // Print all inputs
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("Student: " + isStudent);
        
        // IMPORTANT: Always close Scanner when done to free resources
        sc.close();
        
        // ⚠️ COMMON BUG FIX:
        // Scanner sc2 = new Scanner(System.in);
        // int num = sc2.nextInt();   // reads number, leaves '\n' behind
        // sc2.nextLine();            // ← add this to consume leftover '\n'
        // String line = sc2.nextLine(); // now this works correctly
    }
}`
      },
      {
        title: "Conditionals — Making Decisions",
        theory: `Programs need to make decisions. "If this is true, do this. Otherwise, do that." This is conditional logic — the brain of any program.

IF-ELSE IF-ELSE:
This is a chain of conditions. Java checks them TOP to BOTTOM and runs the FIRST one that is true. Once one runs, it SKIPS the rest.

SWITCH STATEMENT:
Better than long if-else chains when you're checking ONE variable against MULTIPLE fixed values. Each "case" is like a label — Java jumps directly to the matching label.

TERNARY OPERATOR:
A shorthand for simple if-else. Looks like: condition ? valueIfTrue : valueIfFalse
Example: int max = (a > b) ? a : b;

COMPARISON OPERATORS:
== equals to
!= not equal to
> greater than
< less than
>= greater than or equal
<= less than or equal

LOGICAL OPERATORS:
&& AND — BOTH conditions must be true
|| OR — AT LEAST ONE condition must be true
! NOT — flips true to false, false to true`,
        code: `public class Conditionals {
    public static void main(String[] args) {
        
        // ===== IF - ELSE IF - ELSE =====
        int marks = 78;
        
        if (marks >= 90) {
            System.out.println("Grade: A");  // runs if marks >= 90
        } else if (marks >= 80) {
            System.out.println("Grade: B");  // runs if marks >= 80 (and not >= 90)
        } else if (marks >= 70) {
            System.out.println("Grade: C");  // THIS RUNS for 78
        } else if (marks >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");  // runs if NONE of the above matched
        }
        
        // ===== LOGICAL OPERATORS =====
        int age = 20;
        boolean hasID = true;
        
        // AND — both must be true
        if (age >= 18 && hasID) {
            System.out.println("Can enter the club");
        }
        
        // OR — at least one must be true
        boolean isWeekend = false;
        boolean isHoliday = true;
        if (isWeekend || isHoliday) {
            System.out.println("Can relax today!");
        }
        
        // NOT — flips the boolean
        boolean isRaining = false;
        if (!isRaining) {
            System.out.println("Good day for a walk!");
        }
        
        // ===== SWITCH STATEMENT =====
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break; // MUST have break! Otherwise falls through to next case
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday"); // THIS RUNS
                break;
            case 4:
                System.out.println("Thursday");
                break;
            default: // like else — runs if no case matched
                System.out.println("Unknown day");
        }
        
        // ===== TERNARY OPERATOR ===== (shorthand if-else)
        int a = 10, b = 20;
        int max = (a > b) ? a : b; // if a>b, max=a. Otherwise max=b
        System.out.println("Max: " + max); // 20
        
        String result = (marks >= 70) ? "Pass" : "Fail";
        System.out.println(result); // Pass
    }
}`
      },
      {
        title: "Loops — Repeating Actions",
        theory: `Loops let you repeat code without writing it over and over. Imagine printing 1 to 1000 — you don't want to write 1000 println statements!

FOR LOOP:
Use when you KNOW how many times to repeat. Has 3 parts:
• Initialization: int i = 0 — runs ONCE at the beginning
• Condition: i < 10 — checked BEFORE each iteration
• Update: i++ — runs AFTER each iteration

WHILE LOOP:
Use when you DON'T know how many times to repeat. Keeps looping as long as condition is true. IMPORTANT: If condition never becomes false, you get an INFINITE LOOP!

DO-WHILE LOOP:
Like while, but the condition is checked AFTER running the body. This guarantees the body runs AT LEAST ONCE. Useful for menus — show the menu first, THEN check if user wants to continue.

FOR-EACH LOOP (Enhanced for):
The cleanest way to loop through arrays and collections. No index needed!

BREAK and CONTINUE:
• break — IMMEDIATELY exits the entire loop
• continue — SKIPS the current iteration and goes to the next one

NESTED LOOPS:
A loop inside a loop! Used for matrices, patterns, etc. If outer runs n times and inner runs m times, total iterations = n × m.`,
        code: `public class Loops {
    public static void main(String[] args) {
        
        // ===== FOR LOOP =====
        // Format: for(initialization; condition; update)
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " "); // 1 2 3 4 5
        }
        System.out.println();
        
        // Counting DOWN
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " "); // 10 9 8 7 6 5 4 3 2 1
        }
        System.out.println();
        
        // ===== WHILE LOOP =====
        int i = 1;
        while (i <= 5) {
            System.out.print(i + " "); // 1 2 3 4 5
            i++; // NEVER forget this! Otherwise infinite loop
        }
        System.out.println();
        
        // ===== DO-WHILE LOOP =====
        int j = 1;
        do {
            System.out.print(j + " "); // runs first, THEN checks
            j++;
        } while (j <= 5); // 1 2 3 4 5
        System.out.println();
        
        // ===== FOR-EACH LOOP =====
        int[] nums = {10, 20, 30, 40, 50};
        for (int num : nums) { // reads as "for each num in nums"
            System.out.print(num + " "); // 10 20 30 40 50
        }
        System.out.println();
        
        // ===== BREAK and CONTINUE =====
        for (int k = 1; k <= 10; k++) {
            if (k == 6) break;         // STOP at 6
            if (k % 2 == 0) continue; // SKIP even numbers
            System.out.print(k + " "); // 1 3 5 (stops before 6)
        }
        System.out.println();
        
        // ===== NESTED LOOPS ===== (loop inside loop)
        // Printing a 3x3 star pattern
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 3; col++) {
                System.out.print("* ");
            }
            System.out.println(); // new line after each row
        }
        // Output:
        // * * *
        // * * *
        // * * *
    }
}`
      }
    ]
  },
  {
    id: 2,
    title: "Functions & Methods",
    emoji: "🔧",
    color: "#4ECDC4",
    sections: [
      {
        title: "What is a Function / Method?",
        theory: `A function (Java calls them "methods") is a NAMED block of code that does one specific job. You write it ONCE and can use it MANY times.

WHY use functions?
1. REUSABILITY — Write once, use anywhere. Don't repeat yourself (DRY principle)!
2. READABILITY — Code becomes cleaner. A 200-line main() becomes 20 lines calling named functions
3. DEBUGGING — If there's a bug in "calculateTax()", you know exactly where to look
4. TESTING — Test each function independently

ANATOMY OF A METHOD:
accessModifier returnType methodName(parameter1, parameter2) { body }

• Return type — what data does this method send back?
  - void — sends back NOTHING
  - int — sends back an integer
  - String — sends back a String
  - etc.

• Parameters — inputs the method needs to do its job (like ingredients for a recipe)
  Each parameter has a type and a name: int age, String name

• return statement — sends a value back to whoever called the method

THE "static" KEYWORD:
When a method is static, it belongs to the CLASS ITSELF, not to an object. This means you can call it without creating an object. In the main method (which is also static), you can only directly call other static methods.

CALL STACK — How methods work:
When main() calls add(), Java pauses main, runs add(), gets the result, then RETURNS to main. This creates a "stack" of method calls — very important for understanding recursion later!`,
        code: `public class Methods {
    
    // METHOD STRUCTURE:
    // public static returnType methodName(parameters) { body }
    
    // Returns an int (the sum of two numbers)
    public static int add(int a, int b) {
        int sum = a + b;
        return sum; // MUST return an int since return type is int
    }
    
    // Returns nothing (void) — just does something
    public static void greet(String name) {
        System.out.println("Hello, " + name + "! Welcome!");
        // no return statement needed for void
    }
    
    // Returns a boolean
    public static boolean isEven(int number) {
        if (number % 2 == 0) {
            return true;
        } else {
            return false;
        }
        // Shorthand: return number % 2 == 0;
    }
    
    // Returns the larger of two numbers
    public static int max(int x, int y) {
        return (x > y) ? x : y; // ternary operator
    }
    
    public static void main(String[] args) {
        
        // CALLING METHODS
        int result = add(10, 20);     // pass 10 and 20, get back 30
        System.out.println(result);   // 30
        
        greet("Bhavya");              // pass "Bhavya", prints greeting
        
        boolean check = isEven(7);   // pass 7, get back false
        System.out.println(check);   // false
        System.out.println(isEven(8)); // true — can use directly in println
        
        System.out.println(max(15, 8)); // 15
        
        // Calling multiple times with different values
        System.out.println(add(5, 3));    // 8
        System.out.println(add(100, 200)); // 300
        System.out.println(add(-5, 5));   // 0
    }
}`
      },
      {
        title: "Variable Scope",
        theory: `Scope defines WHERE a variable can be used. A variable only exists inside the block { } where it was created. Once you leave that block, the variable is GONE.

Think of scope like rooms in a house:
• A variable declared in the living room can only be used in the living room
• A variable declared in the main hall can be used in ALL rooms

Types of scope:
1. LOCAL SCOPE — Variable inside a method. Only usable within that method.
2. BLOCK SCOPE — Variable inside { } like an if-block or loop. Only usable in that block.
3. CLASS SCOPE (static fields) — Variable declared in the class. Usable in all methods.

WHY DOES SCOPE MATTER?
• Prevents accidental modification — other methods can't mess with your local variables
• Memory efficiency — local variables are freed when their block ends
• Prevents naming conflicts — two different methods can have variables with the same name

COMMON MISTAKE — Loop variable scope:
After a for loop like "for (int i = 0; i < 5; i++)", the variable 'i' only exists inside the loop! You can't use it after the loop ends.`,
        code: `public class ScopeDemo {
    
    // CLASS-LEVEL variable (static field) — accessible in ALL methods
    static int classVariable = 100;
    
    public static void methodOne() {
        int localVar = 50; // LOCAL — only exists inside methodOne()
        
        if (true) {
            int blockVar = 10; // BLOCK SCOPE — only exists inside this if block
            System.out.println(blockVar);    // ✅ works
            System.out.println(localVar);    // ✅ works (outer scope)
            System.out.println(classVariable); // ✅ works (class scope)
        }
        
        // System.out.println(blockVar); // ❌ ERROR! blockVar is out of scope here
        System.out.println(localVar);    // ✅ still works
    }
    
    public static void methodTwo() {
        // System.out.println(localVar); // ❌ ERROR! localVar belongs to methodOne
        System.out.println(classVariable); // ✅ works — class level
        
        // Loop variable scope
        for (int i = 0; i < 3; i++) {
            System.out.println(i); // ✅ works inside loop
        }
        // System.out.println(i); // ❌ ERROR! i only exists inside the for loop
    }
    
    public static void main(String[] args) {
        methodOne();
        methodTwo();
        
        int x = 10; // local to main
        {
            int y = 20; // local to this block
            System.out.println(x + y); // 30 — ✅ x is accessible from outer scope
        }
        // System.out.println(y); // ❌ ERROR! y is out of scope
    }
}`
      },
      {
        title: "Method Overloading",
        theory: `Method overloading means having MULTIPLE methods with the SAME NAME but DIFFERENT PARAMETERS. Java figures out which one to call based on what arguments you pass.

This is like having a "print" method that can handle different situations — print an int, print a String, print a double — all with the same name!

RULES for Overloading:
1. The method name must be the SAME
2. The parameter list must be DIFFERENT (different number, or different types)
3. Return type ALONE is NOT enough to differentiate — changing only return type causes an error

WHY is this useful?
Imagine if you had to write add_ints(), add_doubles(), add_three_ints() — messy! With overloading, you just write add() and let Java pick the right version automatically.

OVERLOADING vs OVERRIDING:
• Overloading: same class, same method name, different parameters (compile-time)
• Overriding: child class rewrites parent class method (runtime) — we'll cover in OOP`,
        code: `public class Overloading {
    
    // VERSION 1: Two integers
    public static int add(int a, int b) {
        System.out.println("Adding two ints");
        return a + b;
    }
    
    // VERSION 2: Three integers
    public static int add(int a, int b, int c) {
        System.out.println("Adding three ints");
        return a + b + c;
    }
    
    // VERSION 3: Two doubles
    public static double add(double a, double b) {
        System.out.println("Adding two doubles");
        return a + b;
    }
    
    // VERSION 4: Two Strings (concatenation)
    public static String add(String a, String b) {
        System.out.println("Joining two Strings");
        return a + b;
    }
    
    // Print with different types — classic overloading
    public static void display(int x)    { System.out.println("Int: " + x); }
    public static void display(double x) { System.out.println("Double: " + x); }
    public static void display(String x) { System.out.println("String: " + x); }
    public static void display(boolean x){ System.out.println("Boolean: " + x); }
    
    public static void main(String[] args) {
        // Java automatically picks the right version!
        System.out.println(add(5, 3));         // VERSION 1 → 8
        System.out.println(add(5, 3, 2));      // VERSION 2 → 10
        System.out.println(add(3.14, 2.71));   // VERSION 3 → 5.85
        System.out.println(add("Hello", " World")); // VERSION 4 → Hello World
        
        display(42);       // calls display(int)
        display(3.14);     // calls display(double)
        display("Java");   // calls display(String)
        display(true);     // calls display(boolean)
    }
}`
      },
      {
        title: "Varargs — Variable Arguments",
        theory: `What if you don't know how many arguments will be passed to a method? You could make 10 different overloaded versions... or use VARARGS (variable arguments)!

The syntax is: type... parameterName
The three dots (...) tell Java "accept any number of these."

Behind the scenes, Java turns the varargs into an ARRAY. So inside the method, you treat it like a normal array.

RULES for Varargs:
1. Only ONE varargs parameter per method
2. It MUST be the LAST parameter
3. Example: public static void test(String label, int... numbers) — this is valid

WHEN to use Varargs:
• When you want to add flexibility to your API
• Classic use: printf uses varargs (System.out.printf("%s is %d", name, age))
• Utility methods like sum, max, min with unknown count`,
        code: `public class Varargs {
    
    // int... numbers can accept any number of ints (0 or more)
    public static int sum(int... numbers) {
        int total = 0;
        // Java treats 'numbers' as an int array
        for (int n : numbers) {
            total += n;
        }
        System.out.println("Count of numbers: " + numbers.length);
        return total;
    }
    
    // Mixed: regular param + varargs (varargs must be LAST)
    public static void printAll(String prefix, int... values) {
        System.out.print(prefix + ": ");
        for (int v : values) {
            System.out.print(v + " ");
        }
        System.out.println();
    }
    
    // Varargs with double
    public static double average(double... nums) {
        if (nums.length == 0) return 0;
        double total = 0;
        for (double n : nums) total += n;
        return total / nums.length;
    }
    
    public static void main(String[] args) {
        System.out.println(sum());           // 0 — no args = empty array
        System.out.println(sum(5));          // 5
        System.out.println(sum(1, 2, 3));    // 6
        System.out.println(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
        
        printAll("Values", 10, 20, 30);      // Values: 10 20 30
        printAll("Scores", 95, 87, 92, 88);  // Scores: 95 87 92 88
        
        System.out.println(average(80, 90, 85, 92)); // 86.75
    }
}`
      }
    ]
  },
  {
    id: 3,
    title: "Arrays & Sorting",
    emoji: "📊",
    color: "#A855F7",
    sections: [
      {
        title: "What is an Array?",
        theory: `An array is a CONTAINER that holds MULTIPLE VALUES of the SAME TYPE in a single variable. Think of it as a row of numbered boxes — each box holds one value, and each box has a number (called an index) starting from 0.

WHY arrays?
Without arrays: int num1, num2, num3, num4, num5 — terrible for 100 numbers!
With arrays: int[] nums = new int[100] — done!

KEY PROPERTIES:
• Fixed size — you set the size when creating, can't change it later
• Zero-indexed — first element is at index 0, not 1!
• Homogeneous — all elements must be the same type
• Stored in contiguous memory — elements are right next to each other in RAM

ARRAY INDEX:
If array has 5 elements:
Valid indices: 0, 1, 2, 3, 4
Last valid index is ALWAYS: array.length - 1
Accessing arr[5] on a size-5 array = ArrayIndexOutOfBoundsException (a very common beginner bug!)

2D ARRAYS:
An array of arrays. Like a grid or table. int[row][column]
matrix[0][0] is top-left, matrix[2][2] is bottom-right (for 3x3)`,
        code: `import java.util.Arrays;

public class ArraysDemo {
    public static void main(String[] args) {
        
        // ===== CREATING ARRAYS =====
        
        // Method 1: declare size, fill later (defaults to 0)
        int[] arr1 = new int[5];    // [0, 0, 0, 0, 0]
        arr1[0] = 10;               // assign values by index
        arr1[1] = 20;
        arr1[4] = 50;               // [10, 20, 0, 0, 50]
        
        // Method 2: declare and initialize at once
        int[] arr2 = {5, 10, 15, 20, 25};
        
        // Method 3: using new with values
        String[] names = new String[]{"Alice", "Bob", "Charlie"};
        
        // ===== ACCESSING ELEMENTS =====
        System.out.println(arr2[0]);              // 5  (FIRST element)
        System.out.println(arr2[4]);              // 25 (LAST element)
        System.out.println(arr2[arr2.length - 1]); // 25 (always the last)
        System.out.println(arr2.length);          // 5  (NOT an index! just count)
        
        // ===== MODIFYING =====
        arr2[2] = 99;  // changes 15 to 99
        System.out.println(arr2[2]); // 99
        
        // ===== PRINTING ARRAYS =====
        // Method 1: loop
        for (int i = 0; i < arr2.length; i++) {
            System.out.print(arr2[i] + " ");
        }
        System.out.println();
        
        // Method 2: enhanced for loop
        for (int num : arr2) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        // Method 3: Arrays.toString() — easiest!
        System.out.println(Arrays.toString(arr2)); // [5, 10, 99, 20, 25]
        
        // ===== 2D ARRAYS =====
        int[][] matrix = {
            {1, 2, 3},   // row 0
            {4, 5, 6},   // row 1
            {7, 8, 9}    // row 2
        };
        
        System.out.println(matrix[1][2]); // 6 (row 1, column 2)
        System.out.println(matrix.length); // 3 (number of rows)
        System.out.println(matrix[0].length); // 3 (number of columns)
        
        // Print 2D array
        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }
        
        // ===== USEFUL ARRAY METHODS =====
        int[] nums = {5, 3, 8, 1, 9, 2};
        Arrays.sort(nums);                      // sorts in place
        System.out.println(Arrays.toString(nums)); // [1, 2, 3, 5, 8, 9]
        
        int idx = Arrays.binarySearch(nums, 5); // must be sorted first!
        System.out.println("5 is at index: " + idx); // 3
        
        int[] copy = Arrays.copyOf(nums, nums.length); // copy array
        int[] partial = Arrays.copyOfRange(nums, 1, 4); // copy index 1 to 3
        System.out.println(Arrays.toString(partial)); // [2, 3, 5]
        
        Arrays.fill(copy, 0); // fill all with 0
        System.out.println(Arrays.toString(copy)); // [0, 0, 0, 0, 0, 0]
    }
}`
      },
      {
        title: "Searching — Linear & Binary Search",
        theory: `Searching means finding WHERE a specific value is in an array (returning its index).

LINEAR SEARCH — O(n):
The simplest approach. Go through every element one by one from the start.
• Works on ANY array (sorted or unsorted)
• In the WORST case, you check every element (if target is last or not present)
• If array has 1 million elements, worst case = 1 million comparisons
• Simple but SLOW for large arrays

BINARY SEARCH — O(log n):
The SMART approach. Only works on SORTED arrays!
Think of searching for a word in a dictionary:
• Open the middle — is your word before or after this page?
• If before, throw away the right half
• If after, throw away the left half
• Repeat until found!

With 1 million elements, binary search needs at most log2(1,000,000) ≈ 20 comparisons!
Compare: linear needs up to 1,000,000 comparisons!

WHY mid = left + (right-left)/2 and not (left+right)/2?
If left = 1,000,000,000 and right = 1,500,000,000, then left+right overflows int!
left + (right-left)/2 is equivalent but SAFE from overflow.`,
        code: `public class Searching {
    
    // ===== LINEAR SEARCH ===== O(n)
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // FOUND! return the index
            }
        }
        return -1; // NOT found (convention: return -1)
    }
    
    // Linear search works for ANY array, even unsorted
    // Also works for non-integer types
    public static int findName(String[] names, String target) {
        for (int i = 0; i < names.length; i++) {
            if (names[i].equals(target)) { // use .equals() for Strings!
                return i;
            }
        }
        return -1;
    }
    
    // ===== BINARY SEARCH ===== O(log n) — ARRAY MUST BE SORTED!
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            // Find middle index safely (avoids integer overflow)
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid; // FOUND!
            } else if (arr[mid] < target) {
                // Target is in the RIGHT half
                left = mid + 1; // throw away left half
            } else {
                // Target is in the LEFT half
                right = mid - 1; // throw away right half
            }
        }
        return -1; // NOT found
    }
    
    public static void main(String[] args) {
        int[] unsorted = {5, 3, 8, 1, 9, 2, 7};
        int[] sorted = {1, 2, 3, 5, 7, 8, 9};
        
        // Linear search — works on unsorted
        System.out.println(linearSearch(unsorted, 8)); // 2 (index)
        System.out.println(linearSearch(unsorted, 6)); // -1 (not found)
        
        // Binary search — MUST be sorted
        System.out.println(binarySearch(sorted, 5)); // 3 (index)
        System.out.println(binarySearch(sorted, 6)); // -1 (not found)
        
        // Java's built-in binary search
        System.out.println(java.util.Arrays.binarySearch(sorted, 7)); // 4
        
        String[] names = {"Alice", "Bob", "Charlie", "David"};
        System.out.println(findName(names, "Charlie")); // 2
        System.out.println(findName(names, "Eve"));     // -1
    }
}`
      },
      {
        title: "Sorting Algorithms",
        theory: `Sorting means arranging elements in order (usually ascending). There are many ways to sort — each with different speeds and approaches.

BUBBLE SORT — O(n²):
Compare adjacent pairs and swap if they're in wrong order. The largest element "bubbles up" to the end in each pass. Simple to understand but very slow for large arrays.

SELECTION SORT — O(n²):
Find the SMALLEST element and put it at the front. Then find the 2nd smallest and put it in position 2. Repeat. Makes exactly n-1 swaps (useful when writes are expensive).

INSERTION SORT — O(n²) worst, O(n) best:
Like sorting playing cards. Start with one card. Pick next card and INSERT it in the correct position among already-sorted cards. VERY efficient for nearly-sorted arrays!

MERGE SORT — O(n log n) always:
Divide and Conquer! Split array in half, sort each half recursively, merge them back together. GUARANTEED O(n log n) — never goes to O(n²)! Requires extra O(n) space.

QUICK SORT — O(n log n) average, O(n²) worst:
Pick a "pivot" element, put smaller elements left, larger elements right (partition). Then recursively sort both sides. Average case is very fast, but worst case (already sorted array with bad pivot) is O(n²).

CYCLIC SORT — O(n):
Genius algorithm for arrays with numbers 1 to N! Each number should be at index (number-1). If a number isn't at its correct index, swap it to where it belongs. Used to find missing numbers, duplicates.`,
        code: `import java.util.Arrays;

public class Sorting {
    
    // ===== BUBBLE SORT ===== O(n²)
    // Each pass bubbles the largest element to the end
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {       // n-1 passes
            boolean swapped = false;
            for (int j = 0; j < n - 1 - i; j++) { // -i because last i elements are sorted
                if (arr[j] > arr[j + 1]) {
                    // Swap adjacent elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // OPTIMIZATION: no swaps = already sorted, stop early!
        }
    }
    // Trace: [5,3,1,4,2]
    // Pass 1: [3,1,4,2,5] (5 bubbled to end)
    // Pass 2: [1,3,2,4,5] (4 bubbled)
    // Pass 3: [1,2,3,4,5] (3 bubbled) → done!
    
    // ===== SELECTION SORT ===== O(n²)
    // Find minimum, place at front. Repeat.
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i; // assume current position has minimum
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; // found a smaller element
                }
            }
            // Swap minimum to position i
            if (minIndex != i) {
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
    }
    
    // ===== INSERTION SORT ===== O(n²) but fast for nearly-sorted
    // Like sorting cards in your hand
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];  // the card we're inserting
            int j = i - 1;
            // Shift all elements greater than 'key' one position to the right
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key; // insert key at correct position
        }
    }
    // Trace: [5,3,1,4,2]
    // i=1: key=3, shift 5 right → [3,5,1,4,2]
    // i=2: key=1, shift 5,3 right → [1,3,5,4,2]
    // i=3: key=4, shift 5 right → [1,3,4,5,2]
    // i=4: key=2, shift 5,4,3 right → [1,2,3,4,5]
    
    // ===== MERGE SORT ===== O(n log n) — Divide and Conquer
    public static void mergeSort(int[] arr, int left, int right) {
        if (left >= right) return; // base case: single element, already sorted
        
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);        // sort left half
        mergeSort(arr, mid + 1, right);   // sort right half
        merge(arr, left, mid, right);     // merge both sorted halves
    }
    
    private static void merge(int[] arr, int left, int mid, int right) {
        // Create temporary arrays for left and right halves
        int n1 = mid - left + 1;
        int n2 = right - mid;
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        // Copy data to temp arrays
        for (int i = 0; i < n1; i++) L[i] = arr[left + i];
        for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
        
        // Merge: compare L[i] and R[j], put smaller back into arr
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) { arr[k++] = L[i++]; }
            else               { arr[k++] = R[j++]; }
        }
        // Copy remaining elements (one of the halves might have leftovers)
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
    
    // ===== CYCLIC SORT ===== O(n) — for arrays with numbers 1 to N
    // Key insight: number X belongs at index (X-1)
    public static void cyclicSort(int[] arr) {
        int i = 0;
        while (i < arr.length) {
            int correctIndex = arr[i] - 1; // where arr[i] SHOULD be
            if (arr[i] != arr[correctIndex]) {
                // This element is NOT at its correct position, swap it there
                int temp = arr[i];
                arr[i] = arr[correctIndex];
                arr[correctIndex] = temp;
                // Don't increment i — check again, a new element is at position i now
            } else {
                i++; // element is at correct position, move on
            }
        }
    }
    
    // Find missing number using cyclic sort (classic interview question!)
    public static int findMissing(int[] nums) {
        cyclicSort(nums);
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) return i + 1; // this index has wrong number!
        }
        return nums.length + 1; // if all 1..n present, n+1 is missing
    }
    
    public static void main(String[] args) {
        int[] arr1 = {5, 3, 1, 4, 2};
        bubbleSort(arr1);
        System.out.println("Bubble: " + Arrays.toString(arr1));
        
        int[] arr2 = {5, 3, 1, 4, 2};
        selectionSort(arr2);
        System.out.println("Selection: " + Arrays.toString(arr2));
        
        int[] arr3 = {5, 3, 1, 4, 2};
        insertionSort(arr3);
        System.out.println("Insertion: " + Arrays.toString(arr3));
        
        int[] arr4 = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr4, 0, arr4.length - 1);
        System.out.println("Merge: " + Arrays.toString(arr4));
        
        int[] cyclic = {3, 1, 5, 4, 2};
        cyclicSort(cyclic);
        System.out.println("Cyclic: " + Arrays.toString(cyclic)); // [1,2,3,4,5]
        
        int[] withMissing = {3, 1, 4, 2, 6}; // missing 5
        System.out.println("Missing: " + findMissing(withMissing)); // 5
    }
}`
      }
    ]
  },
  {
    id: 4,
    title: "Strings in Java",
    emoji: "🔤",
    color: "#F59E0B",
    sections: [
      {
        title: "How Strings Work — Immutability & String Pool",
        theory: `A String in Java is a SEQUENCE OF CHARACTERS. "Hello" is 5 characters. Strings are one of the most used types in Java, so understanding them deeply is crucial!

STRINGS ARE OBJECTS, NOT PRIMITIVES:
Unlike int, double, etc., String is a class. When you write String name = "Bhavya", you're creating an object!

IMMUTABILITY — The most important String concept:
Once a String is created, it CANNOT be changed. If you do:
String s = "Hello";
s = s + " World";

Java doesn't modify the original "Hello" string. It creates a BRAND NEW string "Hello World" and makes 's' point to it. The old "Hello" becomes garbage!

This is why concatenating strings in a loop is VERY slow — it creates thousands of objects!

STRING POOL — How Java optimizes memory:
Java keeps a special area of memory called the "String Pool" (or String Intern Pool). When you write String s = "Hello", Java first checks if "Hello" already exists in the pool. If yes, it reuses the same object! If no, it adds it.

String s1 = "Hello"; // stored in pool
String s2 = "Hello"; // reuses SAME pool object
s1 == s2 // true! Same object reference

String s3 = new String("Hello"); // forces creation of NEW object in heap
s1 == s3 // false! Different objects

ALWAYS USE .equals() TO COMPARE STRINGS!
== checks if two variables point to the SAME OBJECT (reference equality)
.equals() checks if the CONTENT is the same (value equality)`,
        code: `public class StringsDemo {
    public static void main(String[] args) {
        
        // ===== STRING POOL =====
        String s1 = "Hello"; // goes to String Pool
        String s2 = "Hello"; // reuses same pool object
        String s3 = new String("Hello"); // forces NEW heap object
        
        System.out.println(s1 == s2);      // true  (same pool reference)
        System.out.println(s1 == s3);      // false (different objects)
        System.out.println(s1.equals(s2)); // true  (same content) ✅
        System.out.println(s1.equals(s3)); // true  (same content) ✅
        
        // ===== IMMUTABILITY DEMO =====
        String original = "Hello";
        String modified = original.toUpperCase(); // creates NEW string
        System.out.println(original);  // "Hello" — UNCHANGED!
        System.out.println(modified);  // "HELLO"
        
        String name = "Java";
        name = name + " is fun"; // doesn't modify "Java", creates new String
        System.out.println(name); // "Java is fun"
        
        // ===== ALL COMMON STRING METHODS =====
        String s = "Hello, World!";
        
        // Length and access
        System.out.println(s.length());         // 13
        System.out.println(s.charAt(0));         // 'H'
        System.out.println(s.charAt(s.length()-1)); // '!'
        
        // Searching
        System.out.println(s.indexOf("World"));      // 7 (first occurrence)
        System.out.println(s.indexOf('l'));           // 2 (first 'l')
        System.out.println(s.lastIndexOf('l'));       // 10 (last 'l')
        System.out.println(s.contains("World"));     // true
        System.out.println(s.startsWith("Hello"));   // true
        System.out.println(s.endsWith("!"));         // true
        
        // Substrings
        System.out.println(s.substring(7));        // "World!"
        System.out.println(s.substring(7, 12));    // "World" (7 inclusive, 12 exclusive)
        
        // Case
        System.out.println(s.toLowerCase()); // "hello, world!"
        System.out.println(s.toUpperCase()); // "HELLO, WORLD!"
        
        // Cleaning
        String messy = "  hello  ";
        System.out.println(messy.trim());  // "hello" (removes leading/trailing spaces)
        System.out.println(messy.strip()); // "hello" (same but unicode-aware)
        
        // Replace
        System.out.println(s.replace("World", "Java")); // "Hello, Java!"
        System.out.println(s.replace('l', 'x'));         // "Hexxo, Worxd!"
        
        // Split
        String csv = "apple,banana,cherry,dates";
        String[] fruits = csv.split(",");
        for (String f : fruits) System.out.print(f + " "); // apple banana cherry dates
        
        // Join
        String joined = String.join(" - ", "a", "b", "c"); // "a - b - c"
        System.out.println(joined);
        
        // Empty and blank checks
        System.out.println("".isEmpty());    // true
        System.out.println("   ".isEmpty()); // false (has spaces)
        System.out.println("   ".isBlank()); // true (all whitespace)
        
        // Type conversions
        String fromInt = String.valueOf(42);     // int → String: "42"
        String fromDouble = String.valueOf(3.14); // double → String: "3.14"
        int backToInt = Integer.parseInt("42");   // String → int: 42
        double backToDouble = Double.parseDouble("3.14"); // String → double
        char[] charArray = s.toCharArray();       // String → char[]
        
        // Compare (case-insensitive)
        System.out.println("hello".equalsIgnoreCase("HELLO")); // true
        System.out.println("apple".compareTo("banana")); // negative (apple < banana)
    }
}`
      },
      {
        title: "StringBuilder — Efficient String Building",
        theory: `Since String is immutable, doing repeated concatenation in a loop creates THOUSANDS of new String objects, making your code VERY slow.

Example of the problem:
String result = "";
for (int i = 0; i < 10000; i++) {
    result = result + i; // creates 10000 new String objects!
}
At each step, Java creates a brand new String by copying everything. For 10000 iterations, that's roughly 10000 copy operations — O(n²) time!

StringBuilder solves this:
StringBuilder is MUTABLE — it can be changed in place! It uses an internal char array and only reallocates when needed. Building a String with StringBuilder is O(n) instead of O(n²).

StringBuilder vs StringBuffer:
• StringBuilder — NOT thread-safe, but FASTER. Use this 99% of the time.
• StringBuffer — Thread-safe (synchronized), slightly slower. Use when multiple threads modify the same string.

For interviews: Always use StringBuilder for String manipulation in loops!`,
        code: `public class StringBuilderDemo {
    public static void main(String[] args) {
        
        // ===== BASIC OPERATIONS =====
        StringBuilder sb = new StringBuilder();
        
        sb.append("Hello");           // "Hello"
        sb.append(", ");              // "Hello, "
        sb.append("World");           // "Hello, World"
        sb.append("!");               // "Hello, World!"
        sb.append(42);               // "Hello, World!42" — can append ints too
        System.out.println(sb);      // prints "Hello, World!42"
        System.out.println(sb.length()); // 14
        
        // Insert at specific position
        sb.insert(12, " from Java"); // inserts at index 12
        System.out.println(sb);      // "Hello, World from Java!42"
        
        // Delete a range (from index, to index exclusive)
        sb.delete(12, 22); // removes " from Java"
        System.out.println(sb); // "Hello, World!42"
        
        // Replace a range
        sb.replace(7, 12, "Java"); // replaces "World" with "Java"
        System.out.println(sb); // "Hello, Java!42"
        
        // Reverse (very useful in interviews!)
        StringBuilder rev = new StringBuilder("abcde");
        rev.reverse();
        System.out.println(rev); // "edcba"
        
        // Get character at index
        System.out.println(sb.charAt(0)); // 'H'
        
        // Convert back to String
        String finalString = sb.toString();
        System.out.println(finalString);
        
        // ===== PERFORMANCE COMPARISON =====
        long start1 = System.currentTimeMillis();
        String s = "";
        for (int i = 0; i < 50000; i++) {
            s += i; // BAD: creates 50000 String objects!
        }
        long end1 = System.currentTimeMillis();
        System.out.println("String concat: " + (end1 - start1) + "ms");
        
        long start2 = System.currentTimeMillis();
        StringBuilder sbFast = new StringBuilder();
        for (int i = 0; i < 50000; i++) {
            sbFast.append(i); // GOOD: modifies same object
        }
        String result = sbFast.toString();
        long end2 = System.currentTimeMillis();
        System.out.println("StringBuilder: " + (end2 - start2) + "ms");
        // StringBuilder is MANY times faster!
        
        // ===== COMMON INTERVIEW PATTERNS =====
        // Reverse words in a sentence
        String sentence = "Hello World Java";
        String[] words = sentence.split(" ");
        StringBuilder reversed = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]);
            if (i > 0) reversed.append(" ");
        }
        System.out.println(reversed); // "Java World Hello"
        
        // Check if palindrome
        String word = "racecar";
        String reversedWord = new StringBuilder(word).reverse().toString();
        System.out.println(word.equals(reversedWord) ? "Palindrome" : "Not palindrome");
    }
}`
      }
    ]
  },
  {
    id: 5,
    title: "Recursion & Backtracking",
    emoji: "🔄",
    color: "#EC4899",
    sections: [
      {
        title: "What is Recursion?",
        theory: `Recursion is when a function calls ITSELF to solve a SMALLER version of the same problem. It's one of the most powerful — and most confusing — concepts in programming. Let's make it crystal clear.

THE RUSSIAN DOLLS ANALOGY:
Imagine Russian dolls (Matryoshka). To open the innermost one:
1. Open the outermost doll → inside is a smaller version of the same problem
2. Open that smaller doll → inside is an even smaller version
3. Keep going until you reach the tiniest doll (base case)
4. Then close them all back up (return values travel back up)

EVERY recursive function MUST have:
1. BASE CASE — When to STOP. Without this → function calls itself FOREVER → StackOverflowError (call stack fills up and crashes)
2. RECURSIVE CASE — Calls itself with a SMALLER input (must make progress toward base case)

THE CALL STACK:
When a function calls itself, a new frame is pushed onto the call stack. Each frame holds that call's variables. When base case is reached, frames pop off one by one, returning values up the chain.

WHEN TO USE RECURSION:
• Problems that can be broken into smaller identical subproblems
• Tree/graph traversal
• Divide and conquer algorithms
• When the recursive solution is much cleaner than iterative

RECURSION vs ITERATION:
Anything you can do with recursion, you can do with loops (and vice versa). Recursion is often CLEANER but uses more memory (call stack frames). Sometimes a loop is faster. Choose based on clarity.`,
        code: `public class Recursion {
    
    // ===== FACTORIAL ===== n! = n × (n-1) × (n-2) × ... × 1
    // factorial(5) = 5 × 4 × 3 × 2 × 1 = 120
    public static int factorial(int n) {
        // BASE CASE: stop when n reaches 0
        if (n == 0) return 1; // 0! = 1 by definition
        
        // RECURSIVE CASE: n! = n × (n-1)!
        return n * factorial(n - 1);
    }
    // TRACE for factorial(4):
    // factorial(4) → 4 × factorial(3)
    //                    → 3 × factorial(2)
    //                        → 2 × factorial(1)
    //                            → 1 × factorial(0)
    //                                → returns 1  ← base case!
    //                            → 1 × 1 = 1
    //                        → 2 × 1 = 2
    //                    → 3 × 2 = 6
    // → 4 × 6 = 24
    
    // ===== FIBONACCI ===== 0,1,1,2,3,5,8,13,21...
    // fib(n) = fib(n-1) + fib(n-2)
    public static int fibonacci(int n) {
        if (n <= 1) return n; // BASE CASE: fib(0)=0, fib(1)=1
        return fibonacci(n - 1) + fibonacci(n - 2); // RECURSIVE CASE
    }
    // Note: This is O(2^n) — very slow! We fix this with Dynamic Programming later.
    
    // ===== SUM OF DIGITS =====
    // sumDigits(123) = 3 + sumDigits(12) = 3 + 2 + sumDigits(1) = 3+2+1 = 6
    public static int sumOfDigits(int n) {
        if (n == 0) return 0;          // BASE CASE
        return (n % 10) + sumOfDigits(n / 10); // last digit + rest
    }
    
    // ===== POWER ===== x^n
    public static long power(int x, int n) {
        if (n == 0) return 1;           // BASE CASE: anything^0 = 1
        return x * power(x, n - 1);    // x^n = x × x^(n-1)
    }
    
    // FAST POWER using exponentiation by squaring — O(log n)
    public static long fastPower(int x, int n) {
        if (n == 0) return 1;
        if (n % 2 == 0) {
            long half = fastPower(x, n / 2);
            return half * half; // x^n = (x^(n/2))^2
        } else {
            return x * fastPower(x, n - 1);
        }
    }
    
    // ===== BINARY SEARCH (recursive version) =====
    public static int binarySearch(int[] arr, int left, int right, int target) {
        if (left > right) return -1; // BASE CASE: not found
        
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;   // BASE CASE: found!
        
        if (arr[mid] < target)
            return binarySearch(arr, mid + 1, right, target); // search right
        else
            return binarySearch(arr, left, mid - 1, target);  // search left
    }
    
    // ===== PRINT 1 to N recursively =====
    public static void printUpTo(int n) {
        if (n == 0) return;     // BASE CASE
        printUpTo(n - 1);       // RECURSIVE CALL (print smaller ones first)
        System.out.print(n + " "); // print after recursive call = ascending order
    }
    // If we printed BEFORE the recursive call, we'd get descending order!
    
    public static void main(String[] args) {
        System.out.println(factorial(5));    // 120
        System.out.println(fibonacci(8));    // 21
        System.out.println(sumOfDigits(456)); // 15
        System.out.println(power(2, 10));    // 1024
        System.out.println(fastPower(2, 10)); // 1024
        
        int[] sorted = {1, 3, 5, 7, 9, 11};
        System.out.println(binarySearch(sorted, 0, sorted.length-1, 7)); // 3
        
        printUpTo(5); // 1 2 3 4 5
    }
}`
      },
      {
        title: "Backtracking",
        theory: `Backtracking is recursion with an UNDO step. It's a systematic way of trying all possibilities.

The pattern is:
1. Make a CHOICE (e.g., place a queen at column 3)
2. EXPLORE further with that choice (recursively try next row)
3. If it leads to a dead end → UNDO the choice (remove the queen)
4. Try the NEXT option

Think of it like solving a maze:
• Try going RIGHT → hit a wall? BACKTRACK
• Try going UP → hit a wall? BACKTRACK
• Try going LEFT → success! Continue...

WHEN TO USE BACKTRACKING:
• Generating all permutations/combinations
• Solving puzzles (Sudoku, N-Queens, Maze)
• Finding all possible paths
• Constraint satisfaction problems

THE KEY TEMPLATE:
void backtrack(state) {
    if (goal reached) { save solution; return; }
    for (each choice) {
        if (choice is valid) {
            make choice;
            backtrack(new state);  // recurse
            undo choice;           // BACKTRACK
        }
    }
}`,
        code: `import java.util.*;

public class Backtracking {
    
    // ===== N-QUEENS PROBLEM =====
    // Place N queens on NxN board so none attack each other
    // Queens attack same row, column, or diagonal
    
    static int queensSolutions = 0;
    
    public static void solveNQueens(boolean[][] board, int row) {
        int n = board.length;
        
        // BASE CASE: successfully placed all queens!
        if (row == n) {
            queensSolutions++;
            printBoard(board);
            return;
        }
        
        // Try placing queen in each column of current row
        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = true;        // PLACE the queen
                solveNQueens(board, row + 1);  // recurse to next row
                board[row][col] = false;       // UNDO (backtrack)
            }
        }
    }
    
    private static boolean isSafe(boolean[][] board, int row, int col) {
        int n = board.length;
        // Check column above this position
        for (int i = 0; i < row; i++)
            if (board[i][col]) return false;
        
        // Check upper-left diagonal
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
            if (board[i][j]) return false;
        
        // Check upper-right diagonal
        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
            if (board[i][j]) return false;
        
        return true; // safe to place queen here!
    }
    
    private static void printBoard(boolean[][] board) {
        for (boolean[] row : board) {
            for (boolean cell : row)
                System.out.print(cell ? " Q " : " . ");
            System.out.println();
        }
        System.out.println();
    }
    
    // ===== GENERATE ALL PERMUTATIONS =====
    // Permutations of [1,2,3]: [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]
    public static void permutations(int[] arr, int start) {
        if (start == arr.length) { // base case: all positions filled
            System.out.println(Arrays.toString(arr));
            return;
        }
        for (int i = start; i < arr.length; i++) {
            swap(arr, start, i);         // CHOOSE: put element i at position start
            permutations(arr, start + 1); // EXPLORE: fill remaining positions
            swap(arr, start, i);         // UNDO: restore original order
        }
    }
    
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
    }
    
    // ===== GENERATE ALL SUBSETS =====
    // Subsets of [1,2,3]: [],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]
    public static void subsets(int[] arr, int index, List<Integer> current) {
        // At each index, we have 2 choices: include or exclude
        if (index == arr.length) { // base case: processed all elements
            System.out.println(current);
            return;
        }
        // CHOICE 1: Include arr[index]
        current.add(arr[index]);
        subsets(arr, index + 1, current);   // explore with this element
        current.remove(current.size() - 1); // UNDO (backtrack)
        
        // CHOICE 2: Exclude arr[index]
        subsets(arr, index + 1, current);   // explore without this element
    }
    
    public static void main(String[] args) {
        // N-Queens for 4x4 board
        System.out.println("=== 4-Queens Solutions ===");
        boolean[][] board = new boolean[4][4];
        solveNQueens(board, 0);
        System.out.println("Total solutions: " + queensSolutions);
        
        // Permutations
        System.out.println("=== Permutations of [1,2,3] ===");
        permutations(new int[]{1, 2, 3}, 0);
        
        // Subsets
        System.out.println("=== Subsets of [1,2,3] ===");
        subsets(new int[]{1, 2, 3}, 0, new ArrayList<>());
    }
}`
      }
    ]
  },
  {
    id: 6,
    title: "OOP — Object-Oriented Programming",
    emoji: "🏗️",
    color: "#10B981",
    sections: [
      {
        title: "Classes, Objects & Constructors",
        theory: `Object-Oriented Programming (OOP) is a way of organizing code by modeling real-world things as "objects." It's the foundation of Java — everything in Java is inside a class!

CLASS — The Blueprint:
A class is like an architectural blueprint for a house. The blueprint isn't a house itself — it just describes what a house looks like. Similarly, a class describes what objects of that type will look like.

OBJECT — The Real Thing:
An object is an INSTANCE of a class — a real thing created from the blueprint. You can create multiple objects from one class, just like you can build multiple houses from one blueprint.

FIELDS (Instance Variables):
These are the "properties" or "attributes" of an object. Each object has its own copy of these. A Car object has brand, color, speed. Another Car object has different values for brand, color, speed.

METHODS:
These are the "behaviors" or "actions" an object can do. A Car can accelerate(), brake(), honk().

CONSTRUCTOR:
A special method called AUTOMATICALLY when you use "new" to create an object. Its job is to INITIALIZE the object's fields. It has the same name as the class and NO return type.

• Default constructor — takes no parameters, provided by Java if you write none
• Parameterized constructor — takes parameters to set initial values
• "this" keyword refers to the CURRENT object

THE "this" KEYWORD:
Inside a method or constructor, "this" means "the current object I'm being called on." It's needed when a parameter has the same name as a field (disambiguation).`,
        code: `public class OOPDemo {
    
    // ===== DEFINING A CLASS =====
    static class Student {
        // FIELDS (instance variables) — each object gets its own copy
        String name;
        int age;
        double gpa;
        static int totalStudents = 0; // STATIC field — shared by ALL objects
        
        // CONSTRUCTOR — called when we do: new Student(...)
        public Student(String name, int age, double gpa) {
            // 'this.name' = the field, 'name' = the parameter
            this.name = name;   // assign parameter to field
            this.age = age;
            this.gpa = gpa;
            totalStudents++; // increment shared counter
        }
        
        // CONSTRUCTOR OVERLOADING — different ways to create a student
        public Student(String name) {
            this.name = name;
            this.age = 18; // default age
            this.gpa = 0.0; // default gpa
            totalStudents++;
        }
        
        // INSTANCE METHODS — behaviors of a Student
        public void study() {
            System.out.println(name + " is studying!");
        }
        
        public void introduce() {
            System.out.println("Hi! I'm " + name + ", age " + age + 
                               ", GPA: " + gpa);
        }
        
        public boolean isHonorRoll() {
            return gpa >= 3.5;
        }
        
        // GETTER — controlled access to private field
        public String getName() { return name; }
        
        // SETTER — controlled modification with validation
        public void setGpa(double gpa) {
            if (gpa >= 0.0 && gpa <= 4.0) {
                this.gpa = gpa;
            } else {
                System.out.println("Invalid GPA! Must be 0.0 to 4.0");
            }
        }
        
        // toString() — called when you print an object
        @Override
        public String toString() {
            return "Student{name=" + name + ", age=" + age + ", gpa=" + gpa + "}";
        }
    }
    
    public static void main(String[] args) {
        // CREATING OBJECTS (instances)
        Student s1 = new Student("Bhavya", 20, 3.8);
        Student s2 = new Student("Ravi", 21, 3.2);
        Student s3 = new Student("Priya"); // uses 2nd constructor
        
        // CALLING METHODS
        s1.introduce(); // Hi! I'm Bhavya, age 20, GPA: 3.8
        s2.study();     // Ravi is studying!
        
        System.out.println(s1.isHonorRoll()); // true (3.8 >= 3.5)
        System.out.println(s2.isHonorRoll()); // false (3.2 < 3.5)
        
        // MODIFYING through setter (with validation)
        s3.setGpa(5.0);  // Invalid GPA! error message
        s3.setGpa(3.6);  // valid
        
        // STATIC field — shared by all, access via class name
        System.out.println("Total students: " + Student.totalStudents); // 3
        
        // toString() called automatically when printing
        System.out.println(s1); // Student{name=Bhavya, age=20, gpa=3.8}
    }
}`
      },
      {
        title: "The 4 Pillars of OOP",
        theory: `OOP has four fundamental principles. Every Java interview will ask about these. Know them cold!

1. ENCAPSULATION — "Hide data, expose behavior"
Make fields PRIVATE. Only allow access through PUBLIC methods (getters/setters). This protects data from being corrupted. Like a capsule — the medicine (data) is protected inside.

Why? If balance in a BankAccount was public, anyone could write: account.balance = -999999. With encapsulation, you control how balance is changed through deposit/withdraw methods.

2. INHERITANCE — "Child inherits from Parent"
A child class extends a parent class and gets ALL its fields and methods for free! Use "extends" keyword. Use "super" to call parent's constructor or methods.

Why? Avoids code duplication. Dog, Cat, Bird all share eat(), sleep() from Animal. Write once, inherit everywhere.

3. POLYMORPHISM — "One interface, many implementations"
Same method name, different behavior depending on the actual object type. "poly" = many, "morph" = form.
• Method Overriding (Runtime polymorphism): Child class redefines parent's method with @Override
• Method Overloading (Compile-time polymorphism): Same name, different parameters

Why? You can write code that works with the parent type but behaves differently for each child. Animal a = new Dog(); a.sound() calls Dog's version automatically!

4. ABSTRACTION — "Show only what's necessary"
Hide implementation details, show only the interface. Abstract classes and Interfaces are the tools.
• Abstract class: has abstract methods (no body) + can have regular methods. Can't be instantiated.
• Interface: pure contract — only method signatures (no implementation). A class "implements" an interface.

Why? Users of your code don't need to know HOW it works, just WHAT it does.`,
        code: `// ===== ENCAPSULATION =====
class BankAccount {
    private double balance;     // PRIVATE — can't access directly from outside
    private String accountNo;
    
    public BankAccount(String accountNo, double initialBalance) {
        this.accountNo = accountNo;
        this.balance = initialBalance;
    }
    
    public double getBalance() { return balance; } // GETTER
    
    public void deposit(double amount) { // SETTER with validation
        if (amount > 0) balance += amount;
        else System.out.println("Deposit amount must be positive!");
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) balance -= amount;
        else System.out.println("Insufficient funds or invalid amount!");
    }
}

// ===== INHERITANCE =====
class Animal {
    String name;
    int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat()   { System.out.println(name + " is eating"); }
    public void sleep() { System.out.println(name + " is sleeping"); }
    public String toString() { return name + " (age " + age + ")"; }
}

class Dog extends Animal {    // Dog INHERITS from Animal
    String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age); // MUST call parent constructor first!
        this.breed = breed;
    }
    
    public void bark() { System.out.println(name + " says: Woof!"); }
    
    @Override // POLYMORPHISM — Dog has its own version of toString
    public String toString() {
        return super.toString() + " [" + breed + "]";
    }
}

class Cat extends Animal {
    public Cat(String name, int age) { super(name, age); }
    public void meow() { System.out.println(name + " says: Meow!"); }
}

// ===== POLYMORPHISM =====
class Shape {
    public double area() { return 0; } // default
    public void describe() {
        System.out.println("Area: " + area()); // calls overridden version!
    }
}

class Circle extends Shape {
    double radius;
    Circle(double r) { this.radius = r; }
    
    @Override
    public double area() {
        return Math.PI * radius * radius; // overrides parent method
    }
}

class Rectangle extends Shape {
    double width, height;
    Rectangle(double w, double h) { this.width = w; this.height = h; }
    
    @Override
    public double area() { return width * height; }
}

// ===== ABSTRACTION =====
abstract class Vehicle {  // abstract — cannot instantiate directly
    String brand;
    abstract void start(); // MUST be implemented by subclass
    abstract void stop();  // MUST be implemented by subclass
    
    public void info() {   // regular method — inherited as is
        System.out.println("Brand: " + brand);
    }
}

interface Chargeable {         // interface — pure contract
    void charge();             // all methods abstract by default
    default void checkCharge() { // default methods (Java 8+)
        System.out.println("Checking charge level...");
    }
}

class ElectricCar extends Vehicle implements Chargeable {
    ElectricCar(String brand) { this.brand = brand; }
    
    @Override public void start() { System.out.println(brand + " quietly starts"); }
    @Override public void stop()  { System.out.println(brand + " stops"); }
    @Override public void charge(){ System.out.println(brand + " is charging"); }
}

public class OOPPillars {
    public static void main(String[] args) {
        // Encapsulation
        BankAccount acc = new BankAccount("ACC001", 1000);
        acc.deposit(500);
        acc.withdraw(200);
        System.out.println("Balance: " + acc.getBalance()); // 1300
        // acc.balance = -999; // ❌ ERROR — balance is private!
        
        // Inheritance
        Dog dog = new Dog("Bruno", 3, "Labrador");
        dog.eat();    // inherited from Animal
        dog.sleep();  // inherited from Animal
        dog.bark();   // Dog's own method
        System.out.println(dog); // Bruno (age 3) [Labrador]
        
        // Polymorphism — Animal reference, different actual objects
        Animal[] animals = { new Dog("Rex", 2, "German Shepherd"),
                             new Cat("Whiskers", 4) };
        for (Animal a : animals) {
            a.eat(); // both call eat(), but through same reference type
            System.out.println(a); // each calls their OWN toString()
        }
        
        // Polymorphism with shapes
        Shape[] shapes = { new Circle(5), new Rectangle(4, 6) };
        for (Shape s : shapes) {
            s.describe(); // calls describe() from Shape, which calls overridden area()!
        }
        
        // Abstraction
        ElectricCar tesla = new ElectricCar("Tesla");
        tesla.start();
        tesla.charge();
        tesla.info();     // from abstract Vehicle
        tesla.checkCharge(); // from interface Chargeable
    }
}`
      }
    ]
  },
  {
    id: 7,
    title: "Linked Lists",
    emoji: "🔗",
    color: "#3B82F6",
    sections: [
      {
        title: "Linked List — Complete Guide",
        theory: `A Linked List is a data structure where each element (called a NODE) contains DATA and a POINTER to the next node. Unlike arrays, nodes are not stored next to each other in memory — they're scattered in the heap, connected by pointers.

VISUAL:
head → [1|→] → [2|→] → [3|→] → [4|null]
Each box is a node: [data | next pointer]

TYPES OF LINKED LISTS:
1. Singly Linked List — each node points to the NEXT node only
2. Doubly Linked List — each node points to BOTH next and previous nodes
3. Circular Linked List — last node points back to the first node

ARRAY vs LINKED LIST — When to use which?
Arrays are better when:
• You need random access (arr[5] is O(1))
• Size is known and fixed
• Memory locality matters (arrays have better cache performance)

Linked Lists are better when:
• Frequent insertions/deletions at the beginning or middle
• Size is dynamic and unknown
• You don't need random access

KEY OPERATIONS TIME COMPLEXITY:
• Access by index: O(n) — must traverse from head
• Insert at front: O(1) — just update head
• Insert at end: O(n) — must traverse to end (or O(1) if we keep a tail pointer)
• Delete from front: O(1)
• Search: O(n)

THE "PREV" POINTER TRICK:
Many linked list problems require tracking the PREVIOUS node. When deleting a node, you need to update the previous node's "next" pointer to skip over the deleted node.`,
        code: `public class LinkedListComplete {
    
    // ===== NODE CLASS =====
    static class Node {
        int data;
        Node next; // pointer to next node (null if last)
        
        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
    
    // ===== LINKED LIST CLASS =====
    static class LinkedList {
        Node head; // pointer to first node
        int size;
        
        LinkedList() {
            head = null;
            size = 0;
        }
        
        // INSERT AT BEGINNING — O(1)
        public void addFirst(int data) {
            Node newNode = new Node(data);
            newNode.next = head; // new node points to current head
            head = newNode;      // head now points to new node
            size++;
        }
        
        // INSERT AT END — O(n)
        public void addLast(int data) {
            Node newNode = new Node(data);
            if (head == null) { head = newNode; size++; return; }
            Node curr = head;
            while (curr.next != null) curr = curr.next; // traverse to last node
            curr.next = newNode; // last node now points to new node
            size++;
        }
        
        // INSERT AT POSITION — O(n)
        public void addAt(int index, int data) {
            if (index < 0 || index > size) { System.out.println("Invalid index"); return; }
            if (index == 0) { addFirst(data); return; }
            
            Node newNode = new Node(data);
            Node curr = head;
            for (int i = 0; i < index - 1; i++) curr = curr.next; // go to node before index
            newNode.next = curr.next;  // new node points to what was at index
            curr.next = newNode;       // previous node points to new node
            size++;
        }
        
        // DELETE FROM BEGINNING — O(1)
        public int removeFirst() {
            if (head == null) throw new RuntimeException("List is empty");
            int data = head.data;
            head = head.next; // move head forward
            size--;
            return data;
        }
        
        // DELETE BY VALUE — O(n)
        public boolean remove(int target) {
            if (head == null) return false;
            if (head.data == target) { head = head.next; size--; return true; }
            
            Node curr = head;
            while (curr.next != null) {
                if (curr.next.data == target) {
                    curr.next = curr.next.next; // skip over target node
                    size--;
                    return true;
                }
                curr = curr.next;
            }
            return false; // not found
        }
        
        // REVERSE THE LIST — O(n)
        public void reverse() {
            Node prev = null;
            Node curr = head;
            while (curr != null) {
                Node nextNode = curr.next; // save next before we overwrite it
                curr.next = prev;          // reverse the pointer
                prev = curr;               // move prev forward
                curr = nextNode;           // move curr forward
            }
            head = prev; // prev is now the new head
        }
        
        // FIND MIDDLE — O(n) using slow/fast pointer
        public Node findMiddle() {
            Node slow = head; // moves 1 step
            Node fast = head; // moves 2 steps
            while (fast != null && fast.next != null) {
                slow = slow.next;       // 1 step
                fast = fast.next.next; // 2 steps
            }
            return slow; // when fast reaches end, slow is at middle
        }
        
        // DETECT CYCLE — Floyd's Algorithm
        public boolean hasCycle() {
            Node slow = head, fast = head;
            while (fast != null && fast.next != null) {
                slow = slow.next;
                fast = fast.next.next;
                if (slow == fast) return true; // they met → cycle!
            }
            return false; // fast reached null → no cycle
        }
        
        // PRINT THE LIST
        public void print() {
            Node curr = head;
            while (curr != null) {
                System.out.print(curr.data);
                if (curr.next != null) System.out.print(" → ");
                curr = curr.next;
            }
            System.out.println(" → null (size: " + size + ")");
        }
    }
    
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.print(); // 1 → 2 → 3 → 4 → 5 → null
        
        list.addFirst(0);
        list.print(); // 0 → 1 → 2 → 3 → 4 → 5 → null
        
        list.addAt(3, 99);
        list.print(); // 0 → 1 → 2 → 99 → 3 → 4 → 5 → null
        
        list.remove(99);
        list.print(); // 0 → 1 → 2 → 3 → 4 → 5 → null
        
        System.out.println("Middle: " + list.findMiddle().data); // 3
        
        list.reverse();
        list.print(); // 5 → 4 → 3 → 2 → 1 → 0 → null
        
        System.out.println("Has cycle: " + list.hasCycle()); // false
    }
}`
      }
    ]
  },
  {
    id: 8,
    title: "Trees & BST",
    emoji: "🌳",
    color: "#84CC16",
    sections: [
      {
        title: "Binary Trees — Complete Guide",
        theory: `A Tree is a hierarchical data structure where nodes are connected by edges. Unlike linked lists (linear), trees are branching structures.

TREE VOCABULARY (very important for interviews!):
• Root — the topmost node, has no parent
• Parent — a node that has children
• Child — a node connected to a parent above it
• Leaf — a node with NO children (bottom of tree)
• Height — the LONGEST path from root to any leaf (measured in edges)
• Depth/Level — distance from root to a specific node (root is at depth 0)
• Subtree — a node and all its descendants

BINARY TREE — each node has AT MOST 2 children: left and right

BINARY SEARCH TREE (BST):
A special binary tree where for EVERY node:
• ALL nodes in the LEFT subtree < current node
• ALL nodes in the RIGHT subtree > current node
• This property holds for EVERY node, not just the root!

BST enables O(log n) search (on average) — like binary search but on a tree!

TREE TRAVERSALS — 4 ways to visit every node:
1. INORDER (Left → Root → Right): gives SORTED order for BST! Perfect for "print BST in sorted order"
2. PREORDER (Root → Left → Right): root first, good for serialization/copying
3. POSTORDER (Left → Right → Root): root last, good for deletion (delete children before parent)
4. LEVEL ORDER (BFS): level by level using a queue, good for "print tree level by level"

WHY is inorder of BST sorted?
In a BST, left child < parent < right child. Inorder visits left first (smallest), then root (middle), then right (largest) = sorted!`,
        code: `import java.util.*;

public class TreesComplete {
    
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }
    
    // ===== INORDER: Left → Root → Right ===== gives sorted order for BST
    public static void inorder(TreeNode root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }
    
    // ===== PREORDER: Root → Left → Right =====
    public static void preorder(TreeNode root) {
        if (root == null) return;
        System.out.print(root.val + " ");
        preorder(root.left);
        preorder(root.right);
    }
    
    // ===== POSTORDER: Left → Right → Root =====
    public static void postorder(TreeNode root) {
        if (root == null) return;
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.val + " ");
    }
    
    // ===== LEVEL ORDER (BFS): Level by level using Queue =====
    public static void levelOrder(TreeNode root) {
        if (root == null) return;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size(); // nodes at current level
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                System.out.print(node.val + " ");
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            System.out.println(); // new line for each level
        }
    }
    
    // ===== HEIGHT of tree — O(n) =====
    public static int height(TreeNode root) {
        if (root == null) return 0;
        int leftH = height(root.left);
        int rightH = height(root.right);
        return 1 + Math.max(leftH, rightH);
    }
    
    // ===== COUNT NODES — O(n) =====
    public static int countNodes(TreeNode root) {
        if (root == null) return 0;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
    
    // ===== BST OPERATIONS =====
    
    // INSERT in BST — O(log n) average
    public static TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val); // found the empty spot!
        if (val < root.val) root.left = insert(root.left, val);   // go left
        else if (val > root.val) root.right = insert(root.right, val); // go right
        // if val == root.val, ignore duplicates (or handle as needed)
        return root;
    }
    
    // SEARCH in BST — O(log n) average
    public static boolean search(TreeNode root, int target) {
        if (root == null) return false; // not found
        if (root.val == target) return true; // found!
        if (target < root.val) return search(root.left, target);  // must be in left
        else return search(root.right, target); // must be in right
    }
    
    // MINIMUM value in BST (leftmost node)
    public static int findMin(TreeNode root) {
        while (root.left != null) root = root.left;
        return root.val;
    }
    
    // IS BALANCED? — |left height - right height| <= 1 for every node
    public static boolean isBalanced(TreeNode root) {
        if (root == null) return true;
        int diff = Math.abs(height(root.left) - height(root.right));
        return diff <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }
    
    // LOWEST COMMON ANCESTOR (LCA) — O(n)
    public static TreeNode lca(TreeNode root, int p, int q) {
        if (root == null) return null;
        if (root.val == p || root.val == q) return root;
        TreeNode left = lca(root.left, p, q);
        TreeNode right = lca(root.right, p, q);
        if (left != null && right != null) return root; // p and q on different sides
        return (left != null) ? left : right;
    }
    
    // CHECK IF VALID BST
    public static boolean isValidBST(TreeNode root, long min, long max) {
        if (root == null) return true;
        if (root.val <= min || root.val >= max) return false;
        return isValidBST(root.left, min, root.val) &&
               isValidBST(root.right, root.val, max);
    }
    
    public static void main(String[] args) {
        // Build a BST: insert 5,3,7,1,4,6,8
        TreeNode bst = null;
        for (int val : new int[]{5, 3, 7, 1, 4, 6, 8}) {
            bst = insert(bst, val);
        }
        //        5   
        //      3   7
        //    1  4 6  8
        
        System.out.print("Inorder (sorted): ");
        inorder(bst);    // 1 3 4 5 6 7 8
        System.out.println();
        
        System.out.print("Preorder: ");
        preorder(bst);   // 5 3 1 4 7 6 8
        System.out.println();
        
        System.out.println("Level Order:");
        levelOrder(bst); // 5 \n 3 7 \n 1 4 6 8
        
        System.out.println("Height: " + height(bst)); // 3
        System.out.println("Nodes: " + countNodes(bst)); // 7
        System.out.println("Search 4: " + search(bst, 4)); // true
        System.out.println("Search 9: " + search(bst, 9)); // false
        System.out.println("Is balanced: " + isBalanced(bst)); // true
        System.out.println("Is valid BST: " + isValidBST(bst, Long.MIN_VALUE, Long.MAX_VALUE)); // true
    }
}`
      }
    ]
  },
  {
    id: 9,
    title: "Dynamic Programming",
    emoji: "💡",
    color: "#F43F5E",
    sections: [
      {
        title: "Dynamic Programming — The Complete Guide",
        theory: `Dynamic Programming (DP) is a technique for solving problems by BREAKING them into smaller subproblems and STORING the results to avoid recomputing them.

WHEN TO USE DP:
1. OVERLAPPING SUBPROBLEMS — The same smaller problems appear multiple times
   Example: Fibonacci(5) = Fib(4) + Fib(3) — both Fib(3) and Fib(2) are computed multiple times!
2. OPTIMAL SUBSTRUCTURE — The optimal solution can be built from optimal solutions of subproblems

THE TWO APPROACHES:

MEMOIZATION (Top-Down):
• Start with recursion (natural, easier to think about)
• Add a "memo" array/map to cache results
• Before computing, check if result is already cached
• If yes → return cached result (avoid recomputation!)
• If no → compute, store in cache, return

TABULATION (Bottom-Up):
• Start from the smallest subproblems
• Build up answers iteratively in a table (array)
• Never uses recursion
• Usually slightly faster (no recursion overhead)
• Think: "Fill the table row by row"

HOW TO IDENTIFY A DP PROBLEM:
• "Find minimum/maximum number of ways to..."
• "Count all possible ways to..."
• "Is it possible to reach/achieve..."
• Involves choices at each step (take or skip an element)
• Keywords: minimum coins, longest subsequence, number of paths

COMMON DP PATTERNS:
1. Linear DP — 1D problems (Fibonacci, Climbing Stairs, Coin Change)
2. Grid DP — 2D problems (Unique Paths, Minimum Path Sum)
3. Interval DP — problems on subarrays/substrings
4. Knapsack DP — choose items with constraints`,
        code: `import java.util.Arrays;

public class DynamicProgramming {
    
    // ===== FIBONACCI — 4 VERSIONS =====
    
    // Version 1: Naive recursion O(2^n) — VERY SLOW for large n
    public static int fibNaive(int n) {
        if (n <= 1) return n;
        return fibNaive(n - 1) + fibNaive(n - 2);
        // fibNaive(40) takes seconds, fibNaive(50) takes MINUTES!
    }
    
    // Version 2: Memoization O(n) time, O(n) space
    static int[] memo = new int[100];
    public static int fibMemo(int n) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n]; // already computed!
        memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
        return memo[n];
    }
    
    // Version 3: Tabulation O(n) time, O(n) space
    public static int fibTab(int n) {
        if (n <= 1) return n;
        int[] dp = new int[n + 1];
        dp[0] = 0; dp[1] = 1;
        for (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
        return dp[n];
    }
    
    // Version 4: Space-Optimized O(n) time, O(1) space
    public static int fibOpt(int n) {
        if (n <= 1) return n;
        int prev2 = 0, prev1 = 1;
        for (int i = 2; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
    
    // ===== CLIMBING STAIRS =====
    // How many ways to climb n stairs if you can take 1 or 2 steps?
    // Same as Fibonacci! ways(n) = ways(n-1) + ways(n-2)
    public static int climbStairs(int n) {
        if (n <= 2) return n;
        int[] dp = new int[n + 1];
        dp[1] = 1; dp[2] = 2;
        for (int i = 3; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
        return dp[n];
    }
    
    // ===== COIN CHANGE — Minimum coins to make amount =====
    // coins = [1, 5, 10, 25] — classic greedy doesn't always work!
    // coins = [1, 3, 4], amount = 6 → answer is 2 (3+3), not 3 (4+1+1)
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1); // fill with "infinity"
        dp[0] = 0; // 0 coins needed for amount 0
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) { // can we use this coin?
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                    // using coin = 1 coin + coins needed for (i - coin)
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
    
    // ===== 0/1 KNAPSACK =====
    // n items, each with weight[i] and value[i]
    // bag capacity = W, maximize value, can use each item AT MOST ONCE
    public static int knapsack(int W, int[] weights, int[] values, int n) {
        // dp[i][w] = max value using first i items with capacity w
        int[][] dp = new int[n + 1][W + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 0; w <= W; w++) {
                // Option 1: DON'T take item i
                dp[i][w] = dp[i-1][w];
                
                // Option 2: TAKE item i (only if it fits)
                if (weights[i-1] <= w) {
                    int valueIfTaken = values[i-1] + dp[i-1][w - weights[i-1]];
                    dp[i][w] = Math.max(dp[i][w], valueIfTaken);
                }
            }
        }
        return dp[n][W];
    }
    
    // ===== LONGEST COMMON SUBSEQUENCE (LCS) =====
    // Subsequence = characters in order but not necessarily adjacent
    // LCS of "ABCDE" and "ACE" = "ACE" (length 3)
    public static int lcs(String a, String b) {
        int m = a.length(), n = b.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (a.charAt(i-1) == b.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1] + 1; // characters match — extend LCS
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]); // take best of skipping each
                }
            }
        }
        return dp[m][n];
    }
    
    // ===== LONGEST INCREASING SUBSEQUENCE (LIS) =====
    // LIS of [10, 9, 2, 5, 3, 7, 101, 18] = [2, 3, 7, 101] (length 4)
    public static int lis(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1); // each element alone is a subsequence of length 1
        int maxLen = 1;
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) { // nums[i] can extend the subsequence ending at j
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
        return maxLen;
    }
    
    public static void main(String[] args) {
        System.out.println("Fib(10): " + fibOpt(10)); // 55
        System.out.println("Climb 5 stairs: " + climbStairs(5)); // 8
        System.out.println("Min coins for 11 from [1,2,5]: " + 
            coinChange(new int[]{1,2,5}, 11)); // 3 (5+5+1)
        System.out.println("Knapsack: " + 
            knapsack(50, new int[]{10,20,30}, new int[]{60,100,120}, 3)); // 220
        System.out.println("LCS of ABCDE and ACE: " + lcs("ABCDE", "ACE")); // 3
        System.out.println("LIS of [10,9,2,5,3,7,101]: " + 
            lis(new int[]{10,9,2,5,3,7,101})); // 4
    }
}`
      }
    ]
  },
  {
    id: 10,
    title: "Graphs",
    emoji: "🕸️",
    color: "#6366F1",
    sections: [
      {
        title: "Graphs — Complete Guide",
        theory: `A Graph is a collection of NODES (vertices) connected by EDGES. It's the most versatile data structure — it can model almost anything!

REAL-WORLD USES:
• Google Maps — cities are nodes, roads are edges (weighted by distance/time)
• Social Networks — people are nodes, friendships are edges
• Internet — websites are nodes, hyperlinks are edges
• Recommendation systems — users and products as nodes

GRAPH TYPES:
• Directed Graph (Digraph) — edges have direction (one-way streets, Twitter follows)
• Undirected Graph — edges have no direction (friendships, roads)
• Weighted Graph — edges have weights (distances, costs, capacities)
• Unweighted Graph — edges have no weight

GRAPH REPRESENTATIONS:
1. Adjacency Matrix — 2D array where matrix[i][j] = 1 if edge between i and j
   • O(V²) space — bad for sparse graphs
   • O(1) to check if edge exists
   
2. Adjacency List — array of lists, each list contains neighbors
   • O(V + E) space — great for sparse graphs (most real-world graphs)
   • O(degree) to check if edge exists

BFS (Breadth First Search):
Uses a QUEUE. Visits all nodes at distance 1 first, then distance 2, etc.
Perfect for: shortest path in unweighted graph, level-order traversal

DFS (Depth First Search):
Uses RECURSION (or explicit stack). Goes as deep as possible before backtracking.
Perfect for: cycle detection, topological sort, connected components

CONNECTED COMPONENTS:
In an undirected graph, a connected component is a group of nodes where you can reach any node from any other node. Use DFS/BFS, and count how many times you need to start a fresh traversal.`,
        code: `import java.util.*;

public class GraphsComplete {
    
    // ===== ADJACENCY LIST REPRESENTATION =====
    static int V; // number of vertices
    static List<List<Integer>> adj;
    
    static void buildGraph(int vertices) {
        V = vertices;
        adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());
    }
    
    static void addEdge(int u, int v) { // undirected edge
        adj.get(u).add(v);
        adj.get(v).add(u);
    }
    
    static void addDirectedEdge(int u, int v) { // directed edge
        adj.get(u).add(v);
    }
    
    // ===== BFS (Breadth First Search) =====
    // Visits nodes level by level — great for SHORTEST PATH (unweighted)
    public static int[] bfs(int source) {
        int[] dist = new int[V];
        Arrays.fill(dist, -1); // -1 means not visited
        
        Queue<Integer> queue = new LinkedList<>();
        dist[source] = 0;
        queue.offer(source);
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            
            for (int neighbor : adj.get(node)) {
                if (dist[neighbor] == -1) { // not visited
                    dist[neighbor] = dist[node] + 1;
                    queue.offer(neighbor);
                }
            }
        }
        System.out.println();
        return dist; // dist[i] = shortest distance from source to i
    }
    
    // ===== DFS (Depth First Search) =====
    // Goes as deep as possible — great for CYCLE DETECTION, COMPONENTS
    static boolean[] visited;
    
    public static void dfs(int node) {
        visited[node] = true;
        System.out.print(node + " ");
        
        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                dfs(neighbor); // recurse deeper
            }
        }
    }
    
    // ===== COUNT CONNECTED COMPONENTS =====
    public static int countComponents() {
        visited = new boolean[V];
        int components = 0;
        
        for (int i = 0; i < V; i++) {
            if (!visited[i]) { // found an unvisited node = new component
                dfs(i);        // visit entire component
                components++;
            }
        }
        return components;
    }
    
    // ===== CYCLE DETECTION (Undirected Graph using DFS) =====
    public static boolean hasCycleUndirected() {
        boolean[] vis = new boolean[V];
        for (int i = 0; i < V; i++) {
            if (!vis[i] && dfsCycleCheck(i, -1, vis)) return true;
        }
        return false;
    }
    
    private static boolean dfsCycleCheck(int node, int parent, boolean[] vis) {
        vis[node] = true;
        for (int neighbor : adj.get(node)) {
            if (!vis[neighbor]) {
                if (dfsCycleCheck(neighbor, node, vis)) return true;
            } else if (neighbor != parent) {
                // visited neighbor that is NOT our parent = CYCLE!
                return true;
            }
        }
        return false;
    }
    
    // ===== DIJKSTRA'S SHORTEST PATH =====
    // Weighted graph — finds shortest path from source to all nodes
    // ONLY works with non-negative weights!
    static List<List<int[]>> weightedAdj; // int[] = {neighbor, weight}
    
    public static int[] dijkstra(int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        // Min-heap: {distance, node}
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        pq.offer(new int[]{0, src});
        
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int d = curr[0], u = curr[1];
            
            if (d > dist[u]) continue; // outdated entry, skip
            
            for (int[] edge : weightedAdj.get(u)) {
                int v = edge[0], w = edge[1];
                if (dist[u] + w < dist[v]) { // found shorter path!
                    dist[v] = dist[u] + w;
                    pq.offer(new int[]{dist[v], v});
                }
            }
        }
        return dist;
    }
    
    // ===== TOPOLOGICAL SORT (for Directed Acyclic Graphs) =====
    // Order in which to complete tasks with dependencies
    // Example: course prerequisites, build systems
    public static List<Integer> topologicalSort() {
        int[] inDegree = new int[V]; // how many prerequisites each node has
        for (int u = 0; u < V; u++) {
            for (int v : adj.get(u)) inDegree[v]++;
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (inDegree[i] == 0) queue.offer(i); // nodes with no prerequisites first
        }
        
        List<Integer> order = new ArrayList<>();
        while (!queue.isEmpty()) {
            int node = queue.poll();
            order.add(node);
            for (int neighbor : adj.get(node)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) queue.offer(neighbor);
            }
        }
        
        // If order.size() != V, there's a cycle (can't do topological sort)
        return order.size() == V ? order : new ArrayList<>();
    }
    
    public static void main(String[] args) {
        // Build undirected graph
        //  0 - 1 - 2
        //  |       |
        //  3 - 4   5
        buildGraph(6);
        addEdge(0, 1); addEdge(1, 2);
        addEdge(0, 3); addEdge(3, 4);
        addEdge(2, 5);
        
        System.out.print("BFS from 0: ");
        int[] distances = bfs(0); // 0 1 3 2 4 5
        System.out.println("Distances from 0: " + Arrays.toString(distances));
        
        visited = new boolean[V];
        System.out.print("DFS from 0: ");
        dfs(0); // 0 1 2 5 3 4
        System.out.println();
        
        System.out.println("Components: " + countComponents()); // 1
        System.out.println("Has cycle: " + hasCycleUndirected()); // false
    }
}`
      }
    ]
  }
];

export default function JavaDSAGuide() {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  const chapter = chapters[selectedChapter];

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh", background: "#0f0f1a", color: "#e8e8f0" }}>
      
      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg, #1a1a3e 0%, #0f0f1a 100%)", borderBottom: "2px solid #2a2a4a", padding: "24px 32px" }}>
        <h1 style={{ margin: 0, fontSize: "32px", fontWeight: 900, background: "linear-gradient(90deg, #ff6b35, #ffd700, #4ecdc4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.5px" }}>
          ☕ Java + DSA Complete Mastery Guide
        </h1>
        <p style={{ margin: "8px 0 0", fontSize: "17px", color: "#8888bb" }}>
           Every concept explained from scratch · Full code included
        </p>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 100px)" }}>
        
        {/* SIDEBAR */}
        <div style={{ width: "280px", minWidth: "280px", background: "#13132a", borderRight: "1px solid #2a2a4a", overflowY: "auto", padding: "16px 0" }}>
          {chapters.map((ch, i) => (
            <button
              key={ch.id}
              onClick={() => { setSelectedChapter(i); setExpandedSection(null); }}
              style={{
                width: "100%", textAlign: "left", padding: "14px 20px",
                background: selectedChapter === i ? `${ch.color}22` : "transparent",
                border: "none", borderLeft: selectedChapter === i ? `4px solid ${ch.color}` : "4px solid transparent",
                cursor: "pointer", color: selectedChapter === i ? ch.color : "#9999bb",
                fontSize: "15px", fontWeight: selectedChapter === i ? 700 : 400,
                transition: "all 0.2s", display: "flex", alignItems: "center", gap: "10px"
              }}
            >
              <span style={{ fontSize: "20px" }}>{ch.emoji}</span>
              <span>{ch.id}. {ch.title}</span>
            </button>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, overflowY: "auto", padding: "32px" }}>
          
          {/* Chapter Header */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
              <span style={{ fontSize: "48px" }}>{chapter.emoji}</span>
              <div>
                <p style={{ margin: 0, fontSize: "13px", color: chapter.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
                  Chapter {chapter.id}
                </p>
                <h2 style={{ margin: 0, fontSize: "36px", fontWeight: 900, color: "#fff" }}>
                  {chapter.title}
                </h2>
              </div>
            </div>
            <div style={{ height: "3px", background: `linear-gradient(90deg, ${chapter.color}, transparent)`, borderRadius: "2px" }} />
          </div>

          {/* Sections */}
          {chapter.sections.map((section, sIdx) => (
            <div key={sIdx} style={{ marginBottom: "24px", background: "#1a1a2e", borderRadius: "16px", overflow: "hidden", border: "1px solid #2a2a4a" }}>
              
              {/* Section Header */}
              <button
                onClick={() => setExpandedSection(expandedSection === sIdx ? null : sIdx)}
                style={{
                  width: "100%", textAlign: "left", padding: "20px 24px",
                  background: expandedSection === sIdx ? `${chapter.color}15` : "transparent",
                  border: "none", cursor: "pointer", color: "#e8e8f0",
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: 700 }}>
                  <span style={{ color: chapter.color, marginRight: "10px" }}>{sIdx + 1}.</span>
                  {section.title}
                </span>
                <span style={{ color: chapter.color, fontSize: "22px", transform: expandedSection === sIdx ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
              </button>

              {/* Expanded Content */}
              {expandedSection === sIdx && (
                <div style={{ padding: "0 24px 24px" }}>
                  
                  {/* Tabs */}
                  {section.code && (
                    <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
                      {["Theory", "Code"].map(tab => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(prev => ({ ...prev, [`${selectedChapter}-${sIdx}`]: tab }))}
                          style={{
                            padding: "8px 20px", borderRadius: "8px", border: "none", cursor: "pointer",
                            background: (activeTab[`${selectedChapter}-${sIdx}`] || "Theory") === tab ? chapter.color : "#2a2a4a",
                            color: (activeTab[`${selectedChapter}-${sIdx}`] || "Theory") === tab ? "#fff" : "#9999bb",
                            fontSize: "15px", fontWeight: 700, transition: "all 0.2s"
                          }}
                        >
                          {tab === "Theory" ? "📖 Theory" : "💻 Code"}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Theory */}
                  {(!section.code || (activeTab[`${selectedChapter}-${sIdx}`] || "Theory") === "Theory") && (
                    <div style={{ background: "#0f0f1a", borderRadius: "12px", padding: "24px", borderLeft: `4px solid ${chapter.color}` }}>
                      {section.theory.split("\n\n").map((para, pIdx) => (
                        <div key={pIdx} style={{ marginBottom: "16px" }}>
                          {para.startsWith("•") || para.includes("\n•") ? (
                            para.split("\n").map((line, lIdx) => (
                              line.startsWith("•") ? (
                                <div key={lIdx} style={{ display: "flex", gap: "10px", marginBottom: "8px", paddingLeft: "8px" }}>
                                  <span style={{ color: chapter.color, fontSize: "18px", lineHeight: "1.8" }}>•</span>
                                  <span style={{ fontSize: "17px", lineHeight: "1.8", color: "#c8c8e0" }}>
                                    {line.slice(1).trim().split(/(\*\*.*?\*\*)/).map((part, i) =>
                                      part.startsWith("**") ? <strong key={i} style={{ color: "#fff" }}>{part.slice(2,-2)}</strong> : part
                                    )}
                                  </span>
                                </div>
                              ) : line.trim() ? (
                                <p key={lIdx} style={{ fontSize: "17px", lineHeight: "1.8", color: "#c8c8e0", margin: "0 0 8px" }}>{line}</p>
                              ) : null
                            ))
                          ) : (
                            <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#c8c8e0", margin: 0 }}>
                              {para.split(/(\*\*.*?\*\*)/).map((part, i) =>
                                part.startsWith("**") ? <strong key={i} style={{ color: "#fff" }}>{part.slice(2,-2)}</strong> : part
                              )}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Code */}
                  {section.code && (activeTab[`${selectedChapter}-${sIdx}`] || "Theory") === "Code" && (
                    <div style={{ background: "#050510", borderRadius: "12px", padding: "24px", border: "1px solid #2a2a4a", overflowX: "auto" }}>
                      <pre style={{ margin: 0, fontSize: "15px", lineHeight: "1.7", color: "#c8c8e0", fontFamily: "'Fira Code', 'Consolas', monospace", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                        {section.code.split("\n").map((line, i) => {
                          // Syntax highlighting
                          const keywords = /\b(public|private|static|void|int|String|boolean|double|float|char|long|byte|short|class|new|return|if|else|for|while|do|switch|case|break|continue|this|super|extends|implements|interface|abstract|final|import|null|true|false|throw|try|catch|finally|default)\b/g;
                          const comments = /(\/\/.*$)/;
                          const strings = /(".*?")/g;
                          
                          let colored = line
                            .replace(comments, '<comment>$1</comment>')
                            .replace(strings, '<str>$1</str>')
                            .replace(keywords, '<kw>$1</kw>');
                          
                          return (
                            <div key={i} style={{ display: "flex" }}>
                              <span style={{ color: "#444466", minWidth: "40px", userSelect: "none", fontSize: "13px" }}>{i + 1}</span>
                              <span dangerouslySetInnerHTML={{
                                __html: colored
                                  .replace(/<kw>(.*?)<\/kw>/g, '<span style="color:#c792ea;font-weight:700">$1</span>')
                                  .replace(/<comment>(.*?)<\/comment>/g, '<span style="color:#637777;font-style:italic">$1</span>')
                                  .replace(/<str>(.*?)<\/str>/g, '<span style="color:#c3e88d">$1</span>')
                              }} />
                            </div>
                          );
                        })}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
            {selectedChapter > 0 && (
              <button
                onClick={() => { setSelectedChapter(selectedChapter - 1); setExpandedSection(null); }}
                style={{ padding: "14px 28px", background: "#2a2a4a", border: "none", borderRadius: "12px", color: "#e8e8f0", fontSize: "16px", cursor: "pointer", fontWeight: 700 }}
              >
                ← {chapters[selectedChapter - 1].emoji} {chapters[selectedChapter - 1].title}
              </button>
            )}
            {selectedChapter < chapters.length - 1 && (
              <button
                onClick={() => { setSelectedChapter(selectedChapter + 1); setExpandedSection(null); }}
                style={{ padding: "14px 28px", background: chapter.color, border: "none", borderRadius: "12px", color: "#fff", fontSize: "16px", cursor: "pointer", fontWeight: 700, marginLeft: "auto" }}
              >
                {chapters[selectedChapter + 1].emoji} {chapters[selectedChapter + 1].title} →
              </button>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px", padding: "20px", color: "#555577", fontSize: "14px" }}>
            All the best 
          </div>
        </div>
      </div>
      <Analytics />
    </div>
  );
}
