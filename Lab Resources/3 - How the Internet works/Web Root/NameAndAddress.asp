<html>
<head>
<title>Enter your details</title>
</head>
<body>

<% If Request.ServerVariables("Request_Method") = "GET" Then %>

   <!-- *** Write the HTML form below *** -->
   <form method="POST" action="NameAndAddress.asp">
      Name: <input type="text" name="Name"> <br />
      Address: <input type="text" name="Address"> <br />
      <input type="submit" value="submit">
   </form>
   
<% ElseIf Request.ServerVariables("Request_Method") = "POST" Then %>

   <!-- *** Process the HTML form below *** -->
   <h3>Thank you for your details:</h3>
   <%
   Response.Write "<p>" & Request.Form("Name")    & "</p>"
   Response.Write "<p>" & Request.Form("Address") & "</p>"
   %>
   
<% End If %>

</body>
</html>