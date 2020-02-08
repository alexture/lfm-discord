# Comment jouer à Melee en ligne ?

La version la plus utilisée est Slippi R18, mais certaines personnes préfèrent rester sur Faster Melee 5.9.
Il faut jouer avec la même version que l'adversaire pour pouvoir host ou se connecter à une partie, donc demandez avant ! Pour les télécharger:

* Faster Melee v5.9 : https://goo.gl/dpjhgB
* Slippi : https://slippi.gg/downloads

Project Slippi est une version modifiée de FM 5.9 qui permet d’enregistrer des replays de vos matchs de Melee, avec des stats détaillés liées à des fichiers .slp. Il est également livré avec un programme facile à utiliser pour visualiser les replays en question et accéder aux statistiques stockées. 

Sachez qu'il existe également un launcher qui vous permet de créer et rejoindre des salles de netplay en un clic, et qui est lié à Smash Ladder pour augmenter encore le confort d'utilisation lors du grind :)
Suivez le guide: https://www.smashladder.com/blogs/view/26zt/2017-03-21/smash-ladder-desktop-dolphin-launcher

En plus de l'émulateur, vous aurez besoin de l'ISO du jeu. Depuis 2019, l'Europe joue en NTSC (version japonaise/américaine). Tapez la commande !iso dans le Discord LFM pour trouver un lien de téléchargement à jour. 

Il faudra aussi paramétrer la manette pour qu'elle soit reconnue par le jeu :
* Si tu as l'adaptateur Mayflash : mets-le bien en mode Wii U, pas en mode PC.
* Installe les drivers de l'adaptateur, <a href="https://dolphin-emu.org/docs/guides/how-use-official-gc-controller-adapter-wii-u/">les instructions sont là</a>. C'est pareil pour le Mayflash et pour l'adaptateur officiel.

# Buffer

Faster Melee réduit l'input lag de 3 frames par rapport à Melee sur console.
Pour éviter de décaler ses timings, il faut, même en solo, créer une room de netplay et utiliser les buffers suivants :

* Écrans 144Hz avec peu de lag: buffer 8
* Écrans 60Hz avec peu de lag (en général BenQ, Asus, Acer): buffer 6
* Autres écrans 60Hz (en général HP, Dell, etc): buffer 4
* Majorité des PC Portables, hors PC gaming: buffer 4

Cette échelle permet d'avoir 1 buffer de décalage max par rapport à une CRT, mais ce n'est pas parfait. Testez donc quand même -1 ou +1 buffer et prenez ce qui semble le plus proche de la réalité.

Plus d’infos ici : https://www.reddit.com/r/SSBM/comments/68q65k/how_to_maximize_your_netplay_experience/?ref=share&ref_source=link

Pour jouer avec d'autres personnes, utilisez le ping :
Moins de 48ms: 6
Entre 48 et 56ms: 7
Entre 56 et 64ms: 8
Entre 64 et 72ms: 9
Entre 72 et 80ms: 10
Entre 80 et 88ms: 11
Entre 88 et 96ms: 12
Entre 96 et 104ms: 13
Plus que ça et le netplay sera compliqué pour votre connexion. Ceci est une règle générale, partez de là puis testez différents buffers pour trouver ce qui convient le mieux pour votre PC/Écran/Connexion.

# FAQ Netplay débutants

## Pourquoi on joue en NTSC et pas en PAL (version européenne) ?
L'Europe a décidé de passer en NTSC pour uniformiser le jeu à l'échelle mondiale, cela permet aux joueurs moyens d'avoir des guides qui s'appliquent à la version auquelle ils jouent, et cela permet également à nos top players d'avoir un entraînement adapté avant de partir faire des tournois aux US.

Un article plus détaillé sur la question : https://pugilatdesetoiles.com/2019/06/18/melee-pal-ou-ntsc-le-debat-17-ans-apres/

## Quels codes je dois mettre dans mon Faster Melee ? (ucf, no music, etc.)
Tout est préconfiguré dans les versions de FM conseillées, il ne faut rien toucher.

## Quel adaptateur dois-je utiliser pour ma manette GC ?
Tu as le choix entre deux adaptateurs :
* L'officiel (Switch ou Wii U) : https://www.amazon.fr/Nintendo-GameCube-Controller-Adapter-Ultimate/dp/B07DQWN8Y8/ref=sr_1_7
* Le Mayflash 4 ports : https://www.amazon.fr/Adaptateur-Manette-Gamecube-pour-Wii/dp/B00RSXRLUE/ref=sr_1_3

Tous les autres adaptateurs, y compris le Mayflash 2 ports, sont <b>dangereux</b> pour ta manette. Ils peuvent avoir du lag, ce qui pose problème mais n'est pas très grave, mais ils peuvent surtout arracher son port et dans ce cas, elle sera complètement inutilisable !

## Quel écran utiliser ?

À peu près n'importe quel écran fait l'affaire, si tu sais choisir le bon buffer. 1ms de response time ça ne veut rien dire ; 144Hz c'est généralement la meilleure fréquence pour jouer.

# Bugs et réglages

## Ma manette GC n'est pas reconnue dans le jeu, pourquoi ?
https://wiki.dolphin-emu.org/index.php?title=How_to_use_the_Official_GameCube_Controller_Adapter_for_Wii_U_in_Dolphin

## Quelle est ma latence ?
Pour voir votre latence avec le serveur de netplay, ouvrez une invite de commande sur Windows et tapez:
```ping stun.dolphin-emu.org -t```
