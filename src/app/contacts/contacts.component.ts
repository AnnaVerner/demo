import { Component, OnInit } from '@angular/core';
declare let L;
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    var geojson = [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [30.4, 50.4]
        },
        properties: {
          'marker-color': '2196F3',
          title: 'visit iur office',
          description: 'office address'
        }
      }
    ];

    L.mapbox.accessToken = 'pk.eyJ1IjoiZGlhbnRodXMiLCJhIjoiY2pramlpanY2MTh4ZzNwdWs3dHJwNHp3ciJ9.G4MHcw-JI6voQ8PX0divEg';
    var mapGeo = L.mapbox.map('map_geo', 'mapbox.light')
      .setView([50.446689, 30.49522426], 20);

    var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(mapGeo);
    mapGeo.scrollWheelZoom.disable();
    L.mapbox.styleLayer('mapbox://styles/mapbox/light-v9').addTo(mapGeo);
    document.getElementsByClassName('leaflet-control-container')[0].firstChild.className = "leaflet-top leaflet-right";

  }

}
