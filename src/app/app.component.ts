import { Component } from '@angular/core';
import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web-worker-test';

  runWorker() {
    const worker = new Worker('./prime-calculations.worker', {
        type: 'module'
    });
    worker.onmessage = ({ data }) => {
      console.log('From Web Worker:', data);
    };
    const omar = 'omar';
    worker.postMessage({omar});
  }
  runThread() {
    const arePrimeList = primeNumberList.map((prime) => {
        return isPrimeNumber(prime);
    });
    console.log('From Javascript Thread', arePrimeList);
  }

  test() {
    console.log('teeeest');
  }
}
