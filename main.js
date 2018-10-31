(function() {
  let commands = [
    {
      'command': `!aide, !aled, !bot, !list, !commands, !commandes`,
      'value': `Affiche cette page`
    },
    {
      'command': `!5tips`,
      'value': `https://www.youtube.com/watch?v=NQPTlCJ02iA`
    },
    {
      'command': `!progress`,
      'value': `Combien d'heures par semaine joues-tu sérieusement ? Combien de persos joues-tu ? Est-ce que tu analyses tes propres vidéos ? Si oui, quelle a été ton erreur la plus fréquente sur la dernière vidéo ? (spécifiquement, pas de "neutral game" ou "positionnement") Qu'est ce que tu as fait pour améliorer ça ?`
    },
    {
      'command': `!pknordic`,
      'value': `**C'est quoi l'ISO Nordic ?** C'est une version de Melee moddée pour optimiser le netplay. **Pourquoi pas PAL community build ?** Le community build est une version NTSC modifiée pour imiter la PAL, alors que Nordic a une base PAL. Le community build a donc quelques restes de NTSC, notamment le side b de Falcon et Ganon qui traversent les projectiles (<https://youtu.be/kZjxFVPdlWw?t=7m5s>)`
    },
    {
      'command': `!bestoption`,
      'type': `meme`,
      'value': `Knee ledgecancel turnaround ftilt`
    },
    {
      'command': `!spacie, !spacies`,
      'type': `meme`,
      'value': `mais je crois qu'il y a toute la partie "comment je bats ça" qui vous échappe tant elle est évidente avec un spacie. je pense pas que le main fox se pose souvent la question de "merde qu'est-ce que je fais si mon adv se met à spam ça ?" (déjà faudrait que le joueur de fox se pose des questions au lieu de faire 36 inputs useless ou choix useless parce que c'est joli)`
    },
    {
      'command': `!mainsnues`,
      'type': `meme`,
      'value': `Je pratique melee depuis maintenant 6 ans, du versus fighting en parallèle depuis 7 ans, je pourrai. Ainsi que la musculation depuis 4 ans, 1m87 pour 86 kg J'ai une vitesse de fou, et des réflexes identiques à ma vitesse. J'ai juste à l'attendre qu'il me charge, l'esquiver et lui donner des bons knees dans la tête. Je le lâcherai pas à la moindre erreur, le falco est fini. T'auras toujours des puceaux d'ici pour penser que c'est impossible. Rien n'est impossible avec de la volonté déjà les amis, et de 2) c'est pas avec vos mains de lâche que vous allez faire quoi que ce soit <:yatangaki:439505146540457991>. N'importe quel homme un minimum entraîné peut vaincre un falco avec un blaster déjà. À main nue c'est pas forcément plus compliqué ça demande juste de la technique.`
    },
    {
      'command': `!falco`,
      'value': `https://smashboards.com/threads/falco-hitboxes-and-frame-data.300397/`
    },
    {
      'command': `!fox`,
      'value': `https://smashboards.com/threads/complete-fox-hitboxes-and-frame-data.285177/`
    },
    {
      'command': `!marth`,
      'value': `https://smashboards.com/threads/complete-marth-hitboxes-and-frame-data.285324/`
    },
    {
      'command': `!sheik`,
      'value': `https://smashboards.com/threads/sheik-hitboxes-and-frame-data.299984/`
    },
    {
      'command': `!peach`,
      'value': `https://smashboards.com/threads/peach-hitboxes-and-frame-data-thread-remastered.425917/`
    },
    {
      'command': `!puff`,
      'value': `https://smashboards.com/threads/jigglypuff-hitbox-and-frame-data-nsf56k.303202/`
    },
    {
      'command': `!falcon`,
      'value': `https://smashboards.com/threads/captain-falcon-hitboxes-and-frame-data.284165/`
    },
    {
      'command': `!samus`,
      'value': `https://smashboards.com/threads/samus-hitboxes-and-frame-data.320253/`
    },
    {
      'command': `!luigi`,
      'value': `https://smashboards.com/threads/luigi-hitboxes-and-frame-data.306546/`
    },
    {
      'command': `!doc`,
      'value': `https://smashboards.com/threads/doctor-mario-hitboxes-and-frame-data.309998/`
    },
    {
      'command': `!yoshi`,
      'value': `https://smashboards.com/threads/yoshi-hitboxes-and-frame-data.317467/`
    },
    {
      'command': `!ics`,
      'value': `https://smashboards.com/threads/complete-ice-climbers-hitboxes-and-frame-data.285394/`
    },
    {
      'command': `!ness`,
      'value': `https://smashboards.com/threads/ness-hitboxes-and-frame-data.304703/`
    },
    {
      'command': `!bowser`,
      'value': `https://smashboards.com/threads/bowsers-hitboxes-and-frame-data-updated-20-01-11.293620/`
    },
    {
      'command': `!g&w`,
      'value': `https://smashboards.com/threads/game-watch-hitboxes-and-frame-data.303618/`
    },
    {
      'command': `!kirby`,
      'value': `https://smashboards.com/threads/kirby-hitboxes-and-frame-data.322531/`
    },
    {
      'command': `!pichu`,
      'value': `https://smashboards.com/threads/pichus-hitboxes-and-frame-data-updated-27-02-11.298367/`
    },
    {
      'command': `!roy`,
      'value': `https://smashboards.com/threads/roy-hitboxes-and-frame-data.286427/`
    },
    {
      'command': `!ylink`,
      'value': `https://smashboards.com/threads/young-link-hitboxes-and-frame-data.301753/`
    },
    {
      'command': `!dk`,
      'value': `https://smashboards.com/threads/donkey-kong-hitboxes-and-frame-data.298620/`
    },
    {
      'command': `!ganon`,
      'value': `https://smashboards.com/threads/ganondorf-hitboxes-and-frame-data.303443/`
    },
    {
      'command': `!link`,
      'value': `https://smashboards.com/threads/link-hitboxes-and-frame-data.306010/`
    },
    {
      'command': `!mario`,
      'value': `https://smashboards.com/threads/mario-hitboxes-and-frame-data.312343/`
    },
    {
      'command': `!mewtwo`,
      'value': `https://smashboards.com/threads/mewtwo-hitboxes-and-frame-data.302477/`
    },
    {
      'command': `!pikachu`,
      'value': `https://smashboards.com/threads/pikachu-hitboxes-and-frame-data.320088/`
    },
    {
      'command': `!zelda`,
      'value': `https://smashboards.com/threads/zelda-hitboxes-and-frame-data.319598/`
    },
    {
      'command': `!nordic`,
      'value': `ISO Melee Nordic: https://mega.nz/#!1BMH3a7J!p7ox1CFAUYkbIoLPaIBptEYwEMF_HGzP3NNDOPPq1SQ`
    },
    {
      'command': `!tutos`,
      'value': `Chaine de SSBM Tutorials, contenant de nombreux tutos pour apprendre le jeu. https://www.youtube.com/channel/UC46ZTid4t2ctB6osM0WTiJA`
    },
    {
      'command': `!whensmelee`,
      'value': `http://whensmelee.com/`
    },
    {
      'command': `!framecounter`,
      'value': `Alternative à 20XX plus simple d’utilisation pour la feature du frame counter. https://smashboards.com/threads/frame-data-display-v1-0.454115/`
    },
    {
      'command': `!main`,
      'value': `Playlist de la chaîne SSBM Tutorials pour aider à choisir son personnage principal: <https://www.youtube.com/watch?v=7GZ9rE9F7ZA&list=PLoU3TQBakHOq6EHo-Hs35bOlTRQnp5q6p>`
    },
    {
      'command': `!shadowboxing`,
      'value': `Post de PPMD concernant l’entraînement solo: https://smashboards.com/threads/falco-discussion-thread.256826/page-439#post-14739329`
    },
    {
      'command': `!movements`,
      'value': `Entraînement aux mouvements: https://kirbykazemeleeblog.blogspot.fr/2014/10/diy-ssbm-movement-drills-part-12.html https://kirbykazemeleeblog.blogspot.fr/2014/11/diy-ssbm-movement-drills-part-22.html`
    },
    {
      'command': `!training`,
      'value': `Comment utiliser les features de savestates et replay sur 20XX: https://www.reddit.com/r/SSBM/comments/6gkgol/406_20xx_save_states_explained_text_form/`
    },
    {
      'command': `!perfectmarth`,
      'value': `Post de Kadano extrêmement détaillé sur Marth: https://smashboards.com/threads/kadanos-perfect-marth-class-advanced-frame-data-application.337035/`
    },
    {
      'command': `!ruleset`,
      'value': `Règles françaises recommandées et utilisées lors du tournoi netplay du jeudi: <http://lefrenchmelee.fr/reglement-des-tournois/>`
    },
    {
      'command': `!ikd`,
      'value': `Calculateur permettant de simuler n’importe quel coup et de jouer avec les DI pour voir le résultat: http://ikneedata.com/`
    },
    {
      'command': `!smashcords`,
      'value': `Liste des serveurs Discord publics pour Melee : https://smashcords.com/melee/`
    },
    {
      'command': `!vods`,
      'value': `Base de données de vidéos: https://vods.co/melee`
    },
    {
      'command': `!library`,
      'value': `Une collection immense de textes et vidéos sur Melee: http://www.meleelibrary.com/`
    },
    {
      'command': `!twitch`,
      'value': `https://www.twitch.tv/directory/game/Super%20Smash%20Bros.%20Melee`
    },
    {
      'command': `!books`,
      'value': `Livres reconnus par la communauté concernant le mental en compétition: The Inner Game of Tennis, Playing to win (http://www.sirlin.net/ptw/), The Art Of Learning, The 6 pillars of self-esteem. Livre d'introduction à la méditation: http://misc.equanimity.info/downloads/mindfulness_in_plain_english.pdf`
    },
    {
      'command': `!invite`,
      'value': `http://lefrenchmelee.fr/discord`
    },
    {
      'command': `!lexique`,
      'value': `Guide des termes fréquemment utilisés sur Melee: https://docs.google.com/document/d/1sR17pFJdgFoM4EqbEygoLkMk7kT63FTQvR4YCSd7j0w/pub`
    },
    {
      'command': `!dashdance`,
      'value': `https://gfycat.com/EachConsciousGenet`
    },
    {
      'command': `!ucf`,
      'value': `https://youtu.be/g9psb_ew1w0`
    },
    {
      'command': `!fmsolo`,
      'value': `Faster Melee réduit l'input lag de 3 frames par rapport à Melee sur console. Pour éviter de décaler ses timings, il faut, même en solo, créer une room de netplay et utiliser les buffers suivants : Écrans 144Hz avec peu de lag: buffer 8 Écrans 60Hz avec peu de lag (en général BenQ, Asus, Acer): buffer 6 Autres écrans 60Hz (en général HP, Dell, etc): buffer 4 Majorité des PC Portables, hors PC gaming: buffer 4 Les setups de jeu étant tous différents, et les mesures de lag peu précises pour chaque setup, cette échelle permet d'avoir au maximum 1 buffer de décalage seulement par rapport à un équivalent CRT. Testez tout de même différents buffers pour voir ce qui vous semble le plus proche de la réalité pour votre setup. Plus d’infos ici : https://www.reddit.com/r/SSBM/comments/68q65k/how_to_maximize_your_netplay_experience/?ref=share&ref_source=link`
    },
    {
      'command': `!frameadvantage`,
      'value': `https://docs.google.com/spreadsheets/d/1KwdYkNVcJbJxV_Ijqi-jyrWjGcJH4lR2e2lfrDuDC0g/edit#gid=1222497360`
    },
    {
      'command': `!advanced`,
      'value': `https://www.youtube.com/watch?v=vckV2MJgBzo`
    },
    {
      'command': `!pr2017`,
      'value': `https://www.ssbwiki.com/French_Power_Rankings`
    },
    {
      'command': `!galint`,
      'value': `Grounded Actionable Ledge INTangibility: Nombre de frames invincibles que l'on a en étant au sol, en partant du bord, pendant lesquelles le perso peut faire une action. Liste de galint possibles (ledgedash optimal possible humainement = OL, TAS = PL, NL = Après un no-impact landing, AI = Après un Aerial Interrupt) : https://smashboards.com/threads/kadanos-perfect-marth-class-advanced-frame-data-application.337035/page-20#post-16761069`
    },
    {
      'command': `!pr`,
      'value': `https://www.cubeforum.fr/viewtopic.php?f=2&t=2733&p=174847#p174847`
    },
    {
      'command': `!fastermelee`,
      'value': `Kadano R12: https://cdn.discordapp.com/attachments/180340796707438592/413076805722046474/FM-v5.87_UCF-v0.73_R12-rc2.7z v5.9 BETA Final: https://goo.gl/dpjhgB`
    },
    {
      'command': `!epee`,
      'type': `meme`,
      'value': `Marth fais partis de la famille des personnages à épée. Il se sert presque tout le temps de son arme. Il dispose d'attaque relevant de son style.`
    },
    {
      'command': `!latence`,
      'value': `Pour voir votre latence avec le serveur de netplay, ouvrez une invite de commande sur Windows et tapez: ping stun.dolphin-emu.org -t`
    },
    {
      'command': `!buffer`,
      'value': `Moins de 48ms: 6 Entre 48 et 56ms: 7 Entre 56 et 64ms: 8 Entre 64 et 72ms: 9 Entre 72 et 80ms: 10 Entre 80 et 88ms: 11 Entre 88 et 96ms: 12 Entre 96 et 104ms: 13 Plus que ça laissez tomber le netplay, c'est pas pour votre connexion. Ceci est une règle générale, partez de là puis testez différents buffers pour trouver ce qui convient le mieux pour votre PC/Écran/Connexion.`
    },
    {
      'command': `!aled20xx`,
      'value': `https://www.reddit.com/r/smashbros/comments/7ecgaj/20xx_407_complete_cheat_sheet_with_all_shortcut/`
    },
    {
      'command': `!iso20xx`,
      'value': `https://www.dropbox.com/s/sy1p0g880x1a19r/20XX%20Melee.iso?dl=0`
    },
    {
      'command': `!fm`,
      'value': `Kadano R12: https://cdn.discordapp.com/attachments/180340796707438592/413076805722046474/FM-v5.87_UCF-v0.73_R12-rc2.7z v5.9 BETA Final: https://goo.gl/dpjhgB`
    },
    {
      'command': `!unclepunch`,
      'value': `ISO d'entrainement sous forme d'events (v1.01 PAL): https://mega.nz/#!zt8nxCAA!yXlMO-E9o8-zLk9gMq9ASynIq9kLCI1cVTNAJ5b1Tgo`
    },
    {
      'command': `!bracket`,
      'value': `https://challonge.com/fr/urlrandomqzjk`
    }
  ];
  
  for (let item of commands) {
    let idContainer = item.type === 'meme' ? 'meme' : 'commands'
    $('#' + idContainer + '-content').append('<div class="mt-4"><span class="font-weight-bold">' + item.command + '</span><br/>' + item.value + '</div>')
  }
})();