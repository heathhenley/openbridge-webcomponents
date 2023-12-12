import { Component, Fragment, Prop, h } from '@stencil/core';

@Component({ tag: 'obc-clock', shadow: true, styleUrl: 'obc-clock.css' })
export class Clock {
  @Prop() date = "2021-01-01T11:11:11.111Z"
  @Prop() showDate = false;

  monthNames = ["Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"];

  render() {
    const date = new Date(this.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const day = date.getDate();
    const month = this.monthNames[date.getMonth()];
    const dateString = `${day} ${month}`;

    return (
      <Fragment>
        <div class="clock">{hoursString}<span class="ticks">:</span>{minutesString}</div>
        {this.showDate ? <div class="date">{dateString}</div> : null }
      </Fragment>
    )
  }

  ;
}


