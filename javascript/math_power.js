      document.write("<table>");
      for(var i = 0; i < 21; i++) {
         document.write("<tr>");
         for(var j = 0; j < 11; j++) {
            if(j == 0 || i == 0) {
               if(j == 0){
                  document.write("<th>" + i + "</th>");
               }
               else {
                  document.write("<th>" + j + "</th>");
               }
            }
            else {
               document.write("<td>" + Math.pow(i,j) + "</td>");
            }
         }
         document.write("</tr>");
      }
      document.write("</table>");