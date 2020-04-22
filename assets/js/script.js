var charNo = 0;
var content;
var current = "";
var story = "Mera naam hi shinchan hai.... mai shararat se bhara!!! Badi mushkil me padi..... meri family Nohara!!!";

$("textarea").on("input", function()
{
	$(this).val("");
	$(this).val(current + story.charAt(charNo));
	current = $(this).val();
	charNo++;
});