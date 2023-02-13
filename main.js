function closeWindow()
{
	let cww = confirm("Chcesz wyjść?")
	if (cww==true) 
	{
		window.location.href = 'http://www.google.pl';

	}
	else
	{
		alert("Zamykanie programu zostało anulowane");
	}
}