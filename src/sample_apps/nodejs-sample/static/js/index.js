const customerSearchForm = document.getElementById('customerSearchForm');
const instancesSelect = document.getElementById('instanceSelection');
const customerSearchInput = document.getElementById('customerSearchInput');
const searchButton = document.getElementById('searchButton');
const whySearchDisabled = document.getElementById('whySearchDisabled');
const whyEntitiesDisabled = document.getElementById('whyEntitiesDisabled');
const whyButtonDisabled = document.getElementById('whyButtonDisabled');
const entitySelect = document.getElementById('entitySelection');
const searchResultsColumn = document.getElementById('searchResults');
const resultsTableHead = document.querySelector('table#resultsTable thead');
const resultsTableBody = document.querySelector('table#resultsTable tbody');
const customerCardModalBody = document.querySelector('#customerCardModal .modal-body');
const customerCardModalTitle = document.getElementById('customerCardModalLabel');
const instanceSpecificRow = document.getElementById('instanceSpecificRow');
const preSignin = document.getElementById('preSignin');
const customerSearchContent = document.getElementById('customerSearch');
const instancesLoading = document.getElementById('instancesLoading');
const entitySelectionLoading = document.getElementById('entitySelectionLoading');
const resultsLoading = document.getElementById('resultsLoading');


function populateInstancesSelect(instancesJson) {
  instancesLoading.classList.add('d-none');

  instancesJson.forEach(instance => {
    var instanceOption = document.createElement('option');
    instanceOption.innerText = instance.name;
    instanceOption.value = instance.instanceId;
    instancesSelect.appendChild(instanceOption)
  });
}

function populateEntitySelect(entityJson) {
  entitySelectionLoading.classList.add('d-none');  

  var entityOption = document.createElement('option');
  entityOption.innerText = 'All Customers';
  entityOption.value = 'Customer';
  entitySelect.appendChild(entityOption)

  entityJson.forEach(entity => {
    var entityOption = document.createElement('option');
    entityOption.innerText = entity.friendlyName;
    entityOption.value = entity.name;
    entitySelect.appendChild(entityOption)
  });
}

function signInIndexChanges() {
  customerSearchContent.classList.remove('d-none');
  preSignin.classList.add('d-none');

  instancesLoading.classList.remove('d-none');
  getInstances(populateInstancesSelect);
}

function clearInstanceSelection() {
  instancesSelect.innerHTML =
    '<select id="instanceSelection" class="custom-select"><option selected>Select an instance</option></select>';
}

function clearEntitySelection() {
  entitySelect.innerHTML =
    '<select id="entitySelection" class="custom-select"><option selected>Select an entity</option></select>';
}

function resetForm() {
  clearInstanceSelection();
  clearEntitySelection();
  customerSearchInput.value = '';
}

function signOutIndexChanges() {
  customerSearchContent.classList.add('d-none');
  preSignin.classList.remove('d-none');

  resultContentPre.innerHTML = '';
  resetForm();
}

function onInstanceSelected() {
  clearEntitySelection();

  if (instancesSelect.value !== 'Select an instance') {
    entitySelect.disabled = false;
    whyEntitiesDisabled.classList.remove('visible');
    whyEntitiesDisabled.classList.add('invisible');
    instanceSpecificRow.classList.remove('invisible');
    instanceSpecificRow.classList.add('visible');

    entitySelectionLoading.classList.remove('d-none');
    getSegments(instancesSelect.value, populateEntitySelect);
  } else {
    entitySelect.disabled = true;
    whyEntitiesDisabled.classList.remove('invisible');
    whyEntitiesDisabled.classList.add('visible');
  }
}

function onSearchInputChange() {
  if (customerSearchInput.value) {
    searchButton.disabled = false;
    whyButtonDisabled.classList.remove('visible');
    whyButtonDisabled.classList.add('invisible');
  } else {
    searchButton.disabled = true;
    whyButtonDisabled.classList.remove('invisible');
    whyButtonDisabled.classList.add('visible');
  }
}

function popCustomerCardModal(rowClickEvent) {
  var customerJson = rowClickEvent.currentTarget.getAttribute('data-customerJson');
  customerObj = JSON.parse(customerJson);

  customerCardModalTitle.innerText = customerObj['CustomerId'];
  customerCardModalBody.innerHTML = '';

  Object.keys(customerObj).forEach(function(key,index) {
      if (key === 'CustomerId') { return; }
      if (!customerObj[key]) { return; }

      var propertyDiv = document.createElement('div');
      var label = document.createElement('small');
      label.classList.add('text-muted');
      label.innerText = key;
      var p = document.createElement('p');
      p.innerText = customerObj[key];
      propertyDiv.appendChild(label);
      propertyDiv.appendChild(p);

      customerCardModalBody.appendChild(propertyDiv);
  });

  $('#customerCardModal').modal();
}

function populateCustomerResults(customerJson) {
  resultsLoading.classList.add('d-none');

  var customers = customerJson.value

  var customerPropertyNames = Object.getOwnPropertyNames(customers[0]);

  resultsTableHead.innerHTML = '';
  resultsTableBody.innerHTML = '';

  var headerTr = document.createElement('tr');
  customerPropertyNames.forEach(property => {
    if (property == 'CustomerId') {
      var th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.innerText = property;
      headerTr.appendChild(th);
    }
  });
  resultsTableHead.appendChild(headerTr);

  customers.forEach(customer => {
    var tr = document.createElement('tr');
    tr.setAttribute('data-customerJson', JSON.stringify(customer));
    tr.onclick = popCustomerCardModal;

    customerPropertyNames.forEach(property => {
      if (property == 'CustomerId') { 
        var td = document.createElement('td');
        td.innerText = customer[property];
        tr.appendChild(td);
      }
    });

    resultsTableBody.appendChild(tr);
  });

  searchResultsColumn.classList.remove('invisible');
  searchResultsColumn.classList.add('visible');
}

function onSubmitSearchForm(event) {
  event.preventDefault();

  resultsLoading.classList.remove('d-none');
  searchCustomers(instancesSelect.value, customerSearchInput.value, entitySelect.value, populateCustomerResults)
}

function onEntitySelectChange() {
  if (entitySelect.value !== 'Select an entity') {
    resultsLoading.classList.remove('d-none');
    getEntities(instancesSelect.value, entitySelect.value, populateCustomerResults);

    if (entitySelect.value == 'Customer') {
      customerSearchInput.disabled = false;
      searchButton.disabled = !!customerSearchInput.value;
      whySearchDisabled.classList.remove('visible');
      whySearchDisabled.classList.add('invisible');
    } else {
      customerSearchInput.disabled = true;
      searchButton.disabled = true;
      whySearchDisabled.classList.add('visible');
      whySearchDisabled.classList.remove('invisible');
    }
  } else {
    customerSearchInput.disabled = true;
    searchButton.disabled = true;
    whySearchDisabled.classList.add('visible');
    whySearchDisabled.classList.remove('invisible');
  }
}

signOutCallbacks.push(signOutIndexChanges);
if (account) {
  signInIndexChanges();
} else {
  signInCallbacks.push(signInIndexChanges);
}

instancesSelect.onchange = onInstanceSelected;
customerSearchInput.oninput = onSearchInputChange;
customerSearchForm.onsubmit = onSubmitSearchForm;
entitySelect.onchange = onEntitySelectChange;