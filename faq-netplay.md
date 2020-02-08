# Comment jouer à Melee en ligne ?

La version la plus utilisée est Slippi R18, mais certaines personnes préfèrent rester sur Faster Melee 5.9.
Il faut jouer avec la même version que l'adversaire pour pouvoir host ou se connecter à une partie, donc demandez avant ! Pour les télécharger:

* Faster Melee v5.9 : https://goo.gl/dpjhgB
* Slippi : https://slippi.gg/downloads

Sachez qu'il existe également un launcher qui vous permet de créer et rejoindre des salles de netplay en un clic, et qui est lié à Smash Ladder pour augmenter encore le confort d'utilisation lors du grind :)
Suivez le guide: https://www.smashladder.com/blogs/view/26zt/2017-03-21/smash-ladder-desktop-dolphin-launcher

En plus de l'émulateur, vous aurez besoin de l'ISO du jeu. Depuis 2019, l'Europe joue en NTSC (version japonaise/américaine). Tapez la commande !iso dans le Discord LFM pour trouver un lien de téléchargement à jour. 

# Solo Practice sur Faster Melee

Faster Melee réduit l'input lag de 3 frames par rapport à Melee sur console.
Pour éviter de décaler ses timings, il faut, même en solo, créer une room de netplay et utiliser les buffers suivants :

* Écrans 144Hz avec peu de lag: buffer 8
* Écrans 60Hz avec peu de lag (en général BenQ, Asus, Acer): buffer 6
* Autres écrans 60Hz (en général HP, Dell, etc): buffer 4
* Majorité des PC Portables, hors PC gaming: buffer 4

Cette échelle permet d'avoir 1 buffer de décalage max par rapport à une CRT, mais ce n'est pas parfait. Testez donc quand même -1 ou +1 buffer et prenez ce qui semble le plus proche de la réalité.

Plus d’infos ici : https://www.reddit.com/r/SSBM/comments/68q65k/how_to_maximize_your_netplay_experience/?ref=share&ref_source=link

# FAQ Netplay

## Pourquoi on joue en NTSC et pas en PAL (version européenne) ?
L'Europe a décidé de passer en NTSC pour uniformiser le jeu à l'échelle mondiale, cela permet aux joueurs moyens d'avoir des guides qui s'appliquent à la version auquelle ils jouent, et cela permet également à nos top players d'avoir un entraînement adapté avant de partir faire des tournois aux US.

Un article plus détaillé sur la question : https://pugilatdesetoiles.com/2019/06/18/melee-pal-ou-ntsc-le-debat-17-ans-apres/

## Quels codes je dois mettre dans mon Faster Melee ? (ucf, no music, etc.)
Tout est préconfiguré dans les versions de FM conseillées, il ne faut rien toucher.

## Quel adaptateur dois-je utiliser pour ma manette GC ?
Un officiel Wii U, ou un Mayflash 4 ports (seulement la version 4 ports !).

L'explication : https://github.com/exilexi/lfm-discord/blob/master/adaptateur.md

## Ma manette GC n'est pas reconnue dans le jeu, pourquoi ?
https://wiki.dolphin-emu.org/index.php?title=How_to_use_the_Official_GameCube_Controller_Adapter_for_Wii_U_in_Dolphin
