import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MapMarkerModel } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { IItinerariesData } from 'src/app/interface/ItinerariesData';
import { ApiService } from 'src/app/services/core/api.service';
import { LocationService } from 'src/app/services/core/location.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-itinerary-preview',
  templateUrl: './itinerary-preview.component.html',
  styleUrl: './itinerary-preview.component.scss',
})
export class ItineraryPreviewComponent implements OnInit {
  initialLocation = { lat: 24.8607, lng: 67.0011 }; // Centered on California
  ICONS: { [key: string]: string } = ICONS;
  places: IItinerariesData[] = [];

  constructor(
    public locationService: LocationService,
    public apiService: ApiService,
    public cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.apiService.get('/assets/data.json').subscribe((data) => {
      this.places = data as IItinerariesData[];
      this.cdr.detectChanges();
    });
    this.locationService.getCurrentLocation().subscribe((location) => {
      this.initialLocation.lat = location.lat;
      this.initialLocation.lng = location.long;
    });
  }
  handleSearch(event: string): void {
    // Change parameter type to 'any' to accept event
  }
  mapType: google.maps.MapTypeId = google.maps.MapTypeId.ROADMAP;
  locationsMarkers: MapMarkerModel[] = [
    {
      icon: {
        url: 'assets/1.png#custom_pin_maps',
        size: new google.maps.Size(10, 10),
        scaledSize: new google.maps.Size(10, 10),
        anchor: null,
      },
      id: '1',
      omitMarkerCircle: false,
      position: this.initialLocation,
      radius: 100000,
    },
  ];

  onMapLoaded(event: Event): void {}

  toggleDrawingTool(): void {
    // Add your drawing tool toggle logic here
  }
}
