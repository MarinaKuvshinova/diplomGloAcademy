const getDataRepair = () => {
    const popup = document.querySelector('.popup-repair-types'),
        buttonsSection = popup.querySelector('.nav-list-popup-repair'),
        tablesSection = document.querySelector('.popup-repair-types-content-table');

    let count = 1;

        const getData = () => {
            fetch('../crm-backend/db.json')
                .then(response => {
                    return response.json();
                })
                .then((data) => {
                    initPopup(data);
                })
                .catch(error => console.warn(error)); 
        };

        const groupBy = (xs, key) => {
            return xs.reduce(function(rv, x) {
              (rv[x[key]] = rv[x[key]] || []).push(x);
              return rv;
            }, {});
          };

        const initPopup = (data) => {
            const groupData = groupBy(data, 'type');

            for (const key in groupData) {
                if (Object.hasOwnProperty.call(groupData, key)) {
                    const element = groupData[key];

                    const button = document.createElement('div');
                    button.innerHTML = `
								<button class="button_o popup-repair-types-nav__item ${count === 1 ? 'active' : ''}" data-tab="tab${count}">${key}</button>
                    `;
                    buttonsSection.append(button);

                    const table = document.createElement('table');
                    table.classList.add('popup-repair-types-content-table__list');
                    if (count === 1) {
                        table.classList.add('active');
                    }
                    // table.setAttribute('data-tab', `tab${count}`);
                    table.dataset.tab = `tab${count}`;
                    // table.innerHTML = `
                    // <table class="popup-repair-types-content-table__list ${count === 1 ? 'active' : ''}" data-tab="tab${count}"></table>`;

                    element.forEach(array => {

                        const tr = document.createElement('tr');
                        tr.classList.add('mobile-row');
                        tr.innerHTML = `
                            <td class="repair-types-name">${array.name}</td>
                            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                            <td class="repair-types-value">${array.units}</td>
                            <td class="repair-types-value">${array.cost}</td>
                        `;
                        table.append(tr);
                    });
                    tablesSection.appendChild(table);
                }
                count++;
            }
        };

        getData();


};

export default getDataRepair;