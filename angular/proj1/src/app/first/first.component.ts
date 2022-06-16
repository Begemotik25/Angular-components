import { Component } from '@angular/core';
@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss']
})
export class FirstComponent{
    objectVal = {
        name: 'Alina',
        lastname: 'Haisiuk',
        age: 19
    }
}