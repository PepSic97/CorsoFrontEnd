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

Il catalogo viene generato dinamicamente usando la funzione ```js showCatalog()```

Ogni prodotto è rappresentato con:

- Immagine

- Nome e prezzo

- Pulsante "Aggiungi al carrello"

L’utente può filtrare i prodotti usando:

- Campo di ricerca per nome ```html #search```

- Dropdown categorie ```html #categoryFilter```

## Aggiungere prodotti al carrello

Al click sul pulsante Aggiungi al carrello, viene chiamata la funzione ```js addToCart(event)```

Se il prodotto è già presente nel carrello, la quantità viene incrementata, se non è presente, viene aggiunto con quantità iniziale 1.

Dopo ogni aggiunta, si aggiornano:

- Il carrello ```js updateCart() ```
- Il totale ```js updateTotal() ```

## Layout del carrello

Il carrello è sempre visibile a destra, con layout chiaro e verticale per ogni prodotto: immagine + prezzo, quantità con pulsanti + e -, e bottone Rimuovi.

Ogni card prodotto nel carrello mostra:

- IMMAGINE — PREZZO
- QUANTITÀ
- (+  -)
  Modificano la quantità direttamente dal carrello.

- RIMUOVI
  Elimina completamente il prodotto dal carrello.

## Modificare la quantità dal carrello

Funzioni ```js increaseQty(event)``` e ```js decreaseQty(event)``` gestiscono l’aumento o la diminuzione della quantità.
Se la quantità diventa 0, il prodotto viene rimosso dal carrello.

## Rimuovere singoli prodotti

Il pulsante Rimuovi chiama ```js removeFromCart(event)``` per eliminare l’elemento dal carrello.
Dopo ogni rimozione, carrello e totale vengono aggiornati.

## Svuotare il Carrello

Il pulsante Pulisci carrello chiama ```js clearCart()```
Tutti i prodotti vengono rimossi e il totale azzerato.

## Calcolo Totale

La funzione ```js updateTotal()``` somma il prezzo di ogni prodotto moltiplicato per la quantità.
Il totale aggiornato viene mostrato nella parte inferiore del carrello.