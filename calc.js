var previous;
        var screen = document.getElementById("screen");

        function clr()
        {
            screen.value ='';
        }

        function back()
        {
            let x = screen.value;
            screen.value = x.slice(0,-1);
        }
 
        function display(val)
        {
            if(previous==true)
                clr();
            screen.value+=val;
            previous =false;
         }

        function result()
        {
            previous = true;
            let x = screen.value;
			console.log(x)
            screen.value = eval(x);
        }