export function createCustomersComponent() {
    const container = document.createElement('div');
    container.innerHTML = getCustomers();
    return container;
}

async function getCustomers() {
    const response = await fetch("https://txMike2.glitch.me/customers");
    let data = await response.json();
    
    let tbl = '<table border=1>';
    data.forEach(x => {
        tbl += `<tr>
                    <td>${x.CustomerID}</td>
                    <td>${x.ContactName}</td>
                    <td>${x.City}</td>
                </tr>`;
    });
    tbl += '</table>';
    return tbl;
}