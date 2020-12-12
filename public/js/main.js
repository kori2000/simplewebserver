function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest()

    var myArr

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {                
                myArr = JSON.parse(xmlhttp.responseText)

                console.table(myArr)

                document.getElementById("user_ip4").value = myArr.ip                
                document.getElementById("user_as").src = myArr.country_flag

                document.getElementById("user_isp").value = myArr.isp
                document.getElementById("user_org").value = myArr.organization

                document.getElementById("user_country").value = myArr.country_name + ", " + myArr.country_code2
                document.getElementById("user_location").value = myArr.city + ", " + myArr.zipcode

                document.getElementById("user_latlon").value = myArr.latitude + " / " + myArr.longitude
                document.getElementById("user_conti").value = myArr.continent_name + ", " + myArr.continent_code
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400')
            }
            else {
                alert('something else other than 200 was returned')
            }
        }
    }

    xmlhttp.open("GET", "https://api.ipgeolocation.io/ipgeo?apiKey=5170a77d753f4b81a9ad76f0dc7433c6", true);
    xmlhttp.send();
}