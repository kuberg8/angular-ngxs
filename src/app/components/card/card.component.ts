import { Component, Input, OnInit } from "@angular/core";

interface ICard {
  avatarUrl: string;
  name: string;
  telephone: string;
  email: string;
  address: string;
  jobTitle: string;
}

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() card: ICard;

  ngOnInit(): void {}
}
