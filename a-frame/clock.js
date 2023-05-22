AFRAME.registerComponent("clock", {
  schema: {
  },

  init: function () {
    //Create a new element, set 
    this.titleEl = document.createElement("a-text");
    this.titleEl.setAttribute("position", { x: 2.5, y: 2.5, z: -5});
    this.titleEl.setAttribute("align", "center")
    this.titleEl.setAttribute("color", "#00ff00");
    this.titleEl.setAttribute("font", "sourcecodepro");
    this.titleEl.setAttribute("value", "Hello, welcome to Informatics World Clock. Please click on a button to display the current time at its designated city's timezone.");

    this.el.appendChild(this.titleEl);

    this.timezoneText = document.createElement("a-text");
    this.timezoneText.setAttribute("id", "timezoneText")
    this.timezoneText.setAttribute("position", {x: 2.5, y: 1.5, z: -5});
    this.timezoneText.setAttribute("align", "center")
    this.timezoneText.setAttribute("color", "#ADD8E6");
    this.timezoneText.setAttribute("font", "sourcecodepro");
    //this.timezoneText.setAttribute("value", "placeholder");

    this.el.appendChild(this.timezoneText)
    //Local time button and text
    this.LocalBoxButton = document.createElement("a-box");
    this.LocalBoxButton.setAttribute("id", "LocalButton");
    this.LocalBoxButton.setAttribute("position", {x: -1, y: -1, z: -2});
    this.LocalBoxButton.setAttribute("rotation", "0 45 0");
    this.LocalBoxButton.setAttribute("width", 0.5);
    this.LocalBoxButton.setAttribute("height", 0.5);
    this.LocalBoxButton.setAttribute("depth", 0.5);
    
    this.el.appendChild(this.LocalBoxButton);

    this.LocalText = document.createElement("a-text");
    this.LocalText.setAttribute("position", {x: -2.5, y: 0, z: -2});
    this.LocalText.setAttribute("rotation", "0 45 0");
    this.LocalText.setAttribute("color", "#ffff00");
    this.LocalText.setAttribute("font", "sourcecodepro");
    this.LocalText.setAttribute("value", "Local Time Zone");

    this.el.appendChild(this.LocalText);
    //Honolulu time button and text
    this.HonoluluBoxButton = document.createElement("a-box");
    this.HonoluluBoxButton.setAttribute("id", "HonoluluButton");
    this.HonoluluBoxButton.setAttribute("position", {x: -1, y: 0.75, z: -2});
    this.HonoluluBoxButton.setAttribute("rotation", "15 45 0");
    this.HonoluluBoxButton.setAttribute("width", 0.5);
    this.HonoluluBoxButton.setAttribute("height", 0.5);
    this.HonoluluBoxButton.setAttribute("depth", 0.5);
    
    this.el.appendChild(this.HonoluluBoxButton);

    this.HonoluluText = document.createElement("a-text");
    this.HonoluluText.setAttribute("position", {x: -2.5, y: 2, z: -2});
    this.HonoluluText.setAttribute("rotation", "15 45 0");
    this.HonoluluText.setAttribute("color", "#ffff00");
    this.HonoluluText.setAttribute("font", "sourcecodepro");
    this.HonoluluText.setAttribute("value", "Honolulu Time Zone");

    this.el.appendChild(this.HonoluluText);
    //New York time button and text
    this.NewYorkBoxButton = document.createElement("a-box");
    this.NewYorkBoxButton.setAttribute("id", "NewYorkButton");
    this.NewYorkBoxButton.setAttribute("position", {x: 2.5, y: -1, z: -3 });
    this.NewYorkBoxButton.setAttribute("rotation", "0 0 0");
    this.NewYorkBoxButton.setAttribute("width", 0.5);
    this.NewYorkBoxButton.setAttribute("height", 0.5);
    this.NewYorkBoxButton.setAttribute("depth", 0.5);
    
    this.el.appendChild(this.NewYorkBoxButton);

    this.NewYorkText = document.createElement("a-text");
    this.NewYorkText.setAttribute("position", {x: 2.5, y: 0, z: -3 });
    this.NewYorkText.setAttribute("align", "center")
    this.NewYorkText.setAttribute("rotation", "0 0 0");
    this.NewYorkText.setAttribute("color", "#ffff00");
    this.NewYorkText.setAttribute("font", "sourcecodepro");
    this.NewYorkText.setAttribute("value", "New York Time Zone");

    this.el.appendChild(this.NewYorkText);
    //Tokyo time button and text
    this.TokyoBoxButton = document.createElement("a-box");
    this.TokyoBoxButton.setAttribute("id", "TokyoButton");
    this.TokyoBoxButton.setAttribute("position", {x: 6.5, y: 1, z: -3});
    this.TokyoBoxButton.setAttribute("rotation", "15 325 0");
    this.TokyoBoxButton.setAttribute("width", 0.5);
    this.TokyoBoxButton.setAttribute("height", 0.5);
    this.TokyoBoxButton.setAttribute("depth", 0.5);
    
    this.el.appendChild(this.TokyoBoxButton);

    this.TokyoText = document.createElement("a-text");
    this.TokyoText.setAttribute("position", {x: 6.5, y: 2.5, z: -4.25});
    this.TokyoText.setAttribute("rotation", "15 325 0");
    this.TokyoText.setAttribute("color", "#ffff00");
    this.TokyoText.setAttribute("font", "sourcecodepro");
    this.TokyoText.setAttribute("value", "Tokyo Time Zone");

    this.el.appendChild(this.TokyoText);
    //London time button and text
    this.LondonBoxButton = document.createElement("a-box");
    this.LondonBoxButton.setAttribute("id", "LondonButton");
    this.LondonBoxButton.setAttribute("position", {x: 6.5, y: -1, z: -3});
    this.LondonBoxButton.setAttribute("rotation", "0 325 0");
    this.LondonBoxButton.setAttribute("width", 0.5);
    this.LondonBoxButton.setAttribute("height", 0.5);
    this.LondonBoxButton.setAttribute("depth", 0.5);
    
    this.el.appendChild(this.LondonBoxButton);

    this.LondonText = document.createElement("a-text");
    this.LondonText.setAttribute("position", {x: 6.5, y: 0, z: -4.25});
    this.LondonText.setAttribute("rotation", "0 325 0");
    this.LondonText.setAttribute("color", "#ffff00");
    this.LondonText.setAttribute("font", "sourcecodepro");
    this.LondonText.setAttribute("value", "London Time Zone");

    this.el.appendChild(this.LondonText);

    document.getElementById("LocalButton").addEventListener('click', function(evt){
      document.getElementById("timezoneText").setAttribute("value", "It is currently " + displayTime(now) + ".");
    });

    document.getElementById("HonoluluButton").addEventListener('click', function(evt){
      document.getElementById("timezoneText").setAttribute("value", "The time at Honolulu (Hawaii-Aleutian Standard Time) is currently " + displayTime(convertTimeZone(now,"Honolulu")) + ".");
    });

    document.getElementById("NewYorkButton").addEventListener('click', function(evt){
      document.getElementById("timezoneText").setAttribute("value", "The time at New York (Eastern Daylight Time) is currently " + displayTime(convertTimeZone(now, "New York")) + ".");
    });

    document.getElementById("TokyoButton").addEventListener('click', function(evt){
      document.getElementById("timezoneText").setAttribute("value", "The time at Tokyo (Japan Standard Time) is currently " + displayTime(convertTimeZone(now, "Tokyo")) + ".");
    });

    document.getElementById("LondonButton").addEventListener('click', function(evt){
      document.getElementById("timezoneText").setAttribute("value", "The time at London (Greenwich Mean Time) is currently " + displayTime(convertTimeZone(now, "London")) + ".");
    });

    //TODO: Use helper functions in timezone.js to display the current time and support converting time zones
    //For implementing interactivity, you may find .addEventListener() useful
    //https://aframe.io/docs/1.2.0/introduction/interactions-and-controllers.html#events
  },

  tick: function () {
  },
});

var now = spacetime.now();

console.log("It is currently " + displayTime(now) + " locally");
console.log(
  "It is currently " +
    displayTime(convertTimeZone(now, "London")) +
    " in London"
);
console.log(
  "2:42pm in local time is " +
    displayTime(convertTimeZone(getTime("2:42pm"), "Hawaii")) +
    " in Hawaii"
);
