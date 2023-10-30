var i = 0;
var b = "#"
var m = "";
while(i < 8)
{
let a = 0;
while(a < 8)
{
if(b = " ")
{m = m + "#"; a = a + 1; b = "#";}
if(b = "#")
{m = m + " "; a = a + 1; b = " ";}
}
m = m + "\n";
i = i + 1;
}
console.log(m);