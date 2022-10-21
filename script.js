var div = document.createElement("div");
div.setAttribute("class","formstyle");

var form = document.createElement("form");
form.setAttribute("name","form1");

var input = document.createElement("input");
input.setAttribute("id","txt");
input.setAttribute("class","textview");
input.setAttribute("disabled",true)

form.append(input);

div.append(form);

function createtab(tagname,attrname,attrvalue)
{
    var table=document.createElement(tagname);
    table.setAttribute(attrname,attrvalue);
    return table;
}
function createtr(tagname)
{
    var tr=document.createElement(tagname);
    return tr;
}
function createtd(tagname)
{
    var td =document.createElement(tagname);
    return td;
}

function btncreate(element,val=" ")
{
    var element = document.createElement(element);
    element.setAttribute("type","button");
    element.innerHTML = val;
    return element;
}

var table = createtab("table","class","table");
var tr1 = createtr("tr");

    var td1 = createtd("td");
        var btnclr = btncreate("button","C");
        btnclr.addEventListener("click",erase); 
    td1.append(btnclr);

    var td2 = createtd("td");
        var btnbs = btncreate("button","B");
        btnbs.addEventListener("click",backspace);
    td2.append(btnbs);

    var td3 = createtd("td");
        var btndiv = btncreate("button","/");
        btndiv.addEventListener("click",()=> {insert('/');});
    td3.append(btndiv);

    var td4 = createtd("td");
        var btnmul = btncreate("button","X");
        btnmul.addEventListener("click",()=>{insert('*');});
    td4.append(btnmul);


tr1.append(td1,td2,td3,td4);

var tr2 = createtr("tr");

    var td5 = createtd("td");
        var btn7 = btncreate("button","7");
        btn7.addEventListener("click",()=>{insert('7');}); 
    td5.append(btn7);

    var td6 = createtd("td");
        var btn8 = btncreate("button","8");
        btn8.addEventListener("click",()=>{insert('8');}); 
    td6.append(btn8);

    var td7 = createtd("td");
        var btn9 = btncreate("button","9");
        btn9.addEventListener("click",()=>{insert('9');}); 
    td7.append(btn9);

    var td8 = createtd("td");
        var btnminus = btncreate("button","-");
        btnminus.addEventListener("click",()=>{insert('-');}); 
    td8.append(btnminus);


tr2.append(td5,td6,td7,td8);

var tr3 = createtr("tr");

    var td9 = createtd("td");
        var btn4 = btncreate("button","4");
        btn4.addEventListener("click",()=>{insert('4');}); 
    td9.append(btn4);

    var td10 = createtd("td");
        var btn5 = btncreate("button","5");
        btn5.addEventListener("click",()=>{insert('5');}); 
    td10.append(btn5);

    var td11 = createtd("td");
        var btn6 = btncreate("button","6");
        btn6.addEventListener("click",()=>{insert('6');}); 
    td11.append(btn6);

    var td12 = createtd("td");
        var btnadd = btncreate("button","+");
        btnadd.addEventListener("click",()=>{insert('+');}); 
    td12.append(btnadd);


tr3.append(td9,td10,td11,td12);

var tr4 = createtr("tr");

    var td13 = createtd("td");
        var btn1 = btncreate("button","1");
        btn1.addEventListener("click",()=>{insert('1');}); 
    td13.append(btn1);

    var td14 = createtd("td");
        var btn2 = btncreate("button","2");
        btn2.addEventListener("click",()=>{insert('2');}); 
    td14.append(btn2);

    var td15 = createtd("td");
        var btn3 = btncreate("button","3");
        btn3.addEventListener("click",()=>{insert('3');}); 
    td15.append(btn3);

    var td16 = createtd("td");
        var btnmod = btncreate("button","%");
        btnmod.addEventListener("click",()=>{insert('%');}); 
    td16.append(btnmod);


tr4.append(td13,td14,td15,td16);

var tr5 = createtr("tr");

    var td17 = createtd("td");
    var btn0 = btncreate("button","0");
    btn0.addEventListener("click",()=>{insert('0');}); 
    td17.append(btn0);

    var td18 = createtd("td");
    var btndec = btncreate("button",".");
    btndec.addEventListener("click",()=>{insert('.');}); 
    td18.append(btndec);

    var td19 = createtd("td");
    td19.setAttribute("colspan","2");
    var btneql = btncreate("button","=");
    btneql.setAttribute("id","btneql");
    btneql.addEventListener("click",equal); 
    td19.append(btneql);

tr5.append(td17,td18,td19);


table.append(tr1,tr2,tr3,tr4,tr5);
form.append(table);
document.body.append(div);

var disptxt = document.getElementById("txt");


function insert(str)
{
   disptxt.value = disptxt.value + str;
}
function equal()
{
        try {
         var exp = disptxt.value;
         if(exp)
         {
             disptxt.value = eval(exp);
         }
        } catch (error) {
         disptxt.value = "Error!";
        }
}
function backspace()
{
    var exp = disptxt.value;
    disptxt.value = exp.substring(0,exp.length-1);
}
function erase()
{
    disptxt.value = " ";
}


