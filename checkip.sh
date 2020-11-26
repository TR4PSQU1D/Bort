IP=$1
curl -G https://api.abuseipdb.com/api/v2/check   --data-urlencode "ipAddress=$IP"   -d maxAgeInDays=90   -d verbose   -H "Key: 0b3378e0549d18c9abd81cdc711cb182be8239c6b09bfb52d186de17b854303607842ff45219237b"   -H "Accept: application/json" &
sleep 1; whois $IP | grep -v "#" | grep -v "%"
