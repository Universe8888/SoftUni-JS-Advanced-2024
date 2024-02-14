// window.addEventListener('load', solution);

// function solution() {
//   const addBtn = document.getElementById('add-btn');
//   const employeeInput = document.getElementById('employee');
//   const categorySelect = document.getElementById('category');
//   const urgencySelect = document.getElementById('urgency');
//   const teamSelect = document.getElementById('team');
//   const descriptionInput = document.getElementById('description');
//   const previewList = document.querySelector('.preview-list');
//   const pendingList = document.querySelector('.pending-list');
//   const resolvedList = document.querySelector('.resolved-list');

//   addBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     if (!employeeInput.value || !categorySelect.value || !urgencySelect.value || !teamSelect.value || !descriptionInput.value) {
//       return; 
//     }

//     const listItem = document.createElement('li');
//     listItem.innerHTML = `
//       <span>${employeeInput.value} - ${categorySelect.value} - ${urgencySelect.value} - ${teamSelect.value} - ${descriptionInput.value}</span>
//       <button class="edit-btn">Edit</button>
//       <button class="continue-btn">Continue</button>
//     `;

//     previewList.appendChild(listItem);
//     clearForm();

//     listItem.querySelector('.edit-btn').addEventListener('click', () => {
//       employeeInput.value = listItem.childNodes[0].nodeValue.split(' - ')[0];
//       categorySelect.value = listItem.childNodes[0].nodeValue.split(' - ')[1];
//       urgencySelect.value = listItem.childNodes[0].nodeValue.split(' - ')[2];
//       teamSelect.value = listItem.childNodes[0].nodeValue.split(' - ')[3];
//       descriptionInput.value = listItem.childNodes[0].nodeValue.split(' - ')[4];

//       previewList.removeChild(listItem);
//     });

//     listItem.querySelector('.continue-btn').addEventListener('click', () => {
//       const pendingListItem = listItem.cloneNode(true);
//       pendingListItem.removeChild(pendingListItem.querySelector('.edit-btn'));
//       pendingListItem.removeChild(pendingListItem.querySelector('.continue-btn'));
//       const resolvedBtn = document.createElement('button');
//       resolvedBtn.textContent = 'Resolved';
//       pendingListItem.appendChild(resolvedBtn);
//       pendingList.appendChild(pendingListItem);
//       previewList.removeChild(listItem);

//       resolvedBtn.addEventListener('click', () => {
//         const resolvedListItem = pendingListItem.cloneNode(true);
//         resolvedListItem.removeChild(resolvedListItem.querySelector('button'));
//         const clearBtn = document.createElement('button');
//         clearBtn.textContent = 'Clear';
//         resolvedListItem.appendChild(clearBtn);
//         resolvedList.appendChild(resolvedListItem);
//         pendingList.removeChild(pendingListItem);

//         clearBtn.addEventListener('click', () => {
//           resolvedList.removeChild(resolvedListItem);
//         });
//       });
//     });
//   });

//   function clearForm() {
//     employeeInput.value = '';
//     categorySelect.value = '';
//     urgencySelect.value = '';
//     teamSelect.value = '';
//     descriptionInput.value = '';
//     addBtn.disabled = true;
//     setTimeout(() => addBtn.disabled = false, 0); 
//   }
// }

window.addEventListener('load', solve);

function solve() {
  const formElements = {
      employee: document.getElementById('employee'),
      category: document.getElementById('category'),
      urgency: document.getElementById('urgency'),
      team: document.getElementById('team'),
      description: document.getElementById('description'),
      addButton: document.getElementById('add-btn'),
      previewList: document.querySelector('.preview-list'),
      pendingList: document.querySelector('.pending-list'),
      resolvedList: document.querySelector('.resolved-list')
  };

  formElements.addButton.addEventListener('click', function handleAddButtonClick(e) {
      e.preventDefault();
      if (validateInput()) {
          createPreviewItem();
          clearForm();
      } else {
          alert("All fields are required.");
      }
  });

  function validateInput() {
      return [formElements.employee, formElements.category, formElements.urgency, formElements.team, formElements.description].every(input => input.value.trim() !== '');
  }

  function createPreviewItem() {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span>${formElements.employee.value} - ${formElements.category.value} - ${formElements.urgency.value} - ${formElements.team.value} - ${formElements.description.value}</span>
                            <button class="edit-btn">Edit</button>
                            <button class="continue-btn">Continue</button>`;
      formElements.previewList.appendChild(listItem);

      listItem.querySelector('.edit-btn').addEventListener('click', function handleEditButtonClick() {
          editItem(listItem);
      });

      listItem.querySelector('.continue-btn').addEventListener('click', function handleContinueButtonClick() {
          continueToPending(listItem);
      });
  }

  function editItem(listItem) {
      const details = listItem.querySelector('span').textContent.split(' - ');
      [formElements.employee.value, formElements.category.value, formElements.urgency.value, formElements.team.value, formElements.description.value] = details;
      listItem.remove();
  }

  function continueToPending(listItem) {
      const pendingListItem = listItem.cloneNode(true);
      pendingListItem.querySelector('.edit-btn').remove();
      pendingListItem.querySelector('.continue-btn').remove();

      const resolvedBtn = document.createElement('button');
      resolvedBtn.textContent = 'Resolved';
      pendingListItem.appendChild(resolvedBtn);
      formElements.pendingList.appendChild(pendingListItem);
      listItem.remove();

      resolvedBtn.addEventListener('click', function handleResolvedButtonClick() {
          moveToResolved(pendingListItem);
      });
  }

  function moveToResolved(listItem) {
      const resolvedListItem = listItem.cloneNode(true);
      resolvedListItem.querySelector('button').remove();

      const clearBtn = document.createElement('button');
      clearBtn.textContent = 'Clear';
      resolvedListItem.appendChild(clearBtn);
      formElements.resolvedList.appendChild(resolvedListItem);

      clearBtn.addEventListener('click', function handleClearButtonClick() {
          resolvedListItem.remove();
      });
  }

  function clearForm() {
      [formElements.employee, formElements.category, formElements.urgency, formElements.team, formElements.description].forEach(input => input.value = '');
  }
}