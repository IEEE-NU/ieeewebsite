import { Component, OnInit } from '@angular/core';
import { headshotItem } from '../headshot-control/headshotItem';
import { HeadshotService } from '../headshot-control/headshots.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HeadshotService]
})
export class HomeComponent implements OnInit {

  headshotItems: headshotItem[];
  constructor(private headshotService: HeadshotService) { }
  getHeadshotItems(): void {
    this.headshotService.getHeadshotItems().then(headshotItems => this.headshotItems = headshotItems);
  }

  ngOnInit(): void {
    this.getHeadshotItems();
    $(document).ready(function () {
      $('#ieee-logo').removeClass('hidden');
      $('#ieee-logo').addClass('animated fadeIn');
      setTimeout(function () {
        $('#title').removeClass('hidden');
        $('#title').addClass('animated fadeIn');
      }, 500);
      setTimeout(function () {
        $('#tagline').removeClass('hidden');
        $('#tagline').addClass('animated bounceIn');
      }, 1000);
    });
  }
}


