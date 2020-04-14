const next_btn = document.querySelector(".next");
const previous_btn = document.querySelector(".previous");

const wrapper = document.querySelector(".scrolling-wrapper");

let scrollMovePoint = 0;
const max_scroll = wrapper.scrollWidth;

function test(event) {
  let operand = 300;

  // Calculate the number to move.
  if (event.target.classList.contains("next")) {
    if (scrollMovePoint < max_scroll) {
      scrollMovePoint = scrollMovePoint + operand;
    }
  } else if (event.target.classList.contains("previous")) {
    if (0 < scrollMovePoint) {
      scrollMovePoint = scrollMovePoint - operand;
    }
  }

  // Move the scroll bar to the value.
  wrapper.scroll(scrollMovePoint, 0);
}
next_btn.addEventListener("click", test);
previous_btn.addEventListener("click", test);
