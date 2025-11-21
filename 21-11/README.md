# Catalogo Prodotti Interattivo

Questa applicazione web mostra un catalogo di prodotti interattivo con funzionalità di carrello laterale fisso. Gli utenti possono:

1. [Catalogo prodotti](#catalogo-prodotti)

2. [Aggiungere prodotti al carrello](#aggiungere-prodotti-al-carrello)

3. [Layout del carrello](#layout-del-carrello)

4. [Modificare la quantità dal carrello](#modificare-la-quantità-dal-carrello)

5. [Rimuovere singoli prodotti](#rimozione-singoli-prodotti)

6. [Svuotare il carrello](#svuotare-il-carrello)

7. [Calcolo totale](#calcolo-totale)


## Catalogo prodotti

Il catalogo viene generato dinamicamente usando la funzione ```showCatalog()```

Ogni prodotto è rappresentato con:

- Immagine

- Nome e prezzo

- Pulsante "Aggiungi al carrello"

L’utente può filtrare i prodotti usando:

- Campo di ricerca per nome ```#search```

- Dropdown categorie ```#categoryFilter```

## Aggiungere prodotti al carrello

Al click sul pulsante Aggiungi al carrello, viene chiamata la funzione ```addToCart(event)```

Se il prodotto è già presente nel carrello, la quantità viene incrementata, se non è presente, viene aggiunto con quantità iniziale 1.

Dopo ogni aggiunta, si aggiornano:

- Il carrello ```updateCart()```
- Il totale ```updateTotal()```

## Layout del carrello

Il carrello è sempre visibile a destra, con layout chiaro e verticale per ogni prodotto: immagine + prezzo, quantità con pulsanti + e -, e bottone Rimuovi.

Ogni card prodotto nel carrello mostra:

- [Immagine — Prezzo]
- [Quantità]
- [+ e -]

Modificano la quantità direttamente dal carrello.

- [Rimuovi]

Elimina completamente il prodotto dal carrello.

## Modificare la quantità dal carrello

Con le funzioni ```increaseQty(event)``` e ```decreaseQty(event)```, + e - gestiscono l’aumento o la diminuzione della quantità.
Se la quantità diventa 0, il prodotto viene rimosso dal carrello.

## Rimuovere singoli prodotti

Il pulsante Rimuovi chiama ```removeFromCart(event)``` per eliminare l’elemento dal carrello.
Dopo ogni rimozione, carrello e totale vengono aggiornati.

## Svuotare il Carrello

Il pulsante Pulisci carrello chiama `` clearCart()```
Tutti i prodotti vengono rimossi e il totale azzerato.

## Calcolo Totale

La funzione ```updateTotal()``` somma il prezzo di ogni prodotto moltiplicato per la quantità.
Il totale aggiornato viene mostrato nella parte inferiore del carrello.