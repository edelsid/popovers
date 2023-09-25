export default class Popover {
  constructor() {
    this.popovers = [];
  }

  showPopover(element) {
    const popoverArea = document.createElement('div');
    popoverArea.innerHTML = `
      <h3 class="popoverHeader">Popover title</h3>
      <div class ="message">And here's some amazing content. It's very engaging. Right?</div>`;

    popoverArea.classList.add('popoverArea');

    const id = performance.now();
    this.popovers.push({
      id,
      element: popoverArea,
    });

    document.body.appendChild(popoverArea);

    const { left, top } = element.getBoundingClientRect();
    popoverArea.style.left = `${left / 2}px`;
    popoverArea.style.top = `${top - popoverArea.offsetHeight - 10.5}px`;

    return id;
  }

  hidePopover(id) {
    const popover = this.popovers.find((p) => p.id === id);
    if (popover.element !== undefined) {
      popover.element.remove();
    }
    this.popovers = this.popovers.filter((p) => p.id !== id);
  }
}
