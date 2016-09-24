            function calculate()
            {
              var p= $("#a1").val();
              var n = $("#a2").val();
              var r = $("#a3").val();
              var result =parseInt(p*n*r)/100;
              document.getElementById("aaa").innerHTML="the simple interest is:"+result;
              //alert("the simple interest is:" +result);
            }
       