const apiUrl = {
    "email": "k@dust.com",
    "password": "ds11481Lovik1!!",
};

if ( //перевірка пароля за вимогами
    apiUrl.password.length >= 5 &&
    /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(apiUrl.password) &&
    /[A-Z]/.test(apiUrl.password) 
) {

    fetch('https://stage-two.i-wp-dev.com/wp-json/v4/registration', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(apiUrl) //відправка даних користувача у форматі JSON
    })
        .then(response => { //очікуємо відповідь
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to register user');
            }
        })
        .then(data => { //коли отримуємо позитивну відповідь зберігаємо в змінній токен
            console.log('Registration successful:', data);
            const token = data.jwt;

            fetch('https://stage-two.i-wp-dev.com/wp-json/v4/users', { //отримуємо список користувачів
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failed to fetch users');
                    }
                })
                .then(users => { //знаходимо елементи таблиці usersList і видаляємо її вміст
                    const userList = document.getElementById('usersList');
                    userList.innerHTML = '';
            
                    users.forEach(user => { //для кожного елемента у масиві users створюємо рядки, 1 користувач - 1 рядок з інформацією
                        const row = document.createElement('tr');
                        row.innerHTML = // створюємо HTML-вміст для кожного рядка
                            `<td>${user.user_ID}</td>
                            <td>${user.user_login}</td>
                            <td>${user.user_nice_name}</td>
                            <td>${user.first_name}</td>
                            <td>${user.last_name}</td>
                            <td><img src="${user.avatar_url}" alt="Avatar"></td>`;
                        userList.appendChild(row); //створений рядок додається до еоементу userList
                    });
                })
                .catch(error => { //помилка при отриманні списку користувачів
                    console.error('Fetch users error:', error);
                });

                document.addEventListener('DOMContentLoaded', function () { //код автоматично спрацьовує після завантаження сторінки
                    const newAvatarUrlInput = document.getElementById('newAvatarUrl');
                    const enterID = document.getElementById('choiceID');
                    const updateButton  = document.getElementById('updateButton');
                    
                    updateButton.addEventListener('click', function () { //додається слухач до кнопки
                
                        const newAvatarUrl = newAvatarUrlInput.value; //отримуємо значення, введене у поле для нової картинки
                        const userIdToUpdate = enterID.value; //отримуємо значення у полі з ID

                        const changeAvatar = { //об'єкт з введеним ID та новим посиланням на картинку
                            id: userIdToUpdate,
                            avatar_url: newAvatarUrl
                        }
                
                        fetch('https://stage-two.i-wp-dev.com/wp-json/v4/user', {
                            method: 'PUT',
                            headers: {
                                "Content-Type": 'application/json',
                                Authorization: `Bearer ${token}`
                            },
                            body: JSON.stringify(changeAvatar)
                        })
                        .then(response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error('Failed to update avatar');
                            }
                        })
                        .then(data => {
                            console.log('Successful avatar update:', data);

                            const avatarCell = document.querySelector(`#usersList td[data-user-id="${userIdToUpdate}"] img`); //знаходимо в таблиці потрібний аватар по ID
                            avatarCell.src = newAvatarUrl; //оновлюємо атрибут src для картинки і встановлюємо нове посилання
                        })
                        .catch(error => {
                            console.error('Avatar update error:', error);
                        });
                    });
                });
        })

        .catch(error => { //реєстрація невдала
            console.error('Registration error:', error);
        });
} else {
    console.error('Password does not meet the requirements.'); //невірний пароль
}