import mapboxgl from "mapbox-gl";

export const buildMarker = function (type, lat) {
  type = type.toLowerCase();
  let url = "";
  if (type === "activity") {
    url = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if (type === "hotel") {
    url = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === "restaurant") {
    url = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  let markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = url;

  let ans = new mapboxgl.Marker(markerDomEl).setLngLat(lat);
  console.log(ans);
  return ans;
};
