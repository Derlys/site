import { Component } from '@angular/core';
import { UiLayout} from '@kikstart/ui'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: UiLayout = {
     brand: {
       name:"site",
       logo: "/assets/icono2.png"
     },
     header:{
       style: "dark",
       links: [
         {label:"Home", path:"/",icon:"fa-home"},
         {label:"About", path:"/about",icon:"fa-home"},
         {label:"Courses", path:"/courses",icon:"fa-home"},
         {label:"Contact", path:"/contact",icon:"fa-home"},
         {label:"Login", path:"/login",icon:"fa-home"},

       ]
     },
     content:{

    },
    footer:{
      html:"<small>copyright 2020</small>"
    }
  }
}
