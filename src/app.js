import { LightningElement } from "lwc";

export default class App extends LightningElement {
  inputChanged(){
    // row values
    this.template.querySelector('.c-effective').value = "17,000";
    this.template.querySelector('.c-discount').value = "13.40%";
    this.template.querySelector('.c-resource').value = "204,000";
    this.template.querySelector('.c-gm').value = "38.2%";
    // footer values
    this.template.querySelector('.c-f-proposed').textContent = "9299.2";
    this.template.querySelector('.c-f-effective').textContent = "7,468.4";
    this.template.querySelector('.c-f-discount').textContent = "15.30%";
    this.template.querySelector('.c-f-total').textContent = "10784400";

  }
}
