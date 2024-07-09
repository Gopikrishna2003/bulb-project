var bulb=0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="bulbon.jpg";
        bulb=1;
    }
    else{
        document.getElementById("image").src="bulboff.jpg";
        bulb=0;
    }
}
