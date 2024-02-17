window.addEventListener("load", solve);

function solve() {
  const addBtn = document.querySelector('.add-btn');
  const inputs = {
    snowmanName: document.getElementById('snowman-name'),
    snowmanHeight: document.getElementById('snowman-height'),
    location: document.getElementById('location'),
    creatorName: document.getElementById('creator-name'),
    specialAttribute: document.getElementById('special-attribute')
  };
  const snowmanPreviewList = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');
  const mainElement = document.getElementById('hero');
  const backImg = document.getElementById('back-img');

  function addSnowman(event) {
    event.preventDefault();

    const snowmanData = getFormData();
    if (!snowmanData) return;

    const snowmanElement = createSnowmanElement(snowmanData);
    snowmanPreviewList.appendChild(snowmanElement);

    clearForm();
    toggleAddButtonDisabled(true);

    const editBtn = snowmanElement.querySelector('.edit-btn');
    const nextBtn = snowmanElement.querySelector('.next-btn');

    editBtn.addEventListener('click', () => editSnowman(snowmanElement, snowmanData));
    nextBtn.addEventListener('click', () => moveToNext(snowmanElement));
  }

  function getFormData() {
    const data = {
      snowmanName: inputs.snowmanName.value.trim(),
      snowmanHeight: inputs.snowmanHeight.value.trim(),
      location: inputs.location.value.trim(),
      creatorName: inputs.creatorName.value.trim(),
      specialAttribute: inputs.specialAttribute.value
    };

    if (Object.values(data).every(value => value !== '')) {
      return data;
    }
    return null;
  }

  function createSnowmanElement(data) {
    const li = document.createElement('li');
    li.className = 'snowman-info';

    const article = document.createElement('article');
    article.innerHTML = `<p>Name: ${data.snowmanName}</p>
                           <p>Height: ${data.snowmanHeight}</p>
                           <p>Location: ${data.location}</p>
                           <p>Creator: ${data.creatorName}</p>
                           <p>Attribute: ${data.specialAttribute}</p>`;
    li.appendChild(article);

    li.appendChild(createButton('edit-btn', 'Edit'));
    li.appendChild(createButton('next-btn', 'Next'));

    return li;
  }

  function createButton(className, text) {
    const button = document.createElement('button');
    button.className = className;
    button.textContent = text;
    return button;
  }

  function clearForm() {
    Object.values(inputs).forEach(input => {
      if (input.type === 'select-one') {
        input.selectedIndex = 0;
      } else {
        input.value = '';
      }
    });
  }

  function toggleAddButtonDisabled(isDisabled) {
    addBtn.disabled = isDisabled;
  }

  function editSnowman(element, data) {
    Object.entries(data).forEach(([key, value]) => {
      inputs[key].value = value;
    });
    snowmanPreviewList.removeChild(element);
    toggleAddButtonDisabled(false);
  }

  function moveToNext(element) {
    snowList.appendChild(element);
    element.querySelector('.edit-btn').remove();
    element.querySelector('.next-btn').remove();
    element.appendChild(createButton('send-btn', 'Send'));

    const sendBtn = element.querySelector('.send-btn');
    sendBtn.addEventListener('click', () => sendSnowman());
  }

  function sendSnowman() {
    mainElement.remove();
    backImg.hidden = false;
    const backBtn = createButton('back-btn', 'Back');
    document.body.appendChild(backBtn);
    backBtn.addEventListener('click', () => window.location.reload());
  }

  addBtn.addEventListener('click', addSnowman);
}

//87 / 100