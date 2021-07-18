const sendDataForm = (formId) => {
    const form = document.getElementById(formId),
        errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы свами свяжемся!',
        statusMessage = document.createElement('div');

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

    };

    const formData = new FormData(form),
    body = {};

    statusMessage.className = 'loaded';
    statusMessage.textContent = loadMessage;

    formData.forEach((value, key) => {
        body[key] = value;
    });

    form.appendChild(statusMessage);

    postData(body)
        .then((response) => {
            if (response.status === 200) {
                setTimeout(() => {
                    statusMessage.remove();
                    form.reset();
                    document.querySelector('.thank-link').click();
                }, 2000);
            } else {
                throw new Error('status network not 200');
            }
        }).catch(error => {
            statusMessage.textContent = errorMessage;
            setTimeout(() => {
                statusMessage.remove();
                form.reset();
            }, 2000);
            console.error(error);
    });

};

export default sendDataForm;