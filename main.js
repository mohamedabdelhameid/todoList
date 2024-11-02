// let task_name = document.getElementById('taskName');
// let task_detail = document.getElementById('taskDetail');
// let from_date = document.getElementById('Datefrom');
// let to_date = document.getElementById('Dateto');
// let addBtn = document.getElementById('btnAdd');
// let btnUpdate = document.getElementById('updateBtn');
// let div_to_details_task = document.getElementById('DetailsTASKS');
// let div_to_head_of_table = document.getElementById('tableHead');
// let div_to_detail_of_table = document.getElementById('tableDetail');


// let arrProjects = localStorage.Task ? JSON.parse(localStorage.Task) : [];
// let currentIndex = null; // To track the student index for updating

// function createOrUpdateStu() {
//   if (task_name.value && task_detail.value) {
//     let taskData = {
//       taskName: task_name.value,
//       taskDetail: task_detail.value,
//     };
    
//     if (currentIndex === null) {
//       // Add new student
//       arrProjects.push(taskData);
//     } else {
//       // Update existing student
//       arrProjects[currentIndex] = taskData;
//       currentIndex = null; // Reset index after updating
//       addBtn.classList.remove('addNone'); // Show 'Add' button
//       btnUpdate.classList.add('addNone'); // Hide 'Update' button
//     }

//     localStorage.setItem("Tasks", JSON.stringify(arrProjects));
//     clearData();
//     addStu();
//   } else {
//     window.alert('Please fill all fields.');
//   }
// }

// // Clear Data Function
// function clearData() {
//   taskName.value = '';
//   taskDetail.value = '';
// }


// // Function to display all students
// function addStu() {
//   let tabl = ""; // Reset `tabl` to avoid appending old data
//   if (arrProjects.length > 0) {
//     div_to_details_task.innerHTML = `
//       <h4 class="p-3 fw-bold text-center text-warning">
//         Number Of Tasks: <span class="text-light">${arrProjects.length}</span> Task
//       </h4>
//       <button type="button" class="btn btn-danger col-4 align-items-center rounded-pill w-100" onclick="removeings()">Remove all</button>
//     `;
//     div_to_head_of_table.innerHTML = `
//       <hr class="text-light" />
//       <div class="row align-items-center mt-4 justify-content-between">
//         <h3 class="col-2 text-center">Id</h3>
//         <h3 class="col-6 text-center">Task Name</h3>
//         <h3 class="col-4 text-center">details</h3>
//       </div>
//     `;

//     for (let i = 0; i < arrProjects.length; i++) {
//       let modalId = `exampleModalCenter${i}`;

//       tabl += `
//         <div class="div task1 row m-4">
//           <h3 class="col-2 text-center">${i + 1}</h3>
//           <h3 class="col-6">${arrProjects[i].taskName}</h3>
//           <button id="btnShowMore${i}" type="button" class="btn btn-primary col-4 align-items-center rounded-pill" data-bs-toggle="modal" data-bs-target="#${modalId}">Show more</button>


//           <!-- Modal with unique ID for each student -->
//           <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle${i}" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered" role="document">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h5 class="modal-title" id="exampleModalLongTitle${i}">More Details</h5>
//                 </div>
//                 <div class="modal-body">
//                   <p>Task Name: ${arrProjects[i].taskName}</p>
//                   <p>Task Details: ${arrProjects[i].taskDetail}</p>
//                 </div>
//                 <div class="modal-footer">
//                   <button type="button" class="btn btn-secondary" onclick="editStudent(${i})" data-bs-dismiss="modal">Update</button>
//                   <button type="button" class="btn btn-danger" onclick="removeing(${i})" data-bs-dismiss="modal">Remove</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;
//     }
//     div_to_detail_of_table.innerHTML = tabl;
//   } else {
//     div_to_details_task.innerHTML = `<p class="text-center text-danger fs-3 p-3">No students found. Please add a student.</p>`;
//     div_to_detail_of_table.innerHTML = ""; // Clear table if no students
//   }
// }


// // Edit Student Function
// function editStudent(index) {
//   currentIndex = index; // Set the global index to the student being edited
//   const taskl = arrProjects[index];

//   // Populate the form fields with the selected student's data
//   taskName.value = taskl.firstName;
//   taskDetail.value = taskl.lastName;

//   // Switch visibility of Add and Update buttons
//   addBtn.classList.add('addNone');  // Hide 'Add' button
//   btnUpdate.classList.remove('addNone');  // Show 'Update' button
//   // location.reload(true);
// }


// // Initial Call to Display Students
// addStu();

// // Add Student Button Event Listener
// addBtn.addEventListener("click", createOrUpdateStu);

// // Update Student Button Event Listener
// btnUpdate.addEventListener("click", createOrUpdateStu);


// // Function to remove all students
// function removeings() {
//   arrProjects = []; // Clear the array
//   localStorage.setItem("Tasks", JSON.stringify(arrProjects)); // Update local storage
//   addStu(); // Refresh the student list to reflect the removal
//   location.reload(true);
// }

// // Function to remove a single student
// function removeing(i) {
//   arrProjects.splice(i, 1); // Remove the item at index `i`
//   localStorage.setItem("Tasks", JSON.stringify(arrProjects)); // Update local storage
//   addStu(); // Refresh the student list to reflect the removal
//   location.reload(true);
// }




let task_name = document.getElementById('taskName');
let task_detail = document.getElementById('taskDetail');
let from_date = document.getElementById('Datefrom');
let to_date = document.getElementById('Dateto');
let addBtn = document.getElementById('btnAdd');
let btnUpdate = document.getElementById('updateBtn');
let div_to_details_task = document.getElementById('DetailsTASKS');
let div_to_head_of_table = document.getElementById('tableHead');
let div_to_detail_of_table = document.getElementById('tableDetail');

let arrProjects = localStorage.Task ? JSON.parse(localStorage.Task) : [];
let currentIndex = null; // To track the task index for updating

function createOrUpdateTask() {
  if (task_name.value && task_detail.value) {
    let taskData = {
      taskName: task_name.value,
      taskDetail: task_detail.value,
    };
    
    if (currentIndex === null) {
      // Add new task
      arrProjects.push(taskData);
    } else {
      // Update existing task
      arrProjects[currentIndex] = taskData;
      currentIndex = null; // Reset index after updating
      addBtn.classList.remove('addNone'); // Show 'Add' button
      btnUpdate.classList.add('addNone'); // Hide 'Update' button
    }

    localStorage.setItem("Task", JSON.stringify(arrProjects));
    clearData();
    displayTasks();
  } else {
    window.alert('Please fill all fields.');
  }
}

// Clear Data Function
function clearData() {
  task_name.value = '';
  task_detail.value = '';
}

// Function to display all tasks
function displayTasks() {
  let tabl = ""; // Reset `tabl` to avoid appending old data
  if (arrProjects.length > 0) {
    div_to_details_task.innerHTML = `
      <h4 class="p-3 fw-bold text-center text-warning">
        Number Of Tasks: <span class="text-light">${arrProjects.length}</span> Task
      </h4>
      <button type="button" class="btn btn-danger col-4 align-items-center p-3 rounded-pill w-100" onclick="removeAllTasks()">Remove all</button>
    `;
    div_to_head_of_table.innerHTML = `
      <hr class="text-light" />
      <div class="row align-items-center mt-4 justify-content-between">
        <h3 class="col-2 text-center">Id</h3>
        <h3 class="col-6 text-center">Task Name</h3>
        <h3 class="col-4 text-center">Details</h3>
      </div>
    `;

    for (let i = 0; i < arrProjects.length; i++) {
      let modalId = `exampleModalCenter${i}`;

      tabl += `
        <div class="div task1 row m-4">
          <h3 class="col-2 text-center">${i + 1}</h3>
          <h3 class="col-6">${arrProjects[i].taskName}</h3>
          <button id="btnShowMore${i}" type="button" class="btn btn-primary col-4 align-items-center rounded-pill" data-bs-toggle="modal" data-bs-target="#${modalId}">Show more</button>

          <!-- Modal with unique ID for each task -->
          <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle${i}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle${i}">More Details</h5>
                </div>
                <div class="modal-body">
                  <p><b>Task Name</b>: ${arrProjects[i].taskName}</p>
                  <p><b>Task Details</b>: ${arrProjects[i].taskDetail}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" onclick="editTask(${i})" data-bs-dismiss="modal">Update</button>
                  <button type="button" class="btn btn-danger" onclick="removeTask(${i})" data-bs-dismiss="modal">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    div_to_detail_of_table.innerHTML = tabl;
  } else {
    div_to_details_task.innerHTML = `<p class="text-center text-danger fs-3 p-3">No tasks found. Please add a task.</p>`;
    div_to_detail_of_table.innerHTML = ""; // Clear table if no tasks
  }
}

// Edit Task Function
function editTask(index) {
  currentIndex = index; // Set the global index to the task being edited
  const task = arrProjects[index];

  // Populate the form fields with the selected task's data
  task_name.value = task.taskName;
  task_detail.value = task.taskDetail;

  // Switch visibility of Add and Update buttons
  addBtn.classList.add('addNone');  // Hide 'Add' button
  btnUpdate.classList.remove('addNone');  // Show 'Update' button
}

// Initial Call to Display Tasks
displayTasks();

// Add Task Button Event Listener
addBtn.addEventListener("click", createOrUpdateTask);

// Update Task Button Event Listener
btnUpdate.addEventListener("click", createOrUpdateTask);

// Function to remove all tasks
function removeAllTasks() {
  arrProjects = []; // Clear the array
  localStorage.setItem("Task", JSON.stringify(arrProjects)); // Update local storage
  displayTasks(); // Refresh the task list to reflect the removal
  location.reload(true);
}

// Function to remove a single task
function removeTask(i) {
  arrProjects.splice(i, 1); // Remove the item at index `i`
  localStorage.setItem("Task", JSON.stringify(arrProjects)); // Update local storage
  displayTasks(); // Refresh the task list to reflect the removal
  location.reload(true);
}
