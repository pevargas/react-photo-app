# react-photo-app
A photo app using React.js and the 500px.com API.

## Feature Requirements
### Photostream
* **Masonry layout:** The photos should be displayed in a reactive masonry layout. If you don’t know what this is, go check out Pinterest or ask Bob. The size of the photos doesn’t matter, but you must maintain the aspect ratio of the original, full size photo. Please write this feature without using a plugin or library. 
* **Photos:** Each “tile” in the layout should display a photo and its name beneath it. The background of the tile should be white.
* **View count:** If the cursor hovers over a tile, the number of times that photo has been viewed on 500px should appear over the photo. Moving the cursor off, removes the number.
* **Infinite scroll:** You can choose the size of the initial photo set to be displayed on the page, but when a user scrolls to the bottom of the page, the next photos in the stream should load in. You can design the UX of this feature, the only constraint is that it should not require a click by the user, only the scroll.
* **Favoriting:** Clicking on a tile should change its background color and increment the “favorite counter” on the Topbar. This should toggle. In other words, clicking a “favorited” photo will reset its visuals and decrement the counter. Favoriting does not need to persist across page loads.
Topbar
* **Fixed to top:** A top bar should stick to the top of the window as you scroll.
Favorite count: Somewhere in this bar should be a counter that is tracking how many photos you’ve favorited. This count does not need to persist across page loads.

### Notes
* Optimize for code quality. Beautiful designs and buttery scrolling are nice, but we really want to see how you like to structure your code.
* Use ReactJS in your submission
* Feel free to use _any_ other libraries/frameworks/tools you want to get the job done. E.g. Underscore, Lodash. We only ask that you do not use a plugin for the Masonry feature.
* The challenge is supposed to be enjoyable! Have fun with it. Make something you’re proud of. Add it to your portfolio. If you end up implementing any features we didn’t explicitly require - let us know!
* You should not need to write any server side code to complete this challenge.

