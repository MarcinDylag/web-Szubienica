var fortuna=Math.floor(Math.random()*23);
var sentence = new Array(35);

sentence[0] = "Albo rybki albo akwarium";
sentence[1] = "Apetyt rośnie w miarę jedzenia";
sentence[2] = "Być w Rzymie i papieża nie widzieć";
sentence[3] = "Co dwie głowy to nie jedna";
sentence[4] = "Co nas nie zabije to nas wzmocni";
sentence[5] = "Darowanemu koniowi nie patrzy się w zęby";
sentence[6] = "Do wesela się zagoi";
sentence[7] = "Dzielić skórę na niedźwiedziu";
sentence[8] = "Elektryka prąd nie tyka";
sentence[9] = "Fortuna kołem się toczy";
sentence[10] = "Gdyby kózka nie skakała toby nóżki nie złamała";
sentence[11] = "Głową muru nie przebijesz";
sentence[12] = "Indyk myślał o niedzieli a w sobotę łeb mu ścięli";
sentence[13] = "Jedna jaskółka wiosny nie czyni";
sentence[14] = "Kto nie ma w głowie ten ma w nogach";
sentence[15] = "Lepiej późno niż wcale";
sentence[16] = "Lepszy rydz niż nic";
sentence[17] = "Mądrzejsze jajko od kury";
sentence[18] = "Mowa jest srebrem a milczenie złotem";
sentence[19] = "Nie ma róży bez kolców";
sentence[20] = "Nie taki diabeł straszny jak go malują";
sentence[21] = "Uderz w stół a nożyce się odezwą";
sentence[22] = "Wypływać na szerokie wody";
sentence[23] = "Żyć nie umierać";





var proverb = sentence[fortuna];
proverb = proverb.toUpperCase();
var proverb_hidden="";
var alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";

var failure=0;

var right_snd = new Audio("snd/right.wav");
var wrong_snd = new Audio("snd/wrong.wav");

for (i=0; i<proverb.length ; i++)
{
	if (proverb.charAt(i)==" ") proverb_hidden=proverb_hidden+" ";
	else proverb_hidden=proverb_hidden+"-";
}

		
function write_sentence()
{
	document.getElementById("sentence").innerHTML = proverb_hidden;
}

window.onload=keyboard;


function keyboard()
{

	var element="";
	
	alphabet= alphabet.toUpperCase();
	
	for (i=0; i<alphabet.length; i++)
	{
	element = element+'<div class="key" onclick="check('+i+')" id="key'+i+'">'+alphabet.charAt(i)+'</div>';
		if ((i+1)%7==0) element = element +'<div style="clear:both;"></div>';
	}
	document.getElementById("keyboard").innerHTML = element;
	write_sentence();
}

String.prototype.putSign = function (place, sign)
{
	if (place > this.length - 1) return this.toString();
	else return this.substr(0,place)+sign+this.substr(place+1);
	
}




function check(no)
{
var win = false;
for (i=0; i< proverb.length; i++)
{

	if (proverb.charAt(i)==alphabet.charAt(no))
	{
		proverb_hidden=proverb_hidden.putSign(i, alphabet.charAt(no));
		win = true;
	}
}
//win
if (win==true)
{
	if (proverb==proverb_hidden) right_snd= new Audio("snd/win.wav");
	
	right_snd.play();
	document.getElementById("key"+no).style.backgroundColor="#006600";
	document.getElementById("key"+no).style.color="#00e600";
	document.getElementById("key"+no).style.border="3px solid #00e600";
	document.getElementById("key"+no).style.cursor="default";
	document.getElementById("key"+no).setAttribute("onclick","");

	
	
	 write_sentence();
}

//fail
else 
{
	failure++;
	if (failure>=9) wrong_snd= new Audio("snd/loose.wav");
	wrong_snd.play();
	
	document.getElementById("gp").innerHTML='<img src="pic/gallow'+failure+'.jpg" />';
	
	document.getElementById("key"+no).style.backgroundColor="#800000";
	document.getElementById("key"+no).style.color="#ff0000";
	document.getElementById("key"+no).style.border="3px solid #ff0000";
	document.getElementById("key"+no).style.cursor="default";
	document.getElementById("key"+no).setAttribute("onclick","");
	}

if (proverb==proverb_hidden)
{
	
	document.getElementById("sentence").innerHTML='Wygrana! Odgadłeś hasło: "'+proverb+'"<br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span><br/>';
}


if (failure>=9) 
{
	
	document.getElementById("sentence").innerHTML='Przegrałeś! Szukane hasło to: "'+proverb+'"<br/><span class="reset" style="color: #ff0000" onclick="location.reload()">Jeszcze raz?</span><br/>';
}

}



	