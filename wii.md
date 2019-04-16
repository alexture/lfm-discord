# Tuto crack Wii, lancement sans Wiimote, installation de nintendont et de jeux

###### Par Solo


## Materiel:
- Une Wii
- Les cables d'alim et d'image, eventuellement un adaptateur péritel/rgb
- Une télécommande Wii, le capteur infrarouge, deux piles AA
- Un PC
- Une connexion à internet
- Une carte SD vide de 2 GO au moins


#### Durée totale : 20mn

14h10 - 15h30 pour faire le tuto, des photos et répondre à des messages sur discord;
Donc en vous y mettant serieusement et en suivant les étapes à la lettre, je dirais que ça dure 15-20mn au grand max.

N'oubliez pas que cracker une console présente des risques (très faibles mais ils existent).
En aucun cas je suis responsable si votre console claque etc etc


### 0 - Débranchez toutes les manettes, cartes mémoires et clef usb de la console.


### 1 - Ayez une console à jour et à la bonne date.

##### Pour vérifier ça:

- Allumez la console
- Allez dans le menu Wii (en bas à gauche de l'écran)
- Paramètres Wii
- La version est affichée en haut à droite, vous devez avoir la version 4.3E

##### Que faire si vous n'avez pas la bonne version ? (par exemple, ma console est en version 3.2E)

- Menu Wii, Paramètres Wii, flèche de droite (page 2 des paramètres)
- Internet, Paramètres de connexion
- connexion 1 (reinitialisez la s'il y en a une)
- connexion sans fil (par câble = nécessite un adaptateur)
- configuration manuelle
- entrez le ssid de votre réseau (Freebox-12345 par exemple)
- choisissez le type de sécurité de votre réseau
- vous pouvez cliquer sur sauvegarder et faire un test de connexion à partir de cette étape, les options par défaut suffisent pour le reste
- si ça ne marche pas, essayez de changer de réseau (partage de connexion à partir de votre téléphone par exemple)

##### Pour la date:

- Menu Wii, Paramètres Wii, Calendrier, Date
- vous pouvez régler l'heure également


### 2 - Installation de homebrew channel avec letterbomb

- Récuperez l'adresse mac de votre Wii : Menu Wii, Paramètres Wii (Page 2), Internet, Informations générales.
- Allez sur `https://please.hackmii.com/` et entrez l'adresse mac.
- Sélectionnez la bonne version (4.3E normalement) et cochez la case "Bundle the HackMii Installer for me!".
- Coupez le fil ROUGE et enregistrez le fichier .zip sur votre PC.
- Dézippez le fichier que vous avez téléchargé à la racine de la carte SD. Il ne doit y avoir que ça dessus.
- Mettez la carte SD dans la Wii.
- Vérifiez que votre carte SD est detectée (cliquez sur l'icone SD pour voir ça).
- Cliquez sur l'enveloppe (en bas à droite de l'écran).
- Cliquez sur le calendrier en bas à gauche.
- Cliquez sur le jour avec une icone d'enveloppe.
- Cliquez sur l'enveloppe rouge.

Vous arrivez dans l'installer hackmii (le chargement peut prendre quelques minutes).
Vous pouvez vous déplacer avec les fleches de la Wiimote et valider avec A.

Si "the homebrew channel" peut etre installé, cliquez sur "continue".
Sinon vous avez fait tout ça pour rien, je sais pas quoi faire pour vous. Manque de bol !

- Sélectionnez "install the homebrew channel" et confirmez.
- Si l'installation est un succès, cliquez sur "continue" puis "exit".

Vous avez installé le homebrew channel. Les 3/4 du taf sont faits, il ne reste plus qu'a mettre priiloader et a mettre des jeux + nintendont sur la carte SD.
Si vous comptez vous balader avec votre capteur Wii, des piles et la télécommande à chaque fois que vous bougez votre setup, vous pouvez sauter les 2 prochaines étapes
(déconseillé, c'est super chiant pour tout le monde si vous oubliez votre capteur en tournoi ou si vous n'avez plus de piles).


### 3 - Installation de priiloader

- Éteignez la console et remettez la carte SD dans votre PC.
- Téléchargez [priiloader](http://www.dacotaco.com/dlpriiloader.php?ver=0_8_2).
- Videz la carte SD puis dézippez le fichier que vous avez téléchargé à la racine de la carte SD. Il ne doit y avoir que ça dessus.
- Mettez la carte SD dans la Wii, relancez la console.
- Allez dans le homebrew channel.
- Cliquez sur "priiloader" puis "charger".
- Cliquez sur + pour installer priiloader.
- Une fois l'installation terminée, appuyez sur A pour quitter l'installer.
- Vous pouvez éteindre la console, retirer la carte SD et la vider.


### 4 - Configuration de priiloader

- Allumez la console en maintenant le bouton RESET appuyé.
- Le menu priiloader s'affiche, vous pouvez naviguer dessus grâce a la télécommande Wii ou une manette GC branchée (avec la croix directionnelle).
- Sélectionnez "settings".
- Changez "autoboot to" en "homebrew channel".
- Cliquez sur "save settings".
- Éteignez la console.

La prochaine fois que vous allumerez la console, elle se lancera automatiquement sur le homebrew channel. Plus besoin de télécommande Wii désormais.


### 5 - Installation de Nintendont

Nintendont vous servira à lire des jeux en .iso sur votre Wii crackée depuis votre carte SD.

- Téléchargez [Nintendont](https://github.com/FIX94/nintendon-t/blob/master/loader/loader.dol?raw=true)
- Renommez le fichier en `boot.dol`
- Sur votre carte SD, créez un dossier `apps`, puis un dossier `Nintendont` dedans, et copiez le fichier `boot.dol` dans le dossier `Nintendont`
- Créez un fichier `meta.xml` et copiez le texte suivant dedans:


```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<app version="1">
 <name>Nintendont</name>
 <coder>FIX94, crediar</coder>
 <version>4.431</version>
 <release_date>20161218000000</release_date>
 <short_description>Gamecube Loader</short_description>
 <long_description>Commiters: GerbilSoft, JoostinOnline, GreyRogue, Howard, Cyan, nastys 

 Project website: https://github.com/FIX94/Nintendont 

Nintendont allows you to run GameCube games on a Wii or Wii U from an SD or HDD device.</long_description>
 <no_ios_reload/>
 <ahb_access/>
</app>
```

- Vous pouvez également télécharger le logo de Nintendont ci-dessous et l'enregistrer sous le nom `icon.png`

![alt-text](https://sites.google.com/site/completesg/_/rsrc/1430387938161/backup-launchers/gamecube/nintendont/icon.png)


### 6 - Mettre des jeux sur la carte SD

- Créez un dossier `games` à la racine de la carte SD.
- Créez un dossier `jeu 1` à l'intérieur du dossier games, puis copiez votre jeu en .iso à l'interieur de ce dossier.
- L'iso doit impérativement etre renommé `game.iso`, mais le nom du dossier (ici, `jeu 1`) n'a pas d'importance.
- Remettez la carte SD dans la console.

### 7 - Configuration de Nintendont

- Allumez la console
- Lancez "nintendont", "charger"
- Choisissez "SD"
- Appuyez sur B pour le menu de configuration

##### Native control : ON
##### Video : Force
##### Videomode : PAL60

Si vous jouez à un jeu ntsc vous pouvez changer les deux derniers parametres afin que ça puisse fonctionner.

Si vous jouez sur un ecran de pc, l'option `Force progressive` sera peut-être à mettre sur ON.

- Appuyez sur B pour revenir dans le menu de sélection des jeux.
- Lancez un des jeux proposés.

# FIN
lachez vos likes etc