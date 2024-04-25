function createDropdownContainer(title, selector) {
    const container = document.createElement('div');
    container.className = 'dropdown--container w-[195px]';
    
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown bg-white h-[315px] py-4 pb-0 rounded-xl flex flex-col';
    
    const titleSpan = document.createElement('span');
    titleSpan.className = 'dropdown__title mx-4';
    titleSpan.textContent = title;
    
    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex items-center relative';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'block h-9 w-full mx-4 mt-4 mb-6 ps-2 pe-9 border-solid border-[1px] border-gray-300 text-sm';
    
    const searchIcon = document.createElement('svg');
    searchIcon.className = 'absolute top-6 right-0 w-5 h-5 me-6 text-gray-400';
    searchIcon.setAttribute('fill', 'none');
    searchIcon.setAttribute('stroke-width', '1.5');
    searchIcon.setAttribute('stroke', 'currentColor');
    let viewBox = document.createAttribute('viewBox');
    viewBox.value = viewBox;
    searchIcon.setAttributeNode(viewBox, '0 0 24 24')
    searchIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    searchIcon.setAttribute('aria-hidden', 'true');
    searchIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>';
    
    const ulContainer = document.createElement('ul');
    ulContainer.className = selector + ' overflow-y-auto';
    
    inputContainer.appendChild(input);
    inputContainer.appendChild(searchIcon);
    
    dropdown.appendChild(titleSpan);
    dropdown.appendChild(inputContainer);
    dropdown.appendChild(ulContainer);
    
    container.appendChild(dropdown);
    
    return container;
  }

  const appContainer = document.getElementById('dropdowns');
  appContainer.appendChild(createDropdownContainer('Ingrédients', 'ingredients-container'));
  appContainer.appendChild(createDropdownContainer('Appareils', 'appliances-container'));
  appContainer.appendChild(createDropdownContainer('Ustensiles', 'ustensils-container'));
