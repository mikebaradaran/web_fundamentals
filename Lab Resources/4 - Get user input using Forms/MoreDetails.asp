<html>
<head>
    <title>Thank you for signing up</title>
</head>
<body>
    <h1>Thank you for signing up</h1>
    <p>
        <%
            Dim name
            Dim email

            If Request.ServerVariables("Request_Method") = "GET" Then
                name = Request.QueryString("Name")
                email = Request.QueryString("Email")
            ElseIf Request.ServerVariables("Request_Method") = "POST" Then
                name = Request.Form("Name")
                email = Request.Form("Email")
            End If
        %>

        Thank you,
        <% Response.Write name %>,
        for signing up for more information.
    </p>
    <p>
        We will send an e-mail to 
        <% Response.Write email %>
        shortly.
    </p>

    <% If Request.ServerVariables("Request_Method") = "GET" Then %>
        <p>(This form was submitted using HTTP GET)</p>
    <% ElseIf Request.ServerVariables("Request_Method") = "POST" Then %>
        <p>(This form was submitted using HTTP POST)</p>
    <% End If %>
</body>
</html>
