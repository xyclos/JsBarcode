window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


//JsBarcode
function CODE128(a){function k(){return-1==a.search(c)?!1:!0}this.string128=a;this.valid=k;this.encoded=function(){var i;if(k(a)){var g=a;i=""+h;for(var c="",e=0;e<g.length;e++){var f;a:{for(f=0;f<b.length;f++)if(b[f][0]==g[e]){f=b[f][1];break a}f=""}c+=f}for(e=f=0;e<g.length;e++){var d;a:{for(d=0;d<b.length;d++)if(b[d][0]==g[e]){d=b[d][2];break a}d=0}f+=d*(e+1)}g=(f+104)%103;a:{for(e=0;e<b.length;e++)if(b[e][2]==g){g=b[e][1];break a}g=""}i=i+c+g+j}else i="";return i};var b=[[" ","11011001100",0],
["!","11001101100",1],['"',"11001100110",2],["#","10010011000",3],["$","10010001100",4],["%","10001001100",5],["&","10011001000",6],["'","10011000100",7],["(","10001100100",8],[")","11001001000",9],["*","11001000100",10],["+","11000100100",11],[",","10110011100",12],["-","10011011100",13],[".","10011001110",14],["/","10111001100",15],["0","10011101100",16],["1","10011100110",17],["2","11001110010",18],["3","11001011100",19],["4","11001001110",20],["5","11011100100",21],["6","11001110100",22],["7",
"11101101110",23],["8","11101001100",24],["9","11100101100",25],[":","11100100110",26],[";","11101100100",27],["<","11100110100",28],["=","11100110010",29],[">","11011011000",30],["?","11011000110",31],["@","11000110110",32],["A","10100011000",33],["B","10001011000",34],["C","10001000110",35],["D","10110001000",36],["E","10001101000",37],["F","10001100010",38],["G","11010001000",39],["H","11000101000",40],["I","11000100010",41],["J","10110111000",42],["K","10110001110",43],["L","10001101110",44],
["M","10111011000",45],["N","10111000110",46],["O","10001110110",47],["P","11101110110",48],["Q","11010001110",49],["R","11000101110",50],["S","11011101000",51],["T","11011100010",52],["U","11011101110",53],["V","11101011000",54],["W","11101000110",55],["X","11100010110",56],["Y","11101101000",57],["Z","11101100010",58],["[","11100011010",59],["\\","11101111010",60],["]","11001000010",61],["^","11110001010",62],["_","10100110000",63],["`","10100001100",64],["a","10010110000",65],["b","10010000110",
66],["c","10000101100",67],["d","10000100110",68],["e","10110010000",69],["f","10110000100",70],["g","10011010000",71],["h","10011000010",72],["i","10000110100",73],["j","10000110010",74],["k","11000010010",75],["l","11001010000",76],["m","11110111010",77],["n","11000010100",78],["o","10001111010",79],["p","10100111100",80],["q","10010111100",81],["r","10010011110",82],["s","10111100100",83],["t","10011110100",84],["u","10011110010",85],["v","11110100100",86],["w","11110010100",87],["x","11110010010",
88],["y","11011011110",89],["z","11011110110",90],["{","11110110110",91],["|","10101111000",92],["}","10100011110",93],["~","10001011110",94],["DEL","10111101000",95],["FNC3","10111100010",96],["FNC2","11110101000",97],["SHIFT","11110100010",98],["Code C","10111011110",99],["FNC4","10111101110",100],["Code A","11101011110",101],["FNC1","11110101110",102],["START A","11010000100",103],["START B","11010010000",104],["START C","11010011100",105]],h="11010010000",j="1100011101011",c=/^[!-~ ]+$/}
(function(a){a.fn.JsBarcode=function(k,b){var b=a.extend({},a.fn.JsBarcode.defaults,b),h=document.createElement("canvas");if(!h.getContext)return this;if(void 0==a.fn.JsBarcode.supportedBarcodes[b.format])return this;var j=new a.fn.JsBarcode.supportedBarcodes[b.format](k);if(!j.valid())return this;var j=j.encoded(),c=h.getContext("2d");h.width=j.length*b.width+2*b.quite;h.height=b.height;c.fillStyle="#fff";c.fillRect(0,0,h.width,h.height);for(var i=0;i<j.length;i++){var g=i*b.width+b.quite;c.fillStyle=
"1"==j[i]?"#000":"#fff";c.fillRect(g,0,b.width,b.height)}uri=h.toDataURL("image/png");return a(this).attr("src",uri)};a.fn.JsBarcode.defaults={width:2,height:100,quite:10,format:"CODE128"};a.fn.JsBarcode.supportedBarcodes={CODE128:CODE128,EAN:EAN,UPC:UPC,"UPC-A":UPC}})(jQuery);
function EAN(a){function k(d,b){for(var l="",a=0;a<d.length;a++)"L"==b[a]?l+=h[d[a]]:"G"==b[a]?l+=j[d[a]]:"R"==b[a]&&(l+=c[d[a]]);return l}function b(d){for(var b=0,a=0;12>a;a+=2)b+=parseInt(d[a]);for(a=1;12>a;a+=2)b+=3*parseInt(d[a]);return(10-b%10)%10}this.EANnumber=a+"";this.valid=function(){return-1==this.EANnumber.search(f)?!1:this.EANnumber[12]==b(this.EANnumber)};this.encoded=function(){var a;if(-1==this.EANnumber.search(f)?0:this.EANnumber[12]==b(this.EANnumber)){var c=this.EANnumber;a="";
var h=c[0],j=c.substr(1,7),c=c.substr(7,6);a+=g;a+=k(j,i[h]);a+=e;a+=k(c,"RRRRRR");a+=m}else a="";return a};var h={"0":"0001101",1:"0011001",2:"0010011",3:"0111101",4:"0100011",5:"0110001",6:"0101111",7:"0111011",8:"0110111",9:"0001011"},j={"0":"0100111",1:"0110011",2:"0011011",3:"0100001",4:"0011101",5:"0111001",6:"0000101",7:"0010001",8:"0001001",9:"0010111"},c={"0":"1110010",1:"1100110",2:"1101100",3:"1000010",4:"1011100",5:"1001110",6:"1010000",7:"1000100",8:"1001000",9:"1110100"},i={"0":"LLLLLL",
1:"LLGLGG",2:"LLGGLG",3:"LLGGGL",4:"LGLLGG",5:"LGGLLG",6:"LGGGLL",7:"LGLGLG",8:"LGLGGL",9:"LGGLGL"},g="101",m="101",e="01010",f=/^[0-9]{13}$/}function UPC(a){this.ean=new EAN("0"+a);this.valid=function(){return this.ean.valid()};this.encoded=function(){return this.ean.encoded()}};