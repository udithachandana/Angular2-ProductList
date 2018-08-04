import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: 'star-rating',
    templateUrl: './star-rating.component.html'
})
export class StarRatingComponent implements OnInit {
    @Input() rating: number;
    @Input() id: number;
    ratingStars: object[];

    @Output() notifyLikeStatus: EventEmitter<number[]> = new EventEmitter<number[]>();

    onLikeStatusClick = function (status: boolean): void {
        if (status) {
            if (this.rating == 5) {
                return;
            }
            this.rating++;
        }
        else {
            if (this.rating == 0) {
                return;
            }
            this.rating--;
        }
        this.populateRatingStars();
        this.notifyLikeStatus.emit([this.id, this.rating]);
    }

    ngOnInit(): void {
        this.populateRatingStars();
    }

    populateRatingStars(): void {
        this.ratingStars = [];
        for (let i = 0; i < this.rating; i++) {
            this.ratingStars.push({});
        }
    }
}