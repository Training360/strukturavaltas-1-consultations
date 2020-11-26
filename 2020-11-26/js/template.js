// const fn = () => { console.log('Hi'); }
const obj = {
    message: 'something',
    fn() {
        console.log(this);
    }
}

const template = `
        <div class="container">
            <div class="row">
                <div class="col">
                    <col>
                    <p class="text">content</p>
                    <p class="text">content</p>
                    <p class="text">content</p>
                    <p class="text">content</p>
                    <p class="text">content</p>
                </div>
            </div>
        </div>`;

document.querySelector('body').insertAdjacentHTML('beforeend', template);

const container = document.createElement('div');
container.setAttribute('class', 'container');
const row = document.createElement('div');
row.setAttribute('class', 'row');
const col = document.createElement('div');
col.setAttribute('class', 'col');
row.appendChild(col);
container.appendChild(row);

const btn = document.querySelector('.btn');
const fn1 = () => { console.log('fn1'); }
const fn2 = () => { console.log('fn2'); }
// btn.addEventListener('click', () => { fn1(), fn2() });

let counter = 0;

const customHandler = () => {
    if (counter === 0) {
        console.log('0');
    }
    console.log('1');
}

btn.addEventListener('click', customHandler);
btn.addEventListener('click', fn2);
