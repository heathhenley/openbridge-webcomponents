import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';
import Placeholder from '../../assets/icons/01-placeholder.svg';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The event when clicked
   */
  @Event() myEvent: EventEmitter<{id: number}>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}
      <button onClick={() => this.myEvent.emit({id: 2})} innerHTML={Placeholder}></button>
    </div>;
  }
}
