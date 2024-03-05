import { Component } from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrl: './checker.component.scss'
})
export class CheckerComponent {
  /*
  passive: number = 0;
  active: number = 0;
  capital: number = 0;
  /*active: number | null = 0;*/

  /*



  activeValues: number[] = [];
  passiveValues: number[] = [];
  capitalValues: number[] = [];*/

  activeValue: number = 0;
  activeDescription: string = '';

  passiveValue: number = 0;
  passiveDescription: string = '';

  capitalValue: number = 0;
  capitalDescription: string = '';

  activeValues: {description: string, value: number}[] = [];
  passiveValues: {description: string, value: number}[] = [];
  capitalValues: {description: string, value: number}[] = [];

  constructor() {}

  addActive() {
    if (!isNaN(this.activeValue)) {
      this.activeValues.push({description: String(this.activeDescription), value: Number(this.activeValue)});
      this.activeValue = 0;
      this.activeDescription = '';
    }
  }

  addPassive() {
    if (!isNaN(this.passiveValue)) {
      this.passiveValues.push({description: String(this.passiveDescription), value: Number(this.passiveValue)});
      this.passiveValue = 0;
      this.passiveDescription = '';
    }
  }

  addCapital() {
    if (!isNaN(this.capitalValue)) {
      this.capitalValues.push({description: String(this.capitalDescription), value: Number(this.capitalValue)});
      this.capitalValue = 0;
      this.capitalDescription = '';
    }
  }

  isBalanceCorrect(): boolean {
    return this.checkBalance();
  }

  private checkBalance(): boolean {
    const totalActive = this.activeValues.reduce((total, item) => total + item.value, 0);
    const totalPassive = this.passiveValues.reduce((total, item) => total + item.value, 0);
    const totalCapital = this.capitalValues.reduce((total, item) => total + item.value, 0);
    return totalActive + totalPassive === totalCapital;
  }

  /*
  addPassive(): void {
    this.passiveValues.push(Number(this.passive)); // Convierte el valor a número
    this.passive = 0;
  }

  addActive(): void {
    this.activeValues.push(Number(this.active)); // Convierte el valor a número
    this.active = 0;
  }

  addCapital(): void {
    this.capitalValues.push(Number(this.capital)); // Convierte el valor a número
    this.capital = 0;
  }

  isBalanceCorrect(): boolean {
    return this.checkBalance();
  }

  private checkBalance(): boolean {
    const totalActive = this.activeValues.reduce((a, b) => a + b, 0);
    const totalPassive = this.passiveValues.reduce((a, b) => a + b, 0);
    const totalCapital = this.capitalValues.reduce((a, b) => a + b, 0);
    return totalActive + totalPassive === totalCapital;
  }*/
}
