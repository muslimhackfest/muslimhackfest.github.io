document.addEventListener("DOMContentLoaded", (event) => {
    var checkboxes = document.querySelectorAll("input[name=syarat]");
    let enabledSettings= [];

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          enabledSettings = 
            Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
            .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
            .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
          if (enabledSettings.length >=2){  //because there are 2 prerequisite
            document.getElementById("mc-embedded-subscribe").removeAttribute("disabled");
          }else{
            document.getElementById("mc-embedded-subscribe").setAttribute("disabled",'true');
          }
        })
      });
});

