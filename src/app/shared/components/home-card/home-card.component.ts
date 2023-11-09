import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/interfaces/home-card-params';

@Component({
  selector: 'app-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
/**
 * Component Card for home page
 */
export class HomeCardComponent {
  /**
   * Input property that receives card attributes from the parent component.
   * @type {ICard}
   */
  @Input() cardAttributes!: ICard;

  /**
   * Determines the visibility of the card based on the presence of a router link path.
   * @returns 'visible' if there's a empty path, 'hidden' otherwise.
   */
  showSoon(): string {
    return this.cardAttributes.path === '' ? 'visible' : 'hidden';
  }

  /**
   * Applies a CSS filter to the card image based on the presence of a router link path.
   * @returns 'grayscale(1)' if there's a empty path, 'none' otherwise.
   */
  filterImg(): string {
    return this.cardAttributes.path === '' ? 'grayscale(1)' : 'none';
  }

  /**
   * Checks if the card is disabled based on the presence of a router link path.
   * @returns `true` if there's  a empty path, `false` otherwise.
   */
  isDisabled(): boolean {
    return this.cardAttributes.path === '' ? true : false;
  }
}
