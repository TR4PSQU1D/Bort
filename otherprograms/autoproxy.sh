#!/usr/bin/env bash
servers=("1.1.1.1" "8.8.8.8" "8.8.4.4")
while true
 do
   current=`.currentipondomain`
   for i in "${servers[@]}"
     do
       isonline=$(ping -c 1 -W 2 $i)
       if [[ $isonline == *"bytes from"* ]]; then
         echo "Server: $i Online!"
         break
       fi
       echo "Server: $i Offline!"

     done
   sleep 5
done
