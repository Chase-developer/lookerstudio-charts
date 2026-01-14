looker.visualizations.add({
  id: "my-simple-vis",
  label: "My Simple Visualization",

  // Initial setup
  create: function(element, config) {
    element.innerHTML = "<div id='vis-container'>Loading...</div>";
  },

  // Called whenever the data changes
  updateAsync: function(data, element, config, queryResponse, details, doneRendering) {
    const container = document.getElementById("vis-container");

    // Just show total number of rows as a simple example
    const numRows = data.length;

    container.innerHTML = `
      <div style="font-family: sans-serif; font-size: 20px; color: #333;">
        This dataset has <strong>${numRows}</strong> rows.
      </div>
    `;

    doneRendering();
  }
});
