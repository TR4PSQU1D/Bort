import discord
import time
import os
client = discord.Client()
@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
@client.event
async def on_message(message):
    if (str(message.channel.id) == '764757851884486676'):
        embeds = message.embeds
        for embed in embeds:
            id = open(".tempchannelstoragegetto", 'r').read()
            channel = client.get_channel(int(id))
            os.remove(".tempchannelstoragegetto")
            await channel.send(embed=embed)
            break
    else:
        if message.author != client.user:
            return
    if message.content[:2] == "./":
        os.system("./discord.sh --text '" + str(message.content[1:]) + "'; echo '"  + str(message.channel.id) +"' > .tempchannelstoragegetto")
client.run('NzYwOTk0NDE0NzA0ODUzMDEy.X6oopw.ae7BNNzmCN02gcYgjAXwe4tyRL0', bot=False)
