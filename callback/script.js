var initial=11;

var timer = setInterval(function ()
{
  initial=initial-1;
  if (initial <= 0)
  {
     clearInterval(timer);
     console.log("Happy Independance Day")
     return;
  }
  console.log(initial)
}, 1000); 

