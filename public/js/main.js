function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest()

    var myArr

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {                
                myArr = JSON.parse(xmlhttp.responseText)

                console.table(myArr)

                document.getElementById("user_ip4").value = myArr.query                
                document.getElementById("user_as").value = myArr.as

                document.getElementById("user_isp").value = myArr.isp
                document.getElementById("user_org").value = myArr.org

                document.getElementById("user_country").value = myArr.country + ", " + myArr.countryCode
                document.getElementById("user_location").value = myArr.city + ", " + myArr.zip

                document.getElementById("user_latlon").value = myArr.lat + " / " + myArr.lon
                document.getElementById("user_tz").value = myArr.timezone
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400')
            }
            else {
                alert('something else other than 200 was returned')
            }
        }
    }

    xmlhttp.open("GET", "http://ip-api.com/json", true);
    xmlhttp.send();
}