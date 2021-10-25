/*
GIVEN I am using a daily planner to create a schedule

X 1. WHEN I open the planner
THEN the current day is displayed at the top of the calendar

2. WHEN I scroll down
THEN I am presented with time blocks for standard business hours

3. WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

4. WHEN I click into a time block
THEN I can enter an event

5. WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

6. WHEN I refresh the page
THEN the saved events persist

*/

var currentDay = dayjs().format()
var date = dayjs().format('MMMM D, YYYY');
var today = dayjs().format('dddd');

document.getElementById('currentDay').textContent = today + ", " + date

// time , event name, save button

for (let index = 0; index < 7; index++) {
  var hour = index + 9;
  var convertedHour = dayjs().hour(hour).format('h A');

  var divEl = document.createElement('div');
  var h2El = document.createElement('h2');

  divEl.classList.add('row');

  h2El.classList.add('hour');
  h2El.textContent = convertedHour;

  // stitch them all together
  divEl.appendChild(h2El);

  // specify the location of this bundle elements
  document.getElementById('main').appendChild(divEl)

}

{/* <div class="row">
      <h2 class="hour">9 AM</h2>
      <textarea class="event description">Sample event</textarea>
      <button id="save" class="saveBtn">💾</button>
    </div>
    <div class="row">
      <h2 class="hour">10 AM</h2>
      <textarea class="event description">Sample event</textarea>
      <button id="save" class="saveBtn">💾</button>
    </div> */}