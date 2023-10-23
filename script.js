//your JS code here. If required
 function updateWindowSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const sizeInfo = document.getElementById("sizeInfo");
      const h1 = sizeInfo.querySelector("h1");

      h1.textContent = `Width: ${width} Height: ${height}`;
    }

    // Initial update
    updateWindowSize();

    // Add a resize event listener to update the size on window resize
    window.addEventListener("resize", updateWindowSize);
