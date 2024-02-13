window.addEventListener('load', solve);

// function solve() {
//     const nextButton = document.getElementById('next-btn');
//     const firstNameInput = document.getElementById('first-name');
//     const lastNameInput = document.getElementById('last-name');
//     const peopleCountInput = document.getElementById('people-count');
//     const fromDateInput = document.getElementById('from-date');
//     const daysCountInput = document.getElementById('days-count');
//     const ticketInfoList = document.querySelector('.ticket-info-list');
//     const confirmTicketList = document.querySelector('.confirm-ticket');

//     nextButton.addEventListener('click', function(e) {
//         e.preventDefault();  // Prevent form submission
        
//         // Validation
//         if (!firstNameInput.value.trim() || !lastNameInput.value.trim() ||
//             !peopleCountInput.value.trim() || !fromDateInput.value.trim() ||
//             !daysCountInput.value.trim() || parseInt(peopleCountInput.value, 10) <= 0 ||
//             parseInt(daysCountInput.value, 10) <= 0) {
//             return; // One of the fields is empty or not positive, do nothing.
//         }

//         // Display ticket info
//         const ticketItem = document.createElement('li');
//         ticketItem.className = 'ticket';
//         ticketItem.innerHTML = `
//             <article>
//                 <h3>Name: ${firstNameInput.value} ${lastNameInput.value}</h3>
//                 <p>From date: ${fromDateInput.value}</p>
//                 <p>For ${daysCountInput.value} days</p>
//                 <p>For ${peopleCountInput.value} people</p>
//             </article>
//             <button class="edit-btn">Edit</button>
//             <button class="continue-btn">Continue</button>
//         `;

//         ticketInfoList.appendChild(ticketItem);

//         // Clear input fields and disable next button
//         firstNameInput.value = '';
//         lastNameInput.value = '';
//         peopleCountInput.value = '';
//         fromDateInput.value = '';
//         daysCountInput.value = '';
//         nextButton.disabled = true;

//         // Edit button functionality
//         ticketItem.querySelector('.edit-btn').addEventListener('click', function() {
//             firstNameInput.value = ticketItem.querySelector('h3').textContent.replace('Name: ', '');
//             lastNameInput.value = '';
//             peopleCountInput.value = ticketItem.querySelector('p:nth-child(3)').textContent.replace('For ', '').replace(' days', '');
//             fromDateInput.value = ticketItem.querySelector('p:nth-child(2)').textContent.replace('From date: ', '');
//             daysCountInput.value = ticketItem.querySelector('p:nth-child(3)').textContent.replace('For ', '').replace(' people', '');
            
//             nextButton.disabled = false;
//             ticketItem.remove();
//         });

//         // Continue button functionality
//         ticketItem.querySelector('.continue-btn').addEventListener('click', function() {
//             confirmTicketList.appendChild(ticketItem);
//             ticketItem.querySelector('.edit-btn').remove();
//             ticketItem.querySelector('.continue-btn').remove();

//             const confirmBtn = document.createElement('button');
//             confirmBtn.className = 'confirm-btn';
//             confirmBtn.textContent = 'Confirm';
//             ticketItem.appendChild(confirmBtn);

//             const cancelBtn = document.createElement('button');
//             cancelBtn.className = 'cancel-btn';
//             cancelBtn.textContent = 'Cancel';
//             ticketItem.appendChild(cancelBtn);

//             // Cancel button functionality
//             cancelBtn.addEventListener('click', function() {
//                 ticketInfoList.appendChild(ticketItem);
//                 ticketItem.appendChild(ticketItem.querySelector('.edit-btn'));
//                 ticketItem.appendChild(ticketItem.querySelector('.continue-btn'));
//                 confirmBtn.remove();
//                 cancelBtn.remove();
//             });
//                 // Confirm button functionality
//             confirmBtn.addEventListener('click', function() {
//             // Remove everything from the 'confirm-ticket' list
//                 while (confirmTicketList.firstChild) {
//                             confirmTicketList.removeChild(confirmTicketList.firstChild);
//                         }
            
//                 // Move the ticket item to 'confirm-ticket' list
//                 confirmTicketList.appendChild(ticketItem);
//                 ticketItem.className = 'ticket-content'; // Update class for styling if needed
            
//                 // Remove the 'Edit' and 'Continue' buttons if they exist
//                 const editButton = ticketItem.querySelector('.edit-btn');
//                 const continueButton = ticketItem.querySelector('.continue-btn');
//                 if (editButton) editButton.remove();
//                 if (continueButton) continueButton.remove();
            
//                 // Create and add the 'Confirm' and 'Cancel' buttons
//                 const confirmButton = document.createElement('button');
//                 confirmButton.className = 'confirm-btn';
//                 confirmButton.textContent = 'Confirm';
//                 ticketItem.appendChild(confirmButton);
            
//                 const cancelButton = document.createElement('button');
//                 cancelButton.className = 'cancel-btn';
//                 cancelButton.textContent = 'Cancel';
//                 ticketItem.appendChild(cancelButton);
            
//                 // Add event listeners for the 'Confirm' and 'Cancel' buttons
//                 confirmButton.addEventListener('click', function() {
//                     // Replace the main section with the thank you message
//                     const main = document.getElementById('main');
//                     main.style.display = 'none'; // Hide the main section
                                
//                     const thankYouMessage = document.createElement('div');
//                     thankYouMessage.innerHTML = `
//                         <h1 id="thank-you">Thank you, have a nice day!</h1>
//                         <button id="back-btn">Back</button>
//                             `;
//                     document.body.appendChild(thankYouMessage);
            
//                     // Add event listener for the 'Back' button
//                     document.getElementById('back-btn').addEventListener('click', function() {
//                     window.location.reload(); // Reload the page
//                             });
//                     });
            
//             cancelButton.addEventListener('click', function() {
//                 ticketItem.remove(); // Remove the ticket item from the confirm section
//                 nextButton.disabled = false; // Enable the 'Next step' button again
//                 });
//             });
//         });
//     });
// }

// 88/100

// second solution

function solve () {
    const nextBtnElement = document.getElementById('next-btn');
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const peopleCountElement = document.getElementById('people-count');
    const fromDateElement = document.getElementById('from-date');
    const daysCountElement = document.getElementById('days-count');
    const ticketInfoListElement = document.querySelector('.ticket-info-list');
    const confirmListElement = document.querySelector('.confirm-ticket');
    const body = document.querySelector('body');
    const main = document.getElementById('main');
    const continueBtn = document.querySelector('.continue-btn');
    const backBtn = document.getElementById('back-btn');
    const thankYou = document.getElementById('thank-you');

    nextBtnElement.addEventListener('click', onNext);
    function onNext(e) {
        e.preventDefault();
        if (!firstNameElement.value.trim() || !lastNameElement.value.trim() || !peopleCountElement.value.trim() || !fromDateElement.value.trim() || !daysCountElement.value.trim() || Number(peopleCountElement.value) <= 0 || Number(daysCountElement.value) <= 0) {
            return;
        }

        let liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'ticket');
        let articleElementInfo = document.createElement('article');
        articleElementInfo.innerHTML = `<h3>Name: ${firstNameElement.value} ${lastNameElement.value}</h3><p>From date: ${fromDateElement.value}</p><p>For ${daysCountElement.value} days</p><p>For ${peopleCountElement.value} people</p>`;
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';
        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);
        ticketInfoListElement.appendChild(liElementInfo);
        firstNameElement.value = '';
        lastNameElement.value = '';
        peopleCountElement.value = '';
        fromDateElement.value = '';
        daysCountElement.value = '';
        nextBtnElement.disabled = true;
        
        editBtn.addEventListener('click', onEdit);
        function onEdit() {
            firstNameElement.value = articleElementInfo.children[0].textContent.split(' ')[1];
            lastNameElement.value = articleElementInfo.children[0].textContent.split(' ')[2];
            peopleCountElement.value = articleElementInfo.children[3].textContent.split(' ')[1];
            fromDateElement.value = articleElementInfo.children[1].textContent.split(' ')[2];
            daysCountElement.value = articleElementInfo.children[2].textContent.split(' ')[1];
            nextBtnElement.disabled = false;
            liElementInfo.remove();
        }
        continueBtn.addEventListener('click', onContinue);
        function onContinue() {
            confirmListElement.appendChild(liElementInfo);
            liElementInfo.removeChild(editBtn);
            liElementInfo.removeChild(continueBtn);
            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';
            liElementInfo.appendChild(confirmBtn);
            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';
            liElementInfo.appendChild(cancelBtn);
            cancelBtn.addEventListener('click', onCancel);
            function onCancel() {
                ticketInfoListElement.appendChild(liElementInfo);
                liElementInfo.appendChild(editBtn);
                liElementInfo.appendChild(continueBtn);
                confirmBtn.remove();
                cancelBtn.remove();
            }
            confirmBtn.addEventListener('click', onConfirm);
            function onConfirm() {
                while (confirmListElement.firstChild) {
                    confirmListElement.removeChild(confirmListElement.firstChild);
                }
                confirmListElement.appendChild(liElementInfo);
                liElementInfo.className = 'ticket-content';
                let confirmBtn = liElementInfo.querySelector('.confirm-btn');
                let cancelBtn = liElementInfo.querySelector('.cancel-btn');
                confirmBtn.remove();
                cancelBtn.remove();
                let newConfirmBtn = document.createElement('button');
                newConfirmBtn.setAttribute('class', 'confirm-btn');
                newConfirmBtn.textContent = 'Confirm';
                liElementInfo.appendChild(newConfirmBtn);
                let newCancelBtn = document.createElement('button');
                newCancelBtn.setAttribute('class', 'cancel-btn');
                newCancelBtn.textContent = 'Cancel';
                liElementInfo.appendChild(newCancelBtn);

                newCancelBtn.addEventListener('click', onCancel);
                function onCancel() {
                    liElementInfo.remove();
                    nextBtnElement.disabled = false;
                }

                newConfirmBtn.addEventListener('click', onConfirm);
                function onConfirm() {
                    main.style.display = 'none';
                    let thankYouMessage = document.createElement('div');
                    thankYouMessage.innerHTML = `<h1 id="thank-you">Thank you, have a nice day!</h1><button id="back-btn">Back</button>`;
                    body.appendChild(thankYouMessage);
                    backBtn.addEventListener('click', onBack);
                    function onBack() {
                        window.location.reload();
                    }
                }
            }
        }
    }
}

// 94/100