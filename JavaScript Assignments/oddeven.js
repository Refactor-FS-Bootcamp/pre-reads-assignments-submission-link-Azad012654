//Function to find Odd Even Number
function oddEven(){
var num = parseInt(document.getElementById("num1").value);
let result1="";

if(num%2==0)
{
    
    result1="Even";
}
else if(num%2!=0)
{
    result1="Odd";
}
else
{
    result1="Incorrect Input"
}
document.getElementById("result").value=result1;
}

//function to convert Celcius to Fahrenheit
function temperature()
{
    var celcius=parseInt(document.getElementById("num2").value);
    
    var res=celcius* 9/5 + 32;
    document.getElementById("result2").value=res;
    
}
function temperature2()
{
    var temp=parseInt(document.getElementById("num2").value);
    
    var result_celcius =((temp - 32) * 5 / 9).toFixed(5);
    document.getElementById("result2").value=result_celcius;
    
}
//Find the largest among three number
function largestNumber()
{
    var a = parseInt(document.getElementById("number1").value);
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;

    var res= c > (a > b ? a : b) ? c : ((a > b) ? a : b);

    document.getElementById("largestResult").value=res;   
}
function findTable()
{
    var d=document.getElementById("tnum").value;
    var res="";
    for(var i=0;i<=10;i++)
    {
        var tempint=i*d;
        res+=tempint+" ";
    }
    document.getElementById("printresult").value=res;
}
//Finding Prime or Not
function primeFunc()
{
    var primeresult="";
    var a=document.getElementById("primenum").value;
    if(a<=1)
    {
        primeresult="Not Prime";
    }
    else if(a%a==0 && a%1==0)
    {
        primeresult="Prime";
    }
    else
    {
        primeresult="Not Prime";
    }
    document.getElementById("primeresult").value=primeresult;
}
//Print Factorial of a Number
function factFunc()
{
    
 var a = document.getElementById("factnumber").value;
 var fact = 1;
 if(a==0)
 {
    fact=0;
 }
 for(var i=1;i<=a;i++)
 {
    fact = i*fact;
 }
 document.getElementById("factresult").value=fact;
}
//Finding the fibonacci sequence
function fiboFunc(){
var Input=document.getElementById("fibo").value;
var result1="0 "+"1 ";
var n1=0;
var n2=1;


for(var i=2;i<Input;i++)
{  
   var n3=n1+n2;
   result1+=n3+" ";
   n1=n2;
   n2=n3;
    
}
document.getElementById("fiboresult").value=result1;
}
//Palindrome Check
function palindromeFunc()
{
   var a=document.getElementById("palindrome").value;
   var result2="";
   for(var i=0;i<a.length;i++)
    {
        for(var j=a.length-1;j>=0;j--)
        {
            if(a.charAt(i)!=a.charAt(j))
            {
                result2="Not Palindrome";
                
            }
            else
            {
                result2="Palindrome";
            }
        }
    } 
    document.getElementById("palidromeresult").value=result2;
}




