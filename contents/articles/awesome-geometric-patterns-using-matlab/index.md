---
title: Awesome Geometric Patterns Using Matlab
author: praseetha-kr
date: 2012-07-12
template: article.jade
---

<img title="pattern-chess" src="http://i844.photobucket.com/albums/ab6/voidimagineer/pattern-chess_zps935c0079.png" alt="" />

Do you think it is difficult to make 3 dimensional patterns like this one? then you are wrong. Its absolutely not! 

The basic line pattern of this chess pattern is as shown below:

<img title="35 deg pattern" src="http://i844.photobucket.com/albums/ab6/voidimagineer/35_zps17cad995.png" alt=""/>

Such line patterns can be easily generated using this simple Matlab script:

```matlab
function pattern(angle)
	lower = 2;
	upper = 12;
	stepvalue = 0.2;
	lastindex = (upper-lower) * (1/stepvalue) + 1;
	mid = ceil(lastindex/2);
	x = [lower:stepvalue:upper];
	line1 = tand(angle)*x;
	line2 = tand(180-angle)*x + line1(lastindex)+line1(1);
	plot(x,line1,x,line2);
	for i = 1:(mid-1)
		hold all
		plot([x(i),x(mid+i)],[line1(i),line2(mid+i)]);
		hold all
		plot([x(i),x(mid-i)],[line1(i),line2(mid-i)]);
		hold all
		plot([x((mid*2)-i),x(mid+i)],[line1((mid*2)-i),line2(mid+i)]);
		hold all
		plot([x((mid*2)-i),x(mid-i)],[line1((mid*2)-i),line2(mid-i)]);
	end

	daspect([1,1,1]);
	set(gca,'XTick',[0:1:(upper+2)]);
	set(gca,'YTick',[0:1:line1(lastindex)+1]);
	set(gca,'XLim',[0 (upper+2)]);
	set(gca,'YLim',[0 line1(lastindex)+1]);
	set(findobj('Type','line'),'Color','black');
end
```

Run this script as:
```bash
>> pattern( angle_value )
```

For example,

```bash
>> pattern(45)
```

This will generate the pattern shown below:

<img title="45 deg pattern" src="http://i844.photobucket.com/albums/ab6/voidimagineer/45_zps62323b27.png" alt="" />

You can also generate colorful thread patterns using this script! Choose an angle value <em>between 90 to 180 degree</em> or <em>between 270 to 360 degree</em>, which will generate different patterns according to the angle input.

For example,

```bash
>> pattern(145)
```

Generate the following multicolor pattern:

<img title="145 deg coloured pattern" src="http://i844.photobucket.com/albums/ab6/voidimagineer/145_zpsac6c8ebc.png" alt="" />

Isn't it really cool?