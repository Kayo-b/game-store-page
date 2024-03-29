# Game Store Page

##### This game store page is inspired by the design of the Steam Store, but it features a more traditional e-commerce layout.

#### Features:

- Homepage:

    - Displays an animated carousel with multiple images fetched from Steam’s API;
    - Shows a loading animation on the first mount while the images are being fetched;
    - Features Dark Souls/Midjourney artwork and text animation to fill the empty space.

- Deals/Store:

    - Uses CheapShark’s API to fetch deals from Steam and GoG;
    - Shows a tooltip window on hover with an image carousel containing screenshots from the game and a short description, all acquired using Steam’s API;
    - Allows deals to be added to a shopping cart located in the nav bar;
    - Redirects to the respective official store page when a deal is clicked;
    - Filter by genres or by name.

- NavBar:

    - Includes a search bar that uses another CheapShark API to search for the lowest prices available online;
    - Has a cart component that sums the costs of all items, states how much is being saved, and allows for add/subtract/remove.




#### Technical notes:

This project allowed me to effectively apply most of the React concepts that I’ve learned so far. It was also my introduction to React Routes, which I now feel quite comfortable with. 
Handling all the async functions and making sure the values would be updated during render was challenging at times since this is my second time using an API and my first time using nested APIs inside a loop that needed to be within a `Promise.all()` method so that all fetches would be synced. 
I also learned a great deal about CSS during this project, mainly on the animation side of things using `@keyframes`.

[kayo-b.github.io/game-store-page/](https://kayo-b.github.io/game-store-page/)
![preview](./src/game-store-rec4.gif)


#### Possible future implementations:

- Filter by value and store;
- Improve fetching and mounting speed overall;
- Add a function to fetch more deals and allow the user to select which store he wants to fetch data from;
- Integrate another API to list free games available online.

#### Credits:

- [CheapShark](https://cheapshark.com) and [Steam](https://steam.com) for providing the free APIs;
- [Midjourney](https://midjourney.com) and [FromSoftware](https://fromsoftware.jp) for the artwork.