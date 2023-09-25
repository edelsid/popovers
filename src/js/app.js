import Popover from './Popover';

const form = document.querySelector('.form');
const popover = new Popover();

let activeMsg = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (activeMsg.length !== 0) {
    popover.hidePopover(activeMsg[0]);
    activeMsg = [];
    return false;
  }
  activeMsg.push(popover.showPopover(e.submitter));
  return true;
});
