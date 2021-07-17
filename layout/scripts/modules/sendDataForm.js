const sendDataForm = () => {
    const forms = document.querySelectorAll('form');
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

    };

    forms.forEach(form => {
        const checked = form.querySelector('input[type="checkbox"]');
        const input = form.querySelectorAll('input[type="text"]');
        const checkInput = (value) => {
            const button = form.querySelector('button');
            if (!value) {
                button.classList.add('disabled');
            } else {
                button.classList.remove('disabled');
            }
        };

        input.forEach(ele => {
            ele.addEventListener('input', (e) => {
                checkInput(e.target.value);
            });
            checkInput(ele.value);
        });

        if (!checked.checked) {
            const button = form.querySelector('button');
            button.classList.add('disabled');
        }

        checked.addEventListener('change', (e) => {
            const parent = e.target.closest('form');

            if (e.target.checked) {
                parent.querySelector('button').classList.remove('disabled');
            } else {
                parent.querySelector('button').classList.add('disabled');
            }

            input.forEach(ele => {
                checkInput(ele.value);
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form),
            body = {};

            formData.forEach((value, key) => {
                body[key] = value;
            });

            postData(body)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.status);
                        form.reset();
                        document.querySelector('.thank-link').click();
                    } else {
                        throw new Error('status network not 200');
                    }
                }).catch(error => {
                    console.error(error);
                    
            });

        });
    });

};

export default sendDataForm;