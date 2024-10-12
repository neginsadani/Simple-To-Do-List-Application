"use strict";
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("لطفاً یک کار وارد کنید!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `${taskText} <button class="delete-btn">حذف</button>`;

  taskList.append(listItem);

  taskInput.value = "";

  const deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
});

clearAllBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
});
