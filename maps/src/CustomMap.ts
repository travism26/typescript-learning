import { User } from "./User";
import { Company } from "./Company";
// Ideal you would name this `Map.ts` but I wanna make it clear 
// that its seperate from `google map` package.

// Instructions to every other class
// on how they can be an argument to `addMarker`
export interface  Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

// This class is a wrapper for google.maps.map goal to limit access to the google functions
export class CustomMap {
  // limit access to the map object to prevent others from breaking the app
  // no one can reach into the instance of this map and break stuff.
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat:0,
        lng:0
      }
    });
  }

  // Separate extensible behaviour behind an interface and flip the dependencies
  /**
   * This method is simple take a mappable object and display it on the map
   * @param mappable Object that implements the mappable interface can be mapped on our map
   */
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }


  /**
   * This approach works however there are a downside to this
   * approach what if we wanted to show additional markers?
   * Ex: parks, carLots, ...etc we would have the | the additional
   * class to this method. There is a tight coupling between this map
   * class and every other class that we want to show on a map. 
   * @param mappable object thats a user or company
   */
  // addMarker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng
  //     }
  //   });
  // }

  // BAD APPROACH LOOK AT THE CODE ITS NEARLY DUPLICATED use interfaces to clean this up
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   });
  // }

  // BAD APPROACH LOOK AT THE CODE ITS NEARLY DUPLICATED use interfaces to clean this up
//   addCompanyMarker(company: Company): void {
//     new google.maps.Marker({
//       map: this.googleMap,
//       position: {
//         lat: company.location.lat,
//         lng: company.location.lng
//       }
//     });
//   }
}