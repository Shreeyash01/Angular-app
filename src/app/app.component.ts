import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentTime: string;

  constructor() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  private updateTime() {
    const date = new Date();
    const hours = this.formatNumber(date.getHours());
    const minutes = this.formatNumber(date.getMinutes());
    const seconds = this.formatNumber(date.getSeconds());
    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }

  private formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
