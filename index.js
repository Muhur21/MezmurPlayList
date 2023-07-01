// 1. Get these elements
const form = document.querySelector("#playlist-form")  // id "playlist-form"
const playlist = document.querySelector("#playlist") // id "playlist"
const player = document.querySelector("#player") // id "player"

// use the correct event type for a form!!
form.addEventListener("submit", function (e) {
   // 2. Anything special belong here???? Prevent the default action when a form is submitted!
   e.preventDefault()
   // 3. Get the song, artist, and youtube-id elements using their id's - and then access the values
   const songName = e.target.song.value
   const artistName = e.target.artist.value
   const youtubeID = e.target["youtube-id"].value

   // 4. Uncomment the songObj and console.log songObj to see if your songObj has the values from the inputs after you submit
   const songObj = {songName, artistName, youtubeID}
   console.log(songObj)
   // 5. If your songObj has the correct values, uncomment the line below
   displayPlaylist(songObj)

   form.reset()
})

function displayPlaylist(songObj) {
   // 6. Create a span, li, and button element
   const span = document.createElement("span")
   const li = document.createElement("li")
   const deleteBtn = document.createElement("button")

   span.textContent = `${songObj.songName} - ${songObj.artistName}   `
   deleteBtn.innerHTML = "🗑️"

   // add event listeners

   li.addEventListener("click", () => {
      player.src = `https://www.youtube.com/embed/${songObj.youtubeID}`
   })

   deleteBtn.addEventListener("click", (e) => {
      console.log("Deleting Song...")
      //8. Stop the propagation of the click so the li doesn't respond to the delete click
      e.stopPropagation()

      //9. Remove the li, which is the grandparent of the deleteBtn
      // e.target.parentNode.parentNode.remove()
      //Hint:  e.target is the button - use the parentNode property to get to the span, and again to get to the li.  Then use .remove()

      //BONUS: use a confirm box to allow the user to change their minds about deleting the song. A confirm box returns true or false depending on what the user selects.  Try using the return value of the confirm box in a conditional, and move the .remove() into the if statement
      if (confirm("Are you sure you want to delete this song?")) {
         e.target.parentNode.parentNode.remove() // this line of code solves #9 - it's been moved here
      }
   })

   // 7. Append deleteBtn to span, span to li, li to playlist (do this before adding code to the deleteBtn event handler)
      span.appendChild(deleteBtn)
      li.appendChild(span)
      playlist.appendChild(li)
}
