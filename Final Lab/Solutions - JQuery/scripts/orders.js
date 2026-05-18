$(function () {
    $("#ordersMessage").text("Loading");
    $("#details").hide();

    $.getJSON("http://localhost:8000/getorders", null, function (results) {
        $("#ordersMessage").text(null);
        $.each(results, function (i, result) {
            var orderText = "Order number " + result.OrderID + " : Ship to " + result.ShipName + ", " + result.ShipAddress + ", " + result.ShipCity + ", " + result.ShipCountry;
            var row = $("<tr/>");
            row.append($("<td/>").text(orderText));
            row.append($("<td/>").addClass("link").text("Show details").click(function () {
                loadDetails(result);
            }));
            row.appendTo("#ordersTable");
        });
    });

    var loadDetails = function (order) {
        $("#details").show();
        $("#orderNo").text("Order number " + order.OrderID);
        $("#detailsMessage").text("Loading details");
        $("#detailsTable").hide();

        $.getJSON("http://localhost:8000/getorderdetailsbyorderid/" + order.OrderID, null, function (results) {
            $("#detailsTable tr").remove();
            $("#detailsTable").show();
            $("#detailsMessage").text(null);
            $.each(results, function (i, result) {
                var detailText = result.ProductName + ' x ' + result.Quantity;
                var row = $("<tr/>");
                row.append($("<td/>").text(detailText));
                row.appendTo("#detailsTable");
            });
        });
    };
});
