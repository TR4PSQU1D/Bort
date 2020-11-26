sed '1,5d' /root/bot/check.txt > /root/bot/bots.txt
head -n -1 /root/bot/bots.txt > /root/bot/check.txt
sed -i 's/\[36m//g' /root/bot/check.txt
sed -i 's/\[1;32m//g' /root/bot/check.txt
sed -i 's/\[1;31m//g' /root/bot/check.txt
sed -i 's/\[97m//g' /root/bot/check.txt
sed -i 's/\//g' /root/bot/check.txt
sed -i 's/\[0m//g' /root/bot/check.txt
sed -i 's/\[38;5;247m//g' /root/bot/check.txt
sed -i 's/\[38;5;249m//g' /root/bot/check.txt
sed -i 's/\[38;5;253m//g' /root/bot/check.txt
sed -i 's/\[2J\[1H\[38;5;123m//g' /root/bot/check.txt
sed -i 's/\[38;5;123m//g' /root/bot/check.txt
sed -i 's/\[38;5;195m//g' /root/bot/check.txt
sed -i 's/ \[2J\[1H //g' /root/bot/check.txt
sed -i 's/\[0;37m//g' /root/bot/check.txt
sed -i 's/\[1;31m//g' /root/bot/check.txt
sed -i 's/\[1;37m//g' /root/bot/check.txt
sed -i 's/\[1;36m//g' /root/bot/check.txt
sed -i 's/\[38;5;207m//g' /root/bot/check.txt
sed -i 's/\[38;5;207m//g' /root/bot/check.txt
sed -i 's/\[0;97m//g' /root/bot/check.txt
sed -i 's/\[01;97m\[\[01;97m//g' /root/bot/check.txt
sed -i 's/  \[0;37\*\*\*\*\*\*\*\*\*\*\*\*\*//g' /root/bot/check.txt
echo -n "\n$(cat /root/bot/check.txt)" > /root/bot/check.txt
rm /root/bot/bots.txt
mv /root/bot/check.txt /root/bot/bots.txt