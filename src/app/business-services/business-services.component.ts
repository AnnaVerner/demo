import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss']
})
export class BusinessServicesComponent implements OnInit {
  businessDomains = [{
    name: {en: 'E-commerce', de: 'E-commerce'},
    description: {en: 'Electronic commerce is the activity of electronically buying or selling of products on online services or over the Internet.', de: 'electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. Electronic commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is in turn driven by the technological advances of the semiconductor industry, and is the largest sector of the electronics industry.'},
    src: './assets/img/ec.svg'
    },{
    name: {en: 'Embedded programming', de: 'Embedded programming'},
    description: {en: 'An embedded system is a controller with a dedicated function within a larger mechanical or electrical system.'},
    src: './assets/img/embedded.svg'
    },
    {
      name: {en: 'IoT', de: 'IoT'},
      description: {en: 'The Internet of Things is a system of interrelated computing devices, mechanical and digital machines and objects.',
        de: 'The Internet of Things (IoT) is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.'},
      src: './assets/img/iot.svg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
