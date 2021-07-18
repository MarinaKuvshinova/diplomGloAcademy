'use strict';
const localhost = 'http://localhost:3000',
    select = document.querySelector('#typeItem');
let date = [];

const groupBy = (xs, key) => {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

const initTable = (data) => {
    const tableBody = document.querySelector('#tbody');
    tableBody.textContent = '';

    data.forEach(element => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
         <tr class="table__row">
                    <td class="table__id table__cell">${element.id}</td>
                    <td class="table-type table__cell">${element.type}</td>
                    <td class="table-name table__cell">
                    ${element.name}
                    </td>
                    <td class="table-units table__cell">
                    ${element.units}
                    </td>
                    <td class="table-cost table__cell">
                    ${element.cost} руб
                    </td>
                    <td>
                        <div class="table__actions table__cell">
                            <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                            </button>
                            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                            </button>
                        </div>
                    </td>
                </tr>
        `;

        tableBody.append(tr);
    });
};

const initSelect = (types) => {
    types.forEach(type => {
        const option = document.createElement('option');
        option.innerHTML = `
            <option value="${type}">${type}</option>
        `;

        select.append(option)
    });
};

const filter = (value) => {
    initTable(value);
};

const getData = async(url ='', data = {}) => {
    const response = await fetch(url);
    return await response.json();
};

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return await response.json();
  };

const patchData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'PATCH', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  return await response.json();
};

const deleteData = async(url ='') => {
    const response = await fetch(url, {
        method: 'DELETE', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      return await response.json();
};

const getItems = () => {
    return getData(localhost + '/api/items')
    .then(async (data) => {
        initTable(data);
        initSelect(Object.keys(await groupBy(data, 'type')));
        return data;
    })
    .catch(error => console.warn(error));
};

const saveItem = async (form) => {
    const type = form.querySelector('#type').value,
        name = form.querySelector('#name').value,
        units = form.querySelector('#units').value,
        cost = form.querySelector('#cost').value;

    const res = await postData(localhost + '/api/items', { type, name, units, cost })
        .then((data) => {
            if (data.errors.length > 0) {
                console.log("Array Errors", data)
            } else {
                form.reset();
            }
        })
        .catch(error => console.warn(error));
};

const showModal = (item) => {
    const modal = document.querySelector('#modal');

    if (item) {
        modal.querySelector('#type').value = item.type;
        modal.querySelector('#name').value = item.name;
        modal.querySelector('#units').value = item.units;
        modal.querySelector('#cost').value = item.cost;
        modal.classList.add('edit');
        modal.querySelector('.modal__header').textContent = 'Изменение услуги';
        modal.dataset.id = item.id;

    } else {
        modal.classList.remove('edit');
        modal.querySelector('.modal__header').textContent = 'Добавение новой услуги';
    }

    modal.classList.add('active');
};

const validate = (form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.parentNode.classList.add('error');
            return false;
        } else {
            input.parentNode.classList.remove('error');
        }
    });
    return true;
};

const editItem = (id) => {
    return getData(`${localhost}/api/items/${id}`)
    .then(async (data) => {
        return data;
    })
    .catch(error => console.warn(error));
};


const deleteItem = (id) => {
    return deleteData(`${localhost}/api/items/${id}`)
    .then(async (data) => {
        if (data) {
            document.location.reload();
        }
    })
    .catch(error => console.warn(error));
};

const saveChangeItem = async (form, id) => {
    const type = form.querySelector('#type').value,
        name = form.querySelector('#name').value,
        units = form.querySelector('#units').value,
        cost = form.querySelector('#cost').value;

    const res = await patchData(`${localhost}/api/items/${id}`, { type, name, units, cost })
        .then((data) => {
            if (data !== null) {
                console.log("Array Errors", data);
            } else {
                document.location.reload();
            }
        })
        .catch(error => console.warn(error));
};

const init = async () => {
    date = await getItems();

    //filter
    const groupData = groupBy(date, 'type');
    select.addEventListener('change', (e) => {
        if (e.target.value === 'Все услуги') {
            initTable(date);
        } else {
            initTable(groupData[e.target.value]);
        }
    });

    //add item
    const buttonAdd = document.querySelector('.btn-addItem');
    buttonAdd.addEventListener('click', () => {
        showModal();
    });

    //save item
    const form = document.querySelector('#modal form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validate(e.currentTarget)) {
            if (e.target.closest('.edit')) {
                saveChangeItem(e.currentTarget, e.target.closest('#modal').dataset.id);
            } else {
                saveItem(e.currentTarget);
            }
        }
    });
    form.addEventListener('input', (e) => {
        if (e.target.classList.contains('input__cost')) {
            e.target.value = e.target.value.replace(/\D/,'');
        }
    });

    //close modal
    const modal = document.querySelector('#modal');
    modal.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.active') && target.closest('.button__close')) {
            modal.classList.remove('active');
            form.reset();
            modal.removeAttribute('data-id');
        }

        if (target.closest('.active') && target.closest('.cancel-button')) {
            modal.classList.remove('active');
            modal.removeAttribute('data-id');
            form.reset();
        }

        if (target.classList.contains('active')) {
            modal.classList.remove('active');
            modal.removeAttribute('data-id');
            form.reset();
        }
    });

    //edit item
    const tbody = document.querySelector('tbody');

    tbody.addEventListener('click', async (e) => {
        const target = e.target,
            tr = target.closest('tr'),
            id = tr.querySelector('.table__id').textContent;

        if (target.closest('.action-change')) {
            const item = await editItem(id);

            if (item) {
                showModal(item);
            }
        }

        if (target.closest('.action-remove')) {
            const id = tr.querySelector('.table__id').textContent;
            
            await deleteItem(id);

        }
    })


};


init();


