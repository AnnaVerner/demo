import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
declare let L;
import { token } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/light-v10';
  email = 'hello@autom8now.com';
  disabled = true;
  URL = `https://formspree.io/${this.email}`;
  lng = 30.5238;
  lat = 50.45466;

  validate(event){
    // @ts-ignore
    if (document.getElementById('form').checkValidity()){
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
  geojson = [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [this.lng, this.lat]
      },
      properties: {
        'marker-color': '689F38',
        title: 'We are here :)',
        description: 'Come and visit!'
      }
    }
  ];
  constructor() { }
  ngOnInit() {


    // @ts-ignore
    mapboxgl.accessToken = token.key;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat]
    });
    // Add map controls

    let marker = new mapboxgl.Marker({color:'#689F38'})
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
  }

}
