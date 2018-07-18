import { Component, OnInit } from '@angular/core';
import { headshotItem } from '../headshot-control/headshotItem';
import { HeadshotService } from '../headshot-control/headshots.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [HeadshotService]
})
export class ExploreComponent implements OnInit {

  projMentorHeadshots: headshotItem[];
  constructor(private headshotService: HeadshotService) { }
  getProjMentorHeadshots(): void {
    this.headshotService.getProjMentorHeadshots().then(headshotItems => this.projMentorHeadshots = headshotItems);
  }

  ngOnInit(): void {
    this.getProjMentorHeadshots();
  }
}
