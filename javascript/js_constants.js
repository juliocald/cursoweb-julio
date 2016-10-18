      document.write("<table>");
      document.write("<tr>");
      document.write("<th>Constante</th>");
      document.write("<th>Valor</th>");
      document.write("<th>Predecesor</th>");
      document.write("<th>Sucesor</th>");
      document.write("<th>isNan()</th>");
      document.write("<th>isFinite()</th>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>Infinity</th>");
      document.write("<td>"+ Infinity + "</td>");
      document.write("<td>" + (Infinity-1) + "</td>");
      document.write("<td>" + (Infinity+1) + "</td>");
      document.write("<td>" + isNaN(Infinity) + "</td>");
      document.write("<td>" + isFinite(Infinity) + "</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>NaN</th>");
      document.write("<td>"+ NaN + "</td>");
      document.write("<td>" + (NaN-1) + "</td>");
      document.write("<td>" + (NaN+1) + "</td>");
      document.write("<td>" + isNaN(NaN) + "</td>");
      document.write("<td>" + isFinite(NaN) + "</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>Number.MAX_VALUE</th>");
      document.write("<td>"+ Number.MAX_VALUE + "</td>");
      document.write("<td>" + (Number.MAX_VALUE-1) + "</td>");
      document.write("<td>" + (Number.MAX_VALUE+1) + "</td>");
      document.write("<td>" + isNaN(Number.MAX_VALUE) + "</td>");
      document.write("<td>" + isFinite(Number.MAX_VALUE) + "</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>Number.MIN_VALUE</th>");
      document.write("<td>"+ Number.MIN_VALUE + "</td>");
      document.write("<td>" + (Number.MIN_VALUE-1) + "</td>");
      document.write("<td>" + (Number.MIN_VALUE+1) + "</td>");
      document.write("<td>" + isNaN(Number.MIN_VALUE) + "</td>");
      document.write("<td>" + isFinite(Number.MIN_VALUE) + "</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>Number.NaN</th>");
      document.write("<td>"+ Number.NaN + "</td>");
      document.write("<td>" + (Number.NaN-1) + "</td>");
      document.write("<td>" + (Number.NaN+1) + "</td>");
      document.write("<td>" + isNaN(Number.NaN) + "</td>");
      document.write("<td>" + isFinite(Number.NaN) + "</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>Number.POSITIVE_INFINITY</th>");
      document.write("<td>"+ Number.POSITIVE_INFINITY + "</td>");
      document.write("<td>" + (Number.POSITIVE_INFINITY-1) + "</td>");
      document.write("<td>" + (Number.POSITIVE_INFINITY+1) + "</td>");
      document.write("<td>" + isNaN(Number.POSITIVE_INFINITY) + "</td>");
      document.write("<td>" + isFinite(Number.POSITIVE_INFINITY) + "</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>Number.NEGATIVE_INFINITY</th>");
      document.write("<td>"+ Number.NEGATIVE_INFINITY + "</td>");
      document.write("<td>" + (Number.NEGATIVE_INFINITY-1) + "</td>");
      document.write("<td>" + (Number.NEGATIVE_INFINITY+1) + "</td>");
      document.write("<td>" + isNaN(Number.NEGATIVE_INFINITY) + "</td>");
      document.write("<td>" + isFinite(Number.NEGATIVE_INFINITY) + "</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>3 * 2</th>");
      document.write("<td>"+ 3 * 2 + "</td>");
      document.write("<td>" + 3 * 2 + "</td>");
      document.write("<td>" + 3 * 2 + "</td>");
      document.write("<td>" + isNaN(3 * 2) + "</td>");
      document.write("<td>" + isFinite(3 * 2) + "</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<th>Infinity / Infinity</th>");
      document.write("<td>"+ Infinity / Infinity + "</td>");
      document.write("<td>" + ((Infinity / Infinity) -1) + "</td>");
      document.write("<td>" + ((Infinity / Infinity) +1) + "</td>");
      document.write("<td>" + isNaN(Infinity / Infinity) + "</td>");
      document.write("<td>" + isFinite(Infinity / Infinity) + "</td>");
      document.write("</tr>");

      document.write("</table>");

      