var on = false;

var StyleBorderHelper = function(color)
{
	if (on)
	{
	    return {
	      borderColor: color,
	      borderWidth: 4
	   	}
	}
}

export default StyleBorderHelper;
