<html>
<head>
<title>Enter your details</title>
</head>
<body>

   <!-- *** Write the HTML form below *** -->
   <form method="POST" runat="server">
      
      <!-- *** Paragraph for thank you message *** -->
      <p id="lblMessage" runat="server"></p>
      
      <!-- *** Write the HTML form *** -->
      Enter some text: <input type="text" name="data" runat="server"> <br />
      <input type="submit" value="submit">
   </form>

</body>
</html>
<script language="vb" runat="server"> 
    Sub Page_Load(ByVal s As Object, ByVal e As EventArgs)
        If Page.IsPostBack Then
            ' Write out the thankyou message
            lblMessage.InnerHtml = "Thank you for your data"
        End If
    End Sub
</script>