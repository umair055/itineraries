import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent implements OnInit {
  isFilter: boolean = false;
  filterClass = "filterSideBar";
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.sideBarItem.forEach((element: any) => {
      if (element.selected) {
        this.router.navigate([element.url]);
      }
    });
  }
  sideBarItem: any[] = [
    {
      id: 1,
      name: "Explore",
      selected: true,
      cssClass: "active",
      url: "/dashboard/itineraries/explore",
    },
    {
      id: 2,
      name: "Builder",
      selected: false,
      cssClass: "",
      url: "/dashboard/itineraries/explore",
    },
    {
      id: 3,
      name: "Favourite",
      selected: false,
      cssClass: "",
      url: "/dashboard/itineraries/explore",
    },
  ];

  selectItem(item: any) {
    this.sideBarItem.forEach((element: any) => {
      element.selected = false;
      element.cssClass = "";
    });
    item.selected = true;
    item.cssClass = "active";
  }
}
