import { h, T, c as colors, t as typography, r, _ as __decorate, n } from './panel-themes-491ca7e7.js';

let StylePage = class StylePage extends h {
    render() {
        return T `
      <div class="page">
        <div class="container">
          <h1 class="title display-2">Style Guide</h1>

          <h4 class="heading-4">Colors:</h4>
          <div class="row">
            <div class="color-box" style="--color: var(--primary-1)"></div>
            <div class="color-box" style="--color: var(--primary-2)"></div>
            <div class="color-box" style="--color: var(--primary-3)"></div>
            <div class="color-box" style="--color: var(--primary-4)"></div>
            <div class="color-box" style="--color: var(--primary-5)"></div>
            <div class="color-box" style="--color: var(--primary-6)"></div>

            <div class="color-box" style="--color: var(--gray-1)"></div>
            <div class="color-box" style="--color: var(--gray-2)"></div>
            <div class="color-box" style="--color: var(--gray-3)"></div>
            <div class="color-box" style="--color: var(--gray-4)"></div>

            <div class="color-box" style="--color: var(--white-1)"></div>
          </div>

          <h4 class="heading-4">Typography:</h4>
          <div class="col">
            <h1 class="display-1">Display 1</h1>
            <h1 class="display-2">Display 2</h1>
            <h1 class="display-3">Display 3</h1>
            <h1 class="display-4">Display 4</h1>

            <h1 class="heading-1">Heading 1</h1>
            <h2 class="heading-2">Heading 2</h2>
            <h3 class="heading-3">Heading 3</h3>
            <h4 class="heading-4">Heading 4</h4>
            <h5 class="heading-5">Heading 5</h5>
            <h6 class="heading-6">Heading 6</h6>

            <p class="lead-text">Lead Text</p>
            <p class="body-text">Body Text</p>
            <p class="small-text">Small Text</p>
          </div>
        </div>
      </div>
    `;
    }
};
StylePage.styles = [
    colors,
    typography,
    r `
      .page {
        background-color: var(--gray-1);
        color: var(--white-1);
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
      }

      .container {
        padding: 4% 10%;
      }

      .title {
        text-align: center;
      }

      .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
      }

      .col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .color-box {
        width: 100px;
        height: 100px;
        margin: 10px;
        background-color: var(--color);
        border-radius: 10%;
        border-style: solid;
        border-width: 1px;
        border-color: #ffffff1a;
      }
    `
];
StylePage = __decorate([
    n('style-page')
], StylePage);

export { StylePage };
