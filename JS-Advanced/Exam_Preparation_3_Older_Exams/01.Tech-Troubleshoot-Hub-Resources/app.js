window.addEventListener('load', solve);

function solve() {

        let emplyeeElement = document.getElementById('employee');
        let categoryElement = document.getElementById('category');
        let urgencyElement = document.getElementById('urgency');
        let teamElement = document.getElementById('team');
        let descriptionElement = document.getElementById('description');
        let addButtonElement = document.getElementById('add-btn');
        let partInfoElement = document.querySelector('.preview-list');
        let partConfirmElement = document.querySelector('.pending-list');
        let resolvedElement = document.querySelector('.resolved-list');



        addButtonElement.addEventListener('click', onNext);

        function onNext(e) {
            e.preventDefault();
            if(emplyeeElement.value == ''
             ||categoryElement.value == ''
            || urgencyElement.value == ''
            || teamElement.value == ''
            ||descriptionElement.value == ''
            ){
             return;
            }

            let liElementInfo = document.createElement('li');
            liElementInfo.setAttribute('class', 'problem-content');

            let articleElementInfo = document.createElement("article");

            let carModel = document.createElement('p');
            carModel.textContent = `From: ${emplyeeElement.value}`;

            let carYear = document.createElement('p');
            carYear.textContent = `Category: ${categoryElement.value}`;

            let partName = document.createElement('p');
            partName.textContent = `Urgency: ${urgencyElement.value}`;
            
            let partNumber = document.createElement('p');
            partNumber.textContent = `Assigned to: ${teamElement.value}`;

            let condition = document.createElement('p');
            condition.textContent = `Description: ${descriptionElement.value}`;


            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'edit-btn');
            editBtn.textContent = 'Edit';

            let continueBtn = document.createElement("button");
            continueBtn.setAttribute('class', 'continue-btn');
            continueBtn.textContent = 'Continue';


            articleElementInfo.appendChild(carModel);
            articleElementInfo.appendChild(carYear);
            articleElementInfo.appendChild(partName);
            articleElementInfo.appendChild(partNumber);
            articleElementInfo.appendChild(condition);

            liElementInfo.appendChild(articleElementInfo);
            liElementInfo.appendChild(editBtn);
            liElementInfo.appendChild(continueBtn);

            partInfoElement.appendChild(liElementInfo);


        let editedCrModel = emplyeeElement.value;
        let editedCrYear = categoryElement.value;
        let editedPartName = urgencyElement.value;
        let editedPartNumber = teamElement.value; 
        let editedCondition =  descriptionElement.value;



        emplyeeElement.value = '';
        categoryElement.value = '';
        urgencyElement.value = '';
        teamElement.value = '';
        descriptionElement.value = '';

        addButtonElement.disabled = true;

        editBtn.addEventListener("click", onEdit);

        function onEdit() {

            emplyeeElement.value = editedCrModel;
            categoryElement.value = editedCrYear;
            urgencyElement.value = editedPartName;
            teamElement.value = editedPartNumber;
            descriptionElement.value = editedCondition;
            
            liElementInfo.remove();
            addButtonElement.disabled = false;
        }

        continueBtn.addEventListener("click", onContinue);

        function onContinue() {
            let liElementconfirm = document.createElement('li');
            liElementconfirm.setAttribute('class', 'problem-content');

            let articleElementContinue = document.createElement("article");
            articleElementContinue = articleElementInfo;

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute('class', 'resolve-btn');
            confirmBtn.textContent = 'Resolved';
    
           
    
    
            liElementconfirm.appendChild(articleElementContinue);
            liElementconfirm.appendChild(confirmBtn);
            liElementInfo.remove();
    
            partConfirmElement.appendChild(liElementconfirm);
            addButtonElement.disabled = false;
            

            confirmBtn.addEventListener('click', onConfirm);
        function onConfirm() {

            let liElementResolved = document.createElement('li');
            liElementResolved.setAttribute('class', 'problem-content');

            let articleElementResolved = document.createElement("article");
            articleElementResolved = articleElementContinue;

            let cancelBtn = document.createElement("button");
            cancelBtn.setAttribute('class', 'clear-btn');
            cancelBtn.textContent = 'Clear';

            cancelBtn.addEventListener('click',onCancel);

            liElementResolved.appendChild(articleElementResolved);
            liElementResolved.appendChild(cancelBtn);
            liElementconfirm.remove();

            resolvedElement.appendChild(liElementResolved);

            function onCancel() {
                liElementResolved.remove();
                addButtonElement.disabled = false;
            }
        }
      
        
        };


        }   
}


    
    
