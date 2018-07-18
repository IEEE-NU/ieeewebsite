import { Injectable } from '@angular/core';

import { headshotItem } from './headshotItem';
import { headshotItems } from './headshots';
import { projmentorheadshots } from './proj-mentor-headshots';
@Injectable()
export class HeadshotService {
    getHeadshotItems(): Promise<headshotItem[]> {
        return Promise.resolve(headshotItems);
    }
    getProjMentorHeadshots(): Promise<headshotItem[]> {
        return Promise.resolve(projmentorheadshots);
    }
}
