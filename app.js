////ch21-25//////////////
//////task 1////////
// var first=prompt("Enter your first name");
// var second=prompt("Enter your last name");
// var fullName=first + " "+ second;
// document.write("Welcome to our website Mr. "+
// fullName);


///////////task 2/////////////
// var first=prompt("What is your favourite mobile model? ");
// document.write("My favourite phone is: "+first);
// var calc=first.length;
// document.write("<br> Length of string "+calc);

/////////////////task 3///////////////////////////
// var str="Pakistani";
// document.write("String: "+ str);
// var wow=str.indexOf("n");
// document.write("<br> Index of n : "+wow);



//////////////task 4/////////////
// var str="Hello World";
//  document.write("String: "+str);
// var wow=str.lastIndexOf("l");
// document.write("<br> Last index of letter "+"l: "+wow);


////////////task 5//////////
// var str="Pakistani";
// document.write("String: "+ str);
// var wow=str.charAt("3");
// document.write("<br> Character index  3: "+wow);


////////task 6/////////////
// var first=prompt("Enter your first name ");
// var second=prompt("Enter your last name ");
// var comb=first+" ".concat(second);
// document.write("Welcome to our website Mr. "+ comb);


//////task 7////////////////
// var city="Hyderabad";
// document.write("City: "+city);
// var wow=city.replace("Hyder","Islam");
// document.write("<br>City: "+wow);

////////////task 8///////////////
// var message = "Ali and Sami are best friends.They play cricket and football together";
// document.write(message);

// var wow=message.replace(/and/g,"&");
// document.write("<br> "+wow);
/////task 9/////////
// var num="472";
// document.write("Value: "+num);
// document.write("<br> type "+typeof(num));
// var chg=Number(num);
// document.write("<br> Value: "+chg);
// document.write("<br> type: "+typeof(chg));



///////////task 10////////////
// var inp=prompt("Give us your input");
// document.write(inp);
// var upp=inp.toUpperCase();
// document.write("<br> After change: "+upp);


///////task 11///////////
// var inp=prompt("Give us your input");
// document.write(inp);
// var mix=inp.slice(1,10);
// var upp=inp[0].toUpperCase();

// var conc=upp.concat(mix);
// document.write("<br>Title Case : "+conc);




///////////task 12////////////////

// var num=35.36;
// document.write("Number "+num);
// var str=num.toString();
// document.write("<br>Result "+str);




////////////task 13/////////////
// var username=prompt("Enter your username");
// var s1="@";
// var s2=",";
// var s3=".";
// var s4="!";
// for(var i=0; i<username.length;i++){
// if(username.charCodeAt(i)==s1||username.charCodeAt(i)==s2||username.charCodeAt(i)==s3||username.charCodeAt(i)==s4)
// {
//     alert("Your UserName is Incorrect");
//     username=prompt("Enter correct username");
// }
// else 
// {
//     alert("You have a valid username");
// }

// }


////////////task 14///////
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var choice=prompt("Enter your choice of item");
// var rchoice=choice.toUpperCase;
// if (rchoice==a[0])
// {
//   alert(rchoice +" is avaiable at index 0 in our bakery");
//  } else if (rchoice==a[1])
//  {
//      alert(rchoice +" is avaiable at index 1 in our bakery");
//  }   else if (rchoice==a[2])
//  {
//     alert(rchoice +" is avaiable at index 2 in our bakery");
// } else if (rchoice==a[3])
// {
//     alert(rchoice +" is avaiable at index 3 in our bakery");
//  }   else if (rchoice==a[4])
//  {
//     alert(rchoice +" is avaiable at index 4 in our bakery");
//  } else{
//     alert("We are sorry! "+rchoice+" is not available in our bakery")
//  };


//////////////task 15///////////////
// var password1=prompt("Enter ur password");
// var password=password1.toLowerCase;

// var maxlength=6;

// if(password.charCodeAt(0)==Number){
//     alert("Password cannot start with number");
// }
// if (password.length>6)
// {
//     var trimstr=password.substr(0,6);
//     document.write(trimstr);
// }
// else {
//     alert("Enter a valid password");
// }


////////////task 16////////////
// var university="University of Karachi";
// var str=university.split("");
// document.write("<br>"+str);

/////////task 17///////
// var lastinp="Pakistan";
// document.write("Last input: "+lastinp);
// var choice=lastinp.charAt(7);
// document.write("<br> Last character of input "+choice);


////////task 18////////
// var str="The quick brown fox jumps over the lazy dog";
// var stro=str.toLowerCase();
// document.write("Text: "+str);


// var cout=(stro.match(/the/g)||[]).length;
// document.write("<br>There are "+cout + " occurences");

////ch26-30////////////
////////task 1////////
// var integ=4.543566;
// document.write("number: "+integ);
// var rou=Math.round(integ);
// document.write("<br>After rounding :  "+rou);
// var flo=Math.floor(integ);
// document.write("<br>After flooring :  "+flo);
// var ceil=Math.ceil(integ);
// document.write("<br>After ceiling :  "+ceil);

////////////////task 2///////////////
// var num=prompt("Enter negative floating point value");
// document.write("number: "+num);
// var rou=Math.round(num);
// document.write("<br>After rounding :  "+rou);
// var flo=Math.floor(num);
// document.write("<br>After flooring :  "+flo);
// var ceil=Math.ceil(num);
// document.write("<br>After ceiling :  "+ceil);


////////////task 3//////////////
// var num=-5;
// document.write("Number "+num);
// var abs=Math.abs(num);
// document.write("<br>The absolute value of "+num +" is "+abs);

///////////task 4///////////
// var num=Math.ceil(Math.random()*6);
// document.write("Random Dice Value  "+num);

/////task 5///////
// var num=Math.ceil(Math.random()*2);
// document.write(num);
// if(num==2){
//     document.write("<br>Random Coin Value: Heads ")
// }
// else{
//     document.write("<br>Random Coin Value: Tails ")
// }


///////task 6/////////
// var num=Math.ceil(Math.random()*100);
// document.write("Random number between 1 and 100: "+num);



////////////task 7//////////////
// var weight=prompt("Enter ur weight in kgs");
// if (weight==50)
// {
//     document.write("The weight of person is "+weight);
// }else if (weight==50)
// {
//     document.write("The weight of person is "+weight);
// }


////////task 8///////////
// var num=Math.ceil(Math.random()*10);
// alert(num);

// if(prompt("Input number between 1 and 10")==num){
//     alert("Wow!You have won");
// } else{
//     alert("Try Again!")
// };

/////////////ch 31-34///////////
///////////task 1///////
// var a=new Date();
// document.write(a);


///////////task 2////////////
//  var a=new Date();
 
// var b=a.getMonth();

// if(b==0)
// document.write("January");
// else if(b==1)
// document.write("February");
// else if(b==2)
// document.write("March");
// else if(b==3)
// document.write("April");
// else if(b==4)
// document.write("May");
// else if(b==5)
// document.write("June");
// else if(b==6)
// document.write("July");
// else if(b==7)
// document.write("August");
// else if(b==8)
// document.write("September");
// else if(b==9)
// document.write("October");
// else if(b==10)
// document.write("November");
// else if(b==11)
// document.write("December");


////task 3////////////

// var a=new Date();
// var b=a.toString();
// var c=b.slice(0,3);
// document.write("Today is "+c);

////////task 4////////
// var a=new Date();
// var b=a.toString();
// var c=b.slice(0,3);
// if(c=="Sun"||c=="Sat")
// document.write("<br>Today is fun day");
// else
// document.write("Working day");

////////////task 5///////
// var a=new Date();

// var c=a.getDate()
// document.write(c);
// if(c>=15)
// {document.write("<br>Last fifteen days of month ");}
// else
// if (c<15)
// {Document.write("Last fifteen days of month");}

////////task 6///////////
// var a=new Date();
// document.write("Current Date:   "+ a)
// var b= a.getTime();
// document.write("<br>"+"Elapsed milli seconds since Jan 1 1970:   "+ b);
// var c=(b/1000*60);
// document.write("<br>"+"Elapsed minutes since Jan 1,1970: "+ c);

/////////tsask 7///////
// var a=new Date();

// var b= a.getHours();
// if(b>=12)
// document.write("<br>"+"It is PM  :"+ b);
// else
// document.write("<br>"+"It is AM  "+c);


////////////task 8////////
// var laterDate=new Date("December 31, 2020");
// document.write(laterDate);


///////////task 9////////
// var a=new Date("June 21, 2020 ");
// var b=a.getTime();
// document.write(a);
// var start=new Date("June 18, 2015");
// var startmili=start.getTime();
// var days=(b-startmili)/(1000*60*60*24);
// document.write("<br> "+days +" days have past since Ramadan 1 2015 ");


////////////task 10//////////////////
// var a=new Date("Dec 05, 2015");
// var b=a.getTime();
// document.write(a);
// var start=new Date("Jan 01, 2015");
// var startmili=start.getTime();
// var sec=(b-startmili)/(1000);
// document.write("<br> "+sec +" seconds have past since January 1 2015 ");


///////////task 11///////////
// var a=new Date();
// document.write(a);
// var t=a.getHours();

// var p=t-1;
// document.write("<br>"+"1 hour ago, it was"+" "+p);

/////task 12/////////
// var a=new Date();
// var b=a.getFullYear();
// document.write("Current Year   " +b);



// var p=(b-100);
// document.write("<br>"+"100 years ago, it was"+" "+p);
// var j=new Date(p);
// document.write("<Br>"+j);


///////task 13///////////
// var age=prompt("enter ur age");
// document.write("Age "+age);
// var a=new Date();
// var b=a.getFullYear();
// var c=b-age;
// document.write("<br> Your birthyear is "+c);


///////////task 14//////////////
// document.write("<b> K-Electric Bill </b>");
// document.write("<br>"+"Customer name:  M.Salik ");
// var date=new Date();
// var b=date.getMonth();
// if (b==5)
// {
// document.write(" <br> Month:May ")
// }
// var nou=287;
//  var cpu=16;
//  var amount=nou*cpu;
//  var late=350;
//  var lpay=amount+late;
//  document.write( "<br>"+"Number of units:  "+nou);
//  document.write( "<br>"+"Charges per unit:  "+cpu);
//  document.write( "<br>"+"Net Amount Payable (Within Due Date):  "+amount);
//  document.write("<br>"+"Late payment surcharge:  "+ late);
//  document.write("<br>"+"Gross Amount Payable(after Due Date):   "+lpay);


///////ch 35-38/////////////////

////task 1//////////////
// function cdate(){
//     var cdate=new Date();
//     document.write(cdate);
// }

// cdate();


///////////task 2//////////////
// function name(){

//     var fname=prompt("Enter ur first name");
//     var lname=prompt("Enter ur last name");
//     document.write("Welcome to our website Mr. "+fname+" "+lname);
// }
// name();


/////////task 3/////////////
// function add(){
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter 2nd number");
// var add=(num1 + num2);
// document.write("Addition of two numbers= "+add);
// }

// add();


//////task 4////////////

// function calc(){
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter 2nd number");
// var op=prompt("Enter ur desired operator")
// if(op=="+")
// {
// var add=(num1 + num2);
// document.write("The sum between two numbers is "+add);
// }
// else if(op=="-"){
//     var sub=(num1 - num2);
// document.write("The subtraction between two numbers is "+sub);

// }else if(op=="*"){
//     var prod=(num1 * num2);
// document.write("The product between two numbers is "+prod);
// }else if(op=="/"){
//     var div=(num1 / num2);
// document.write("The division between two numbers is "+div);

// }

// }
// calc();


/////////task 5///////////
// function square(){
//     var num=6;
// var num1=num*num;
// document.write(num1);

// }
// square()


/////////task 6///////////
// function factorial(n){
//     var n=prompt("Enter ur number");
//     var factorial;

//     if(n > 1)
//         document.write( n * factorial(n - 1));
    

// }


///////////task 7////////

// function ghino(){
// var num1=prompt("Enter 1st number");
// var num2=prompt("enter 2nd numbr");
// for(var n=num1; n<=num2; n++)
// document.write("<br> "+n);

// }
// ghino();

////////////task 8/////////

// function rightang(){
// var base=prompt("enter base");
// var perp=prompt("enter perpendicular");
// var base1=base*base;
// var perp1=perp*perp;
// var hyp=(base1+perp1)
// var hyp1=Math.sqrt(hyp);
// document.write("<br> Hypotenuse is "+hyp1);

// }
// rightang();


//////////task 9////////
// function area(){

// var w=+prompt("Enter width");
// var h=+prompt("Enter height");
// var area=w*h;
// document.write("Area of rectangle=  "+area);

// }
// area();


/////////task 10////////////////
// function pal(){

//     var word=prompt("enter a word");
//     document.write("<br>"+word);
//     var check="";
//     for(var i=word.length-1;i>=0;i--)
//     {
// check+=word[i];
//     }
//     if (check==word){

//         document.write("<Br>"+check +" is a palindrome word ");
//     }
//     else{
//         document.write("<BR> It is not palindrome word ");
//     }
// }
// pal();


///////////task 11/////////////
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// function uppercase(str)
// {
//   var array = str.split(' ');
//   var array1 = [];
    
//   for(var x = 0; x < array.length; x++){
//       array1.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
//   }
//   return array1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


/////////////task 12////////////

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


////////////task 14////////////
// function calcCircumference(r){

// var circumference=2*3.14*r;
// document.write(circumference);

// }


// calcCircumference(3);

// function calcArea(r){

//     var area=3.14*(r*r);
//     document.write(area);
// }
// calcArea(3);
