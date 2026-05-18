<%@ Page Language="C#" %>

<script runat="server">

    protected void Page_Load(object sender, EventArgs e)
    {
        string name = null, email = null, method = null;

        if (Request.HttpMethod == "GET")
        {
            name = Request.QueryString["Name"];
            email = Request.QueryString["Email"];
            method = "get";
        }
        else if (Request.HttpMethod == "POST")
        {
            name = Request.Form["Name"];
            email = Request.Form["Email"];
            method = "post";
        }

        Response.Write("Thanks " + name + " for signing up. <br />your email is " + email + " <br />and the method is " + method);
    }
</script>
<html>
<head>
    <title>qa</title>
</head>
<body>
</body>
</html>
