import imaplib
import email
from email.header import decode_header
import webbrowser
import os
import subprocess
import sys
import time


def run(cmd):
    subprocess.call(cmd, shell=True)


# account credentials
username = "@gmail.com"
password = "ps"
# create an IMAP4 class with SSL
imap = imaplib.IMAP4_SSL("imap.gmail.com")
# authenticate
imap.login(username, password)

status, messages = imap.select("INBOX")
# number of top emails to fetch
N = 10
# total number of emails
messages = int(messages[0])

for i in range(messages, messages - N, -1):
    # fetch the email message by ID
    res, msg = imap.fetch(str(i), "(RFC822)")
    for response in msg:
        if isinstance(response, tuple):
            # parse a bytes email into a message object
            msg = email.message_from_bytes(response[1])
            # decode the email subject
            subject = decode_header(msg["Subject"])[0][0]
            if isinstance(subject, bytes):
                # if it's a bytes, decode to str
                subject = subject.decode()
            # email sender
            if subject.find("got money") == -1:
                a = "1"
            else:
                from_ = msg.get("From")
                # if the email message is multipart
                if msg.is_multipart():
                    # iterate over email parts
                    for part in msg.walk():
                        # extract content type of email
                        content_type = part.get_content_type()
                        content_disposition = str(
                            part.get("Content-Disposition"))
                        try:
                            # get the email body
                            body = part.get_payload(decode=True).decode()
                        except:
                            pass
                        if content_type == "text/plain" and "attachment" not in content_disposition:
                            # print text/plain emails and skip attachments
                            if body.find("Fee") == -1:
                                text_file = open("body.txt", "w")
                                text_file.write(body)
                                text_file.close()
                                run("cat body.txt | grep 'Date:' > temp777.txt")
                                searchString = open('temp777.txt')
                                datafile = open('proccessed.txt')
                                with open('temp777.txt') as f, open('proccessed.txt') as g:
                                    bLines = set([thing.strip()
                                                  for thing in g.readlines()])
                                    for line in f:
                                        line = line.strip()
                                        if line in bLines:
                                            #print("Old Transaction :/")
                                            break
                                        else:
                                            run("cat body.txt | grep 'Date:' >> proccessed.txt")
                                            run("cat body.txt | grep 'Amount received\n.00 EUR' > temp7.txt")
                                            run("sed -i 's/Amount received//g' temp7.txt")
                                            run("sed -i ':a;N;$!ba;s/\n/ /g' temp7.txt")
                                            run("sed -i 's/ //g' temp7.txt")
                                            run("cat body.txt | grep 'image: quote' > temp8.txt")
                                            run("sed -i 's/^...............//' temp8.txt")
                                            run("sed -i 's/................\$//' temp8.txt")
                                            run("sed -i 's/[^0-9]*//g' temp8.txt")
                                            run("sed -i '/you/d' temp7.txt")
                                            data_buffer = ""
                                            bal1 = open("temp7.txt", "r")
                                            data_buffer += bal1.read()
                                            userID = ""
                                            userID1 = open("temp7.txt", "r")
                                            userID += userID1.read()
                                            userID1 = ''.join(c for c in userID3 if c.isdigit())
                                            if "€40" in data_buffer:
                                                plan = "Plat"
                                            elif "€15" in data_buffer:
                                                plan = "Monthly"
                                            elif "€2" in data_buffer:
                                                plan = "Trial"
                                            else:
                                                break
                                            print("New Transaction! " + data_buffer + " Giving:" + plan + " UserID: " + userID1 + "")
                                            run("curl http://localhost/giveplan.php?apikey=DtdPXJ1JGFRLZrx6a3xtTHFrKVyGwZ3J6HhXyMQH\&userid=" + userID1 + "\&plan=" + plan + "")

                            else:
                                a = "1"
                else:
                    print("1")
                    # extract content type of email
                    content_type = msg.get_content_type()
                    # get the email body
                    body = msg.get_payload(decode=True).decode()
                    print(body)
                    if content_type == "text/plain":
                        # print only text email parts
                        if body.find("Fee") == -1:
                            a = "1"
                        else:
                            a = "1"
imap.close()
imap.logout()
