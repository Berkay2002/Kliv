
# Kliv Idrottsförening - Webbplats

## Introduktion
Välkommen till dokumentationen för Kliv Idrottsförenings webbplats. Den här filen kommer att ge dig all information du behöver för att underhålla och anpassa webbplatsen.

## Innehåll
1. [Filstruktur](#filstruktur)
2. [Krav](#krav)
3. [Installation](#installation)
4. [Anpassning](#anpassning)
5. [Underhåll](#underhåll)
6. [Vanliga Frågor](#vanliga-frågor)

## Filstruktur
Webbplatsens filer är organiserade enligt följande:
```
kliv-idrottsforening/
│
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   ├── navbar.css
│   │   ├── header.css
│   │   ├── about.css
│   │   ├── lovaktiviteter.css
│   │   ├── judo.css
│   │   ├── contact.css
│   │   └── footer.css
│   ├── images/
│   │   ├── lovaktiviteter1.png
│   │   ├── lovaktiviteter2.png
│   │   ├── judo1.png
│   │   └── judo2.png
│   └── videos/
│       └── video1.mp4
│
├── js/
│   └── main.js
│
├── index.html
└── README.md
```

## Krav
För att köra och underhålla webbplatsen behöver du:
- En webbläsare (Chrome, Firefox, Safari, etc.)
- Textredigerare (t.ex. VS Code, Sublime Text, Atom)
- Grundläggande kunskaper i HTML, CSS och JavaScript

## Installation
1. **Kopiera filer:**
   Ladda ner och kopiera alla filer och mappar till din webbserver eller lokala miljö.

2. **Öppna webbläsaren:**
   Öppna `index.html` i din webbläsare för att se webbplatsen.

## Anpassning
### Ändra innehåll
- **Textinnehåll:** Öppna `index.html` i en textredigerare och uppdatera textinnehållet i de olika sektionerna.
- **Bilder:** Byt ut bilder i mappen `assets/images/` med dina egna bilder. Se till att filnamnen matchar de som används i HTML-filen eller uppdatera filnamnen i HTML-filen.

### Ändra stil
- **CSS-filer:** Öppna filerna i `assets/css/` för att anpassa stilarna för olika sektioner.
- **Tailwind CSS:** Webbplatsen använder Tailwind CSS för att underlätta styling. Du kan anpassa Tailwind-klasserna direkt i HTML-filen.

### Ändra videon
- **Video:** Byt ut videofilen i mappen `assets/videos/` med din egen video och se till att filnamnet matchar det som används i `index.html`.

## Underhåll
### Uppdatera innehåll
För att uppdatera innehållet, öppna `index.html` i en textredigerare och gör de nödvändiga ändringarna. Du kan också uppdatera bilder och videor genom att ersätta filerna i `assets/images/` och `assets/videos/`.

### Hantera sidomenyn
För att uppdatera eller ändra sidomenyn, redigera koden i `index.html` under `<nav>` och `<div id="sidebar">` sektionerna. 

### Uppdatera JavaScript
Om du behöver ändra beteendet på webbplatsen, öppna och redigera `js/main.js`.

## Vanliga Frågor
### Hur ändrar jag textinnehåll på webbplatsen?
Öppna `index.html` i en textredigerare och uppdatera texten i de relevanta sektionerna.

### Hur byter jag ut en bild?
Byt ut bilden i `assets/images/` med din egen bild. Se till att filnamnet matchar det som används i HTML-filen eller uppdatera filnamnet i HTML-filen.

### Hur ändrar jag stilarna på webbplatsen?
Öppna de relevanta CSS-filerna i `assets/css/` och gör dina ändringar där.

### Vad gör jag om något inte fungerar?
Kontrollera att alla filer är på rätt plats och att filnamnen matchar de som används i koden. Om problemet kvarstår, kontakta din utvecklare.

---

Vi hoppas att denna dokumentation hjälper dig att underhålla och anpassa webbplatsen för Kliv Idrottsförening. Om du har några frågor som inte täcks här, vänligen kontakta din utvecklare.
