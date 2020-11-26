#!/bin/bash
upload=`curl -q --request POST   --url 'https://www.virustotal.com/vtapi/v2/file/scan'   --form 'apikey=2e00ecd67b896fc80d360a313abe1535571874b21854c4d25434ea8cc3d3b0bb'   --form "file=$1"`
resource=`echo $upload | sed 's/.*\"resource\": \"//' | sed 's/\"\, \".*//'`
echo $resource > .reskey
result=`curl -q --request GET   --url "https://www.virustotal.com/vtapi/v2/file/report?apikey=2e00ecd67b896fc80d360a313abe1535571874b21854c4d25434ea8cc3d3b0bb&resource=$resource"`
echo $result
